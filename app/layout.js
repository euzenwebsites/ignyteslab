import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/ui/Footer'
import { Providers } from './providers'
import NavBarHeader from './components/ui/NavBarHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ignytes Lab Website',
  description: 'we provide Software services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        <NavBarHeader/>
        {children}
      <Footer/>
      </Providers>
      </body>
    </html>
  )
}
