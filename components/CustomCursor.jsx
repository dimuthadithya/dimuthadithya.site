'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleHover = () => setHover(true);
    const handleLeave = () => setHover(false);

    window.addEventListener('mousemove', move);

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <motion.div
      className='fixed top-0 left-0 bg-green-400 rounded-full pointer-events-none z-50'
      animate={{
        x: mouse.x,
        y: mouse.y,
        scale: hover ? 2 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      style={{
        width: 12,
        height: 12,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  );
}
