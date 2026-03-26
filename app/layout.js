import {
  Geist,
  Geist_Mono,
  Inconsolata,
  Noto_Sans_Pahawh_Hmong,
} from 'next/font/google';
import './globals.css';
import { SmoothCursor } from '@/components/ui/smooth-cursor';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inconsolata = Inconsolata({
  variable: '--font-inconsolata',
  subsets: ['latin'],
  weight: '400',
});

const nanoSansPahwhHmong = Noto_Sans_Pahawh_Hmong({
  variable: '--font-nano-sans',
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: 'Dimuth Adithya | Full Stack Developer',
    template: '%s | Dimuth Adithya'
  },
  description: 'Full-stack developer based in Sri Lanka, specializing in building modern, scalable, and user-focused web applications from zero to one.',
  keywords: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'React', 'Next.js', 'Sri Lanka'],
  authors: [{ name: 'Dimuth Adithya' }],
  creator: 'Dimuth Adithya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Dimuth Adithya | Full Stack Developer',
    description: 'Full-stack developer based in Sri Lanka, specializing in building modern web applications.',
    siteName: 'Dimuth Adithya',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimuth Adithya | Full Stack Developer',
    description: 'Full-stack developer based in Sri Lanka, specializing in building modern web applications.',
    creator: '@dimuthadithya',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${inconsolata.variable} ${nanoSansPahwhHmong.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col bg-neutral-950 relative '>
        <SmoothCursor />
        {children}
      </body>
    </html>
  );
}
