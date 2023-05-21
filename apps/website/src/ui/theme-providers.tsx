'use client'

import { ReactNode } from 'react'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <NextThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
    {children}
  </NextThemeProvider>
)
