import { useEffect, useRef, useState } from "react";

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const SplitTextReveal = ({ text, className = "", delay = 0 }: SplitTextRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: isVisible ? `${index * 30}ms` : "0ms",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default SplitTextReveal;
