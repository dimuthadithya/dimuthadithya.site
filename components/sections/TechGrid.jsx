'use client';

import * as motion from 'motion/react-client';

/**
 * A staggered grid of technology icons with labels.
 *
 * @param {string}   title   – category heading, e.g. "Frontend"
 * @param {Array}    items   – array of { name, icon?, svg? }
 *                             If `icon` is provided, loads from skillicons.dev.
 *                             If `src` is provided, renders the image from that path.
 *                             If `svg` is provided, renders the svg inside a styled box.
 */
export default function TechGrid({ title, items }) {
  return (
    <div className='my-10'>
      <h2 className='text-2xl sm:text-3xl lg:text-4xl text-neutral-300 mb-4'>
        {title}
      </h2>
      <div className='flex flex-wrap gap-6 items-center'>
        {items.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className='flex flex-col items-center'
          >
            {tech.svg ? (
              <div className='w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-800'>
                {tech.svg}
              </div>
            ) : tech.src ? (
              <img src={tech.src} alt={tech.name} className='w-14 h-14' />
            ) : (
              <img
                src={`${process.env.NEXT_PUBLIC_ICON_URL.split('?')[0]}?i=${tech.icon}`}
                alt={tech.name}
                className='w-14 h-14'
              />
            )}
            <span className='mt-2 text-sm text-neutral-300'>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
