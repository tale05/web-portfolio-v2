import { useState, useEffect } from "react";

// Hook kiểm tra màn hình mobile
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < breakpoint;
      setIsMobile((prev) => (prev !== mobile ? mobile : prev));
    };

    handleResize(); // kiểm tra khi load lần đầu
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
