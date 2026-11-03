"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
  threshold?: number;
  direction?: "up" | "none";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use Intersection Observer for lightweight, performant scroll trigger
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const transformStyle =
    direction === "up"
      ? isVisible
        ? "translate3d(0, 0, 0)"
        : "translate3d(0, 12px, 0)"
      : "none";

  return (
    <div
      ref={elementRef}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "850ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: transformStyle,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
