import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PottyPass — Restrooms When You Need Them',
  description:
    'PottyPass is a curated network of NYC\'s finest private restrooms, available on-demand exactly when you need them. Join the waitlist.',
  metadataBase: new URL('https://pottypassapp.com'),
  openGraph: {
    title: 'PottyPass — Restrooms When You Need Them',
    description: 'NYC\'s curated network of clean, on-demand restrooms. Coming soon.',
    url: 'https://pottypassapp.com',
    siteName: 'PottyPass',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PottyPass — Restrooms When You Need Them',
    description: 'NYC\'s curated network of clean, on-demand restrooms. Coming soon.',
  },
  icons: {
    icon: '/branding_images/pin_reg.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
