"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Adjusted offset for smoother animation
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[50vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50vh] max-w-4xl items-center bg-transparent px-[1rem] py-[2rem]"
        }
      >
        <span
          className={
            "flex flex-wrap p-4 text-xl font-bold text-black/20 dark:text-white/20 md:p-6 md:text-2xl lg:p-8 lg:text-3xl xl:text-4xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 0.8 / words.length; // Slightly reduce end range for smoother transitions
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity }}
        className="text-black dark:text-white"
      >
        {children}
      </motion.span>
    </span>
  )
};