"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  objectPosition?: string;
  objectFit?: string;
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  fill = false,
  priority = false,
  quality = 100,
  sizes,
  objectPosition = "center",
  objectFit = "cover",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const element = container.querySelector("img, video");
    if (!element) return;

    // Create timeline for this element
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Add animation to timeline
    tl.fromTo(
      element,
      {
        y: "-12%",
        scale: 1.2, // Start slightly scaled up to prevent white edges during parallax
      },
      {
        y: "12%",
        scale: 1.2, // Maintain scale throughout animation
        ease: "none",
      }
    );

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  // Check if source is a video
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');

  return (
    <div
      ref={containerRef}
      className={`img-container relative overflow-hidden w-full h-full ${className}`}
    >
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-${objectFit} object-${objectPosition}`}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill={true}
          className={`object-${objectFit} object-${objectPosition}`}
          priority={priority}
          quality={quality}
          sizes={sizes}
        />
      )}
    </div>
  );
}
