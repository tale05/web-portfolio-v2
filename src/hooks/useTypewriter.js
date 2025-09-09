import { useState, useEffect } from "react";

// Hook typewriter chung
export function useTypewriter(text, speed) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let i = 0;
    let timeoutId;

    const type = () => {
      if (i <= text.length) {
        setDisplay(text.substring(0, i));
        i++;
        timeoutId = setTimeout(type, speed);
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, [text, speed]);

  return display;
}
