import { useState, useEffect } from "react";

export default function useTypewriterAuto(words, typeSpeed = 100) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, typeSpeed]);

  return text;
}
