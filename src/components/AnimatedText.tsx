"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedTextProps {
  children: string;
  delay?: number;
  charDelay?: number;
  className?: string;
}

export function AnimatedText({
  children,
  delay = 0,
  charDelay = 30,
  className = "",
}: AnimatedTextProps) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleChars((prev) => {
          if (prev >= children.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, charDelay);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasStarted, children.length, delay, charDelay]);

  return (
    <span ref={ref} className={className}>
      {children.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-150 ${
            index < visibleChars
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
          style={{
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

interface AnimatedParagraphProps {
  children: string;
  delay?: number;
  charDelay?: number;
  className?: string;
}

export function AnimatedParagraph({
  children,
  delay = 0,
  charDelay = 25,
  className = "",
}: AnimatedParagraphProps) {
  return (
    <p className={className}>
      <AnimatedText delay={delay} charDelay={charDelay}>
        {children}
      </AnimatedText>
    </p>
  );
}
