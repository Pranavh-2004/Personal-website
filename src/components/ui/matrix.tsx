import * as React from "react";
import { useEffect, useId, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type Frame = number[][];

type MatrixProps = React.HTMLAttributes<HTMLDivElement> & {
  rows: number;
  cols: number;
  pattern?: Frame;
  frames?: Frame[];
  fps?: number;
  autoplay?: boolean;
  loop?: boolean;
  size?: number;
  gap?: number;
  palette?: {
    on: string;
    off: string;
  };
  brightness?: number;
  ariaLabel?: string;
};

const normalizeFrame = (
  frame: Frame | undefined,
  rows: number,
  cols: number,
): Frame =>
  Array.from({ length: rows }, (_, rowIndex) =>
    Array.from(
      { length: cols },
      (_, columnIndex) => frame?.[rowIndex]?.[columnIndex] ?? 0,
    ),
  );

const useFrameIndex = ({
  frameCount,
  fps,
  autoplay,
  loop,
}: {
  frameCount: number;
  fps: number;
  autoplay: boolean;
  loop: boolean;
}) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const frameIndexRef = useRef(0);
  const lastFrameAt = useRef(0);

  useEffect(() => {
    setFrameIndex(0);
    frameIndexRef.current = 0;
    lastFrameAt.current = 0;

    if (!autoplay || frameCount < 2) return;

    const frameDuration = 1000 / fps;
    let requestId = 0;

    const animate = (time: number) => {
      if (lastFrameAt.current === 0) lastFrameAt.current = time;

      if (time - lastFrameAt.current >= frameDuration) {
        const nextIndex = frameIndexRef.current + 1;
        const resolvedIndex =
          nextIndex >= frameCount ? (loop ? 0 : frameCount - 1) : nextIndex;
        frameIndexRef.current = resolvedIndex;
        setFrameIndex(resolvedIndex);
        lastFrameAt.current = time;

        if (!loop && resolvedIndex === frameCount - 1) return;
      }

      requestId = window.requestAnimationFrame(animate);
    };

    requestId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(requestId);
  }, [autoplay, fps, frameCount, loop]);

  return frameIndex;
};

export const Matrix = React.forwardRef<HTMLDivElement, MatrixProps>(
  (
    {
      rows,
      cols,
      pattern,
      frames,
      fps = 12,
      autoplay = true,
      loop = true,
      size = 10,
      gap = 2,
      palette = {
        on: "currentColor",
        off: "hsl(var(--muted-foreground))",
      },
      brightness = 1,
      ariaLabel = "Animated matrix display",
      className,
      ...props
    },
    ref,
  ) => {
    const frameIndex = useFrameIndex({
      frameCount: frames?.length ?? 0,
      fps,
      autoplay: autoplay && !pattern,
      loop,
    });
    const gradientId = useId().replace(/:/g, "");

    const currentFrame = useMemo(
      () =>
        normalizeFrame(
          pattern ?? frames?.[frameIndex] ?? frames?.[0],
          rows,
          cols,
        ),
      [cols, frameIndex, frames, pattern, rows],
    );

    const width = cols * (size + gap) - gap;
    const height = rows * (size + gap) - gap;

    return (
      <div
        ref={ref}
        role="img"
        aria-label={ariaLabel}
        className={cn("relative inline-block", className)}
        {...props}
      >
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
          className="block overflow-visible"
        >
          <defs>
            <radialGradient id={`${gradientId}-on`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={palette.on} stopOpacity="1" />
              <stop offset="72%" stopColor={palette.on} stopOpacity="0.86" />
              <stop offset="100%" stopColor={palette.on} stopOpacity="0.58" />
            </radialGradient>
          </defs>
          {currentFrame.flatMap((row, rowIndex) =>
            row.map((value, columnIndex) => {
              const opacity = Math.max(0, Math.min(1, value * brightness));
              const active = opacity > 0.05;
              return (
                <circle
                  key={`${rowIndex}-${columnIndex}`}
                  cx={columnIndex * (size + gap) + size / 2}
                  cy={rowIndex * (size + gap) + size / 2}
                  r={(size / 2) * 0.9}
                  fill={
                    active ? `url(#${gradientId}-on)` : palette.off
                  }
                  opacity={active ? opacity : 0.1}
                />
              );
            }),
          )}
        </svg>
      </div>
    );
  },
);

Matrix.displayName = "Matrix";
