"use client";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

function SmoothScrolling({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.02,
        smoothWheel: true,
        duration: 1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      }}
    >
      <div className="lenis-wrapper">
        {children}
      </div>
    </ReactLenis>
  );
}

export default SmoothScrolling;