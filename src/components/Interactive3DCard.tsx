import { useRef, useState, ReactNode } from "react";

interface Interactive3DCardProps {
  children: ReactNode;
  className?: string;
}

const Interactive3DCard = ({ children, className = "" }: Interactive3DCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-300 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.05 : 1})`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Shine effect */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovering ? 0.3 : 0,
          background: `radial-gradient(circle at ${
            cardRef.current
              ? ((rotation.y + 10) / 20) * 100
              : 50
          }% ${
            cardRef.current
              ? ((rotation.x + 10) / 20) * 100
              : 50
          }%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
};

export default Interactive3DCard;
