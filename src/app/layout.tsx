import './globals.css'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Book App',
  description: 'A simple book manager',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 text-white px-6 py-4 shadow">
          <h1 className="text-2xl font-bold">📚 Book Manager</h1>
        </header>

        {/* Content Area */}
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white px-6 py-4 text-center">
          <p>© {new Date().getFullYear()} Book App by You</p>
        </footer>
      </body>
    </html>
  )
}
