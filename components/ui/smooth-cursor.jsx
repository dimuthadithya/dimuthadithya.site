'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

const DESKTOP_POINTER_QUERY = '(any-hover: hover) and (any-pointer: fine)';

export function SmoothCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotX = useSpring(0, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 50 });

  const ringX = useSpring(0, { stiffness: 200, damping: 25 });
  const ringY = useSpring(0, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY);

    const updateEnabled = () => {
      setIsEnabled(mediaQuery.matches);
    };

    updateEnabled();
    mediaQuery.addEventListener('change', updateEnabled);

    return () => {
      mediaQuery.removeEventListener('change', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMove = (e) => {
      setIsVisible(true);

      const { clientX, clientY } = e;

      dotX.set(clientX);
      dotY.set(clientY);

      ringX.set(clientX);
      ringY.set(clientY);
    };

    document.body.style.cursor = 'none';
    window.addEventListener('pointermove', handleMove);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.body.style.cursor = 'auto';
    };
  }, [isEnabled, dotX, dotY, ringX, ringY]);

  if (!isEnabled) return null;

  return (
    <>
      <motion.div
        className='pointer-events-none fixed z-50 mix-blend-difference'
        style={{
          left: ringX,
          top: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 32,
          height: 32,
          borderRadius: '9999px',
          border: '1.5px solid white',
          opacity: isVisible ? 1 : 0,
        }}
      />

      <motion.div
        className='pointer-events-none fixed z-50 mix-blend-difference'
        style={{
          left: dotX,
          top: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          borderRadius: '9999px',
          backgroundColor: 'white',
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
}
