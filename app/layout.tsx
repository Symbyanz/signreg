import Header from '@/components/Header/Header'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FirsNeue from 'next/font/local'
import Footer from '@/components/Footer/Footer'
import Modal from '@/components/Modal/Modal'



export const metadata: Metadata = {
  title: 'Sign.reg - юридическая помощь по всем отраслям права',
  description: 'Узкопрофильные специалисты по Всем отраслям права. Участие более чем в 5 000 процессах.',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const firsNeue = FirsNeue({
  src: '../public/fonts/TTFirsNeue/TTFirsNeue-Bold.woff2',
  variable: '--font-firsNeue',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${firsNeue.variable}`}>
      <body>
        <Header />
        <main className='main'>{children}</main>
        <Modal />
        <Footer />
      </body>
    </html>
  )
}

