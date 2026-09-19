import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/components/ui/Toast';
import { CustomCursor } from '@/components/ui/CustomCursor';

export const metadata: Metadata = {
  title: 'Kaviraj R | AI & Data Science Developer',
  description:
    'Portfolio of Kaviraj R, a B.Tech Artificial Intelligence and Data Science student building projects in AI, machine learning, full-stack development, Android, IoT, and data science.',
  keywords: [
    'Kaviraj R',
    'AI Developer',
    'Data Science Student',
    'QuantumLearn',
    'HydroReminder',
    'Smart India Hackathon',
    'Full-Stack Developer',
    'Tamil Nadu India'
  ],
  authors: [{ name: 'Kaviraj R' }],
  creator: 'Kaviraj R',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kaviraj-portfolio.vercel.app',
    title: 'Kaviraj R | AI & Data Science Developer',
    description:
      'Portfolio of Kaviraj R, a B.Tech Artificial Intelligence and Data Science student building projects in AI, machine learning, full-stack development, Android, IoT, and data science.',
    siteName: 'Kaviraj R Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaviraj R | AI & Data Science Developer',
    description:
      'Portfolio of Kaviraj R, a B.Tech Artificial Intelligence and Data Science student building practical applications in AI, ML, Mobile & IoT.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        <ThemeProvider>
          <ToastProvider>
            <CustomCursor />
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
