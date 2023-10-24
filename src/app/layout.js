import './globals.css'
import { IBM_Plex_Mono, Roboto } from 'next/font/google'

const OW_font = IBM_Plex_Mono({ weight:'400', subsets: ['latin'] })

export const metadata = {
  title: "Santiago's Portfolio",
  description: 'Santiago Fernandez Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={OW_font.className}>
        {children}
      </body>
    </html>
  )
}
