import './globals.css';
import type { Metadata } from 'next';
import LayoutWrapper from '@/components/LayoutWrapper';

export const metadata: Metadata = {
  title: 'Book App',
  description: 'A simple book manager',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col relative">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
