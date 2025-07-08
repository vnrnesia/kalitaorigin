"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

export default function TypewriterTicker() {
  const words = useMemo(() => ["стабильно", "быстро", "легко"], []); // kendi kelimelerinizi yazın

  useEffect(() => {
    // useEffect içeriği
  }, [words]);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const maxWordLength = Math.max(...words.map((word) => word.length));

  useEffect(() => {
    if (!isInView || finished) return;

    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 100 : 180;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, prev.length + 1);
          if (nextText === currentWord) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
          return nextText;
        } else {
          const nextText = prev.slice(0, -1);
          if (nextText === "") {
            const nextIndex = (currentWordIndex + 1) % words.length;
            const newLoopCount = loopCount + 1;

            if (newLoopCount >= words.length * 2) {
              setDisplayedText(words[0]);
              setFinished(true);
              return words[0];
            }

            setIsDeleting(false);
            setCurrentWordIndex(nextIndex);
            setLoopCount(newLoopCount);
          }
          return nextText;
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, loopCount, isInView, finished, words]);

  return (
    <>
      <button className="px-4 my-6 py-1 rounded-full bg-gray-100 text-gray-700 text-sm dark:bg-gray-800 dark:text-gray-200">
         Доверие. Качество.
      </button>
      <div
        ref={ref}
        className="flex flex-col items-center mb-[-10px] pb-16 md:flex-row md:justify-center md:items-center text-[30px] md:text-[85px] font-extrabold"
        style={{ whiteSpace: "nowrap" }}
      >
        <span>Зарабатывайте</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[#862828] inline-block mt-2 md:mt-0 md:ml-4"
          style={{ minWidth: `${maxWordLength}ch` }}
        >
          {displayedText || "\u00A0"}
          <motion.span
            style={{
              display: "inline-block",
              width: 4,
              height: "3.5rem",
              backgroundColor: "#862828",
              marginLeft: 4,
              verticalAlign: "bottom",
              animation: finished ? "none" : "blink 1s infinite alternate",
            }}
            className="md:h-[3.5rem] h-[2.5rem]"
          />
        </motion.span>

        <style>
          {`
            @keyframes blink {
              0% { opacity: 1; }
              100% { opacity: 0; }
            }
          `}
        </style>
      </div>
    </>
  );
}
