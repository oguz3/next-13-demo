import { Inter, Work_Sans } from 'next/font/google'
import cn from 'classnames'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const work_sans = Work_Sans({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(work_sans.className, inter.variable)}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
