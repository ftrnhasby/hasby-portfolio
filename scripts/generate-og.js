/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Portrait dimensions: resize hasby-formal.png preserving aspect ratio
  // target height = 440, so target width = Math.round(440 * (430 / 506)) = 374
  const portraitW = 374;
  const portraitH = 440;
  
  // Resize portrait with rounded corners mask
  const portraitResized = await sharp('public/images/hasby-formal.png')
    .resize(portraitW, portraitH, { fit: 'cover' })
    .toBuffer();

  const roundedMask = Buffer.from(
    `<svg width="${portraitW}" height="${portraitH}">
      <rect x="0" y="0" width="${portraitW}" height="${portraitH}" rx="20" fill="#fff"/>
    </svg>`
  );

  const roundedPortrait = await sharp(portraitResized)
    .composite([{ input: roundedMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Background and text SVG overlay
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bg-glow" cx="25%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#18181c" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#08080a" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.16)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.03)"/>
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="#08080a"/>
      <rect width="${width}" height="${height}" fill="url(#bg-glow)"/>
      
      <!-- Inset Border -->
      <rect x="30" y="30" width="1140" height="570" rx="24" fill="none" stroke="url(#border-grad)" stroke-width="1.5"/>

      <!-- Status Pill -->
      <g transform="translate(80, 85)">
        <rect width="360" height="34" rx="17" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>
        <circle cx="18" cy="17" r="4.5" fill="#34d399"/>
        <text x="32" y="22" font-family="ui-monospace, monospace, sans-serif" font-size="11" font-weight="600" fill="#d4d4d8" letter-spacing="1.5">AI &amp; DIRECT RESPONSE VIDEO</text>
      </g>

      <!-- Main Heading: Hasby -->
      <text x="80" y="215" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="76" font-weight="700" fill="#ffffff" letter-spacing="-2.5">HASBY</text>

      <!-- Subheadline -->
      <text x="80" y="270" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="24" font-weight="400" fill="#a1a1aa" letter-spacing="-0.5">High-Retention Video Ads &amp; Motion Storytelling</text>

      <!-- Editorial Summary -->
      <text x="80" y="330" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="400" fill="#71717a">Engineering vertical video creative through consumer psychology</text>
      <text x="80" y="358" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="400" fill="#71717a">and programmatic Remotion animations.</text>

      <!-- Core Capabilities Pill Row -->
      <g transform="translate(80, 420)">
        <rect x="0" y="0" width="180" height="38" rx="10" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.06)" stroke-width="1"/>
        <text x="16" y="24" font-family="ui-monospace, monospace, sans-serif" font-size="12" fill="#e4e4e7">Remotion Engine</text>

        <rect x="195" y="0" width="170" height="38" rx="10" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.06)" stroke-width="1"/>
        <text x="211" y="24" font-family="ui-monospace, monospace, sans-serif" font-size="12" fill="#e4e4e7">ElevenLabs Audio</text>

        <rect x="380" y="0" width="145" height="38" rx="10" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.06)" stroke-width="1"/>
        <text x="396" y="24" font-family="ui-monospace, monospace, sans-serif" font-size="12" fill="#e4e4e7">9:16 Vertical</text>
      </g>

      <!-- Featured Case Study Banner -->
      <g transform="translate(80, 495)">
        <text x="0" y="16" font-family="ui-monospace, monospace, sans-serif" font-size="11" fill="#71717a" letter-spacing="1">FEATURED SPEC AD</text>
        <text x="0" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="600" fill="#f4f4f5">Katama Coffee &amp; Space • 3 Creative Variations (30s &amp; 44s)</text>
      </g>

      <!-- Portrait Frame Backdrop -->
      <g transform="translate(745, 95)">
        <rect x="-6" y="-6" width="${portraitW + 12}" height="${portraitH + 12}" rx="26" fill="#111114" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
      </g>
    </svg>
  `);

  // Composite SVG background with rounded portrait
  await sharp(svgOverlay)
    .composite([
      {
        input: roundedPortrait,
        top: 95,
        left: 745,
      }
    ])
    .png()
    .toFile('public/og-image.png');

  console.log('Successfully created public/og-image.png');
}

createOgImage().catch(console.error);
