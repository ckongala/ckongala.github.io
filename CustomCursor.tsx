"use client";
import { useEffect, useState, useCallback } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    const isClickable = 
      target.tagName === 'A' || 
      target.tagName === 'BUTTON' || 
      target.onclick !== null ||
      target.closest('a') !== null ||
      target.closest('button') !== null ||
      target.classList.contains('cursor-pointer') ||
      (target.hasAttribute('role') && target.getAttribute('role') === 'button') ||
      window.getComputedStyle(target).cursor === 'pointer';
    
    setIsPointer(isClickable);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Inject critical CSS
    const style = document.createElement('style');
    style.id = 'force-no-cursor';
    style.textContent = `* { cursor: none !important; }`;
    document.head.insertBefore(style, document.head.firstChild);

    // Force on body continuously
    const enforceNoCursor = () => {
      document.body.style.cursor = 'none';
      document.documentElement.style.cursor = 'none';
    };

    // Set up listeners
    window.addEventListener('mousemove', updateCursorPosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Enforce continuously
    const interval = setInterval(enforceNoCursor, 50);
    enforceNoCursor();

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(interval);
      style.remove();
    };
  }, [updateCursorPosition, handleMouseOver, handleMouseLeave, handleMouseEnter]);

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div
        className="custom-cursor-circle"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isPointer 
            ? 'translate(-50%, -50%) scale(1.5)' 
            : 'translate(-50%, -50%) scale(1)',
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
