"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";

interface SliderProps {
  children: React.ReactNode;
  autoSlide?: boolean;
  autoInterval?: number;
}

export default function Slider({
  children,
  autoSlide = false,
  autoInterval = 3600,
}: SliderProps) {
  const listChilds = useMemo(() => {
    return Array.isArray(children) ? children : [children];
  }, [children]);

  const totalSlides = listChilds.length;

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const clickNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const clickPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (totalSlides <= 1) {
      return undefined;
    }

    if (autoSlide) {
      const interval = setInterval(clickNext, autoInterval);
      return () => clearInterval(interval);
    }

    return undefined;
  }, [clickNext, totalSlides, autoInterval, autoSlide]);

  return (
    <div
      className="flex flex-col pb-10 gap-3"
      role="region"
      aria-label="Card Slider"
      aria-roledescription="slider"
    >
      <div className="flex py-3 px-3 overflow-x-hidden">
        <ul
          aria-live="polite"
          className="flex w-full md:w-5/6 transition-transform duration-700 ease-in-out gap-3"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {listChilds.map((child, index) => {
            const key = index + 1;
            return (
              <li
                key={key}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${key} of ${totalSlides}`}
                className="flex-shrink-0 w-full"
              >
                {child}
              </li>
            );
          })}
        </ul>
      </div>
      <nav className="flex justify-center gap-3" aria-label="Slider Navigation">
        <button
          type="button"
          aria-label="Previous Slide"
          className="btn-primary px-3 py-1 text-xs h-fit"
          onClick={clickPrev}
        >
          Prev
        </button>
        <button
          type="button"
          aria-label="Next Slide"
          className="btn-primary px-3 py-1 text-xs h-fit"
          onClick={clickNext}
        >
          Next
        </button>
      </nav>
    </div>
  );
}
