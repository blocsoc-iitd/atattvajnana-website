"use client"

import { useEffect, useState } from "react";

export default function MeshBackground() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      handleResize();

      // Add listener
      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="flex absolute inset-0 z-0 mask-b-from-20% mask-b-to-80% w-auto h-fit overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${width} 1080`}
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="#ccc"
              strokeWidth="0.2"
            />
          </pattern>
        </defs>
        <rect width={`${width}`} height={`1080px`} fill="url(#grid)" />
      </svg>
    </div>
  );
}