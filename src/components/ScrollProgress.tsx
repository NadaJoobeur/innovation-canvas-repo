import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;

      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-16 left-0 w-full h-1 bg-muted/30 z-[60]">
      <div
        className="h-full bg-gradient-primary transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
