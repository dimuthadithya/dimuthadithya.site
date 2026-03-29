'use client';

/**
 * Site footer with brand info, navigation links, social links, copyright,
 * and the large watermark signature.
 */
export default function Footer() {
  const navLinks = [
    { label: 'Selected Works', href: '#works' },
    { label: 'Work Experience', href: '#experience' },
    { label: 'Teaching & Mentoring', href: '#teaching' },
    { label: 'My Stack', href: '#stack' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: process.env.NEXT_PUBLIC_GITHUB_URL },
    { label: 'LinkedIn', href: process.env.NEXT_PUBLIC_LINKEDIN_URL },
  ];

  return (
    <footer className='border-t border-neutral-800 pt-16 pb-0 mt-10'>
      {/* Footer grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 font-inconsolata'>
        {/* Brand */}
        <div className='flex flex-col gap-3'>
          <span className='text-white text-lg tracking-tight font-playfair-display'>
            Dimuth Aditya
          </span>
          <p className='text-neutral-500 text-sm leading-relaxed max-w-xs'>
            Full-stack developer based in Sri Lanka, building modern web
            applications from zero to one.
          </p>
          <span className='text-neutral-600 text-xs mt-2'>
            dimuthadithya01@gmail.com
          </span>
        </div>

        {/* Navigation */}
        <div className='flex flex-col gap-3'>
          <span className='text-neutral-400 text-xs tracking-widest uppercase mb-1'>
            Navigation
          </span>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='text-neutral-500 text-sm hover:text-red-600 transition-colors duration-200 w-fit'
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className='flex flex-col gap-3'>
          <span className='text-neutral-400 text-xs tracking-widest uppercase mb-1'>
            Find me
          </span>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-500 text-sm hover:text-red-600 transition-colors duration-200 w-fit flex items-center gap-2 group'
            >
              <span className='w-3 h-px bg-neutral-700 group-hover:w-5 group-hover:bg-red-600 transition-all duration-200' />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Divider + copyright */}
      <div className='border-t border-neutral-900 mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-4 font-inconsolata'>
        <span className='text-neutral-600 text-xs'>
          © 2026 Dimuth Aditya. All rights reserved.
        </span>
        <span className='text-neutral-700 text-xs'>
          Built with Next.js · Framer Motion · Deployed on Vercel
        </span>
      </div>


    </footer>
  );
}
