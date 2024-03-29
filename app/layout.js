import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Online learning',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {/* <div className='lg:px-pad md:px-md-pad'> */}
          {children}
        {/* </div> */}
        <div className='bg-[#e4edf4]'>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
