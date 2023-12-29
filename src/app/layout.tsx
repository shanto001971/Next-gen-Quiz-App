"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import store from '../store';
import NavBar from '@/Components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Include any necessary head elements */}
      </head>
      <body className={inter.className}>
        {/* Render the NavBar component */}
        <NavBar />

        {/* Wrap the children with the Redux Provider */}
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
