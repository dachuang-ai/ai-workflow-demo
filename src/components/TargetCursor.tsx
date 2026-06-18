import { useEffect, useState } from 'react';

export default function TargetCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device is desktop
    const checkDevice = () => {
      const mobileCheck = 
        ('ontouchstart' in window) || 
        (navigator.maxTouchPoints > 0) || 
        (window.innerWidth < 1024);
      setIsMobile(mobileCheck);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.closest('.interactive-node') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  // Interpolate trail position (spring effect)
  useEffect(() => {
    if (isMobile) return;
    
    let animationFrameId: number;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        // Ease calculation
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    
    animationFrameId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Laser point exactly under cursor */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* High-tech tech target cursor trailing */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHoveringClickable ? 'w-10 h-10 border-orange-500 bg-orange-500/10' : 'w-6 h-6 border-orange-400/30'
        } border rounded-full`}
        style={{ left: `${trail.x}px`, top: `${trail.y}px` }}
      >
        {/* Ticks on target cursor to look like radar collimator */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[3px] bg-orange-500 transition-all ${isHoveringClickable ? 'h-[5px]' : ''}`} />
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[3px] bg-orange-500 transition-all ${isHoveringClickable ? 'h-[5px]' : ''}`} />
        <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-[3px] bg-orange-500 transition-all ${isHoveringClickable ? 'w-[5px]' : ''}`} />
        <div className={`absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-[3px] bg-orange-500 transition-all ${isHoveringClickable ? 'w-[5px]' : ''}`} />
      </div>
    </>
  );
}
