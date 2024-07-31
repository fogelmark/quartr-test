import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Code test",
  description: "Just a code test",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 bg-gradient-to-b from-slate-100 from-70% to-slate-400 text-slate-950`}
      >
        {children}
      </body>
    </html>
  )
}
