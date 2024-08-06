import React, { useEffect, useRef, useState } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

const MenuIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/menuV3.json', // Path to your Lottie animation JSON
      });
    }

    return () => {
      animationRef.current?.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      // Close menu and reset animation if user scrolls down after opening it
      if (isOpen && currentScrollTop > lastScrollTop) {
        toggleMenu();
      }
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, lastScrollTop]);

  const toggleMenu = () => {
    if (animationRef.current) {
      const direction = isOpen ? -1 : 1; // Reverse if open, forward if closed
      animationRef.current.setDirection(direction);
      animationRef.current.play();
      setIsOpen(!isOpen); // Toggle state after playing the animation
    }
  };

  return (
    <div className="relative">
      <div
        onClick={toggleMenu}
        className="cursor-pointer w-8 h-8 flex items-center justify-center"
        aria-label="Menu"
      >
        {/* Lottie animation */}
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-full" />
      </div>
    </div>
  );
};

export default MenuIcon;
