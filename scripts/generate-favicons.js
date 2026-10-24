/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('fs');

async function generateFavicons() {
  const src = 'public/images/hasby-formal.png';
  const meta = await sharp(src).metadata();
  console.log(`Source image: ${meta.width}x${meta.height}`);

  // Square crop around the face
  // Width: 425, Height: 531
  const cropSize = 350;
  const cropLeft = Math.round((meta.width - cropSize) / 2); // 38
  const cropTop = 30;

  const cropped = sharp(src).extract({
    left: cropLeft,
    top: cropTop,
    width: cropSize,
    height: cropSize,
  });

  // Helper to produce a circular masked PNG buffer at a given size
  async function makeRoundIcon(size) {
    const resized = await cropped.clone().resize(size, size).png().toBuffer();

    const circleMask = Buffer.from(
      `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#ffffff"/>
      </svg>`
    );

    return sharp(resized)
      .composite([{ input: circleMask, blend: 'dest-in' }])
      .png()
      .toBuffer();
  }

  const b16 = await makeRoundIcon(16);
  const b32 = await makeRoundIcon(32);
  const b48 = await makeRoundIcon(48);
  const b180 = await makeRoundIcon(180);

  fs.writeFileSync('public/favicon-16x16.png', b16);
  fs.writeFileSync('public/favicon-32x32.png', b32);
  fs.writeFileSync('public/apple-touch-icon.png', b180);
  fs.writeFileSync('src/app/icon.png', b32);
  fs.writeFileSync('src/app/apple-icon.png', b180);

  // Build standard multi-resolution .ico containing 16x16, 32x32, 48x48
  function createIco(images) {
    const count = images.length;
    const headerSize = 6;
    const dirEntrySize = 16;
    let dataOffset = headerSize + count * dirEntrySize;

    const header = Buffer.alloc(headerSize);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type 1 = icon
    header.writeUInt16LE(count, 4);

    const dirEntries = [];
    for (const img of images) {
      const entry = Buffer.alloc(dirEntrySize);
      entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
      entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
      entry.writeUInt8(0, 2); // colors
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // planes
      entry.writeUInt16LE(32, 6); // bpp
      entry.writeUInt32LE(img.buffer.length, 8); // size
      entry.writeUInt32LE(dataOffset, 12); // offset
      dirEntries.push(entry);
      dataOffset += img.buffer.length;
    }

    return Buffer.concat([header, ...dirEntries, ...images.map((i) => i.buffer)]);
  }

  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: b16 },
    { width: 32, height: 32, buffer: b32 },
    { width: 48, height: 48, buffer: b48 },
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);

  console.log('Successfully generated circular favicons (16, 32, 48, 180 px + ICO)!');
}

generateFavicons().catch(console.error);
