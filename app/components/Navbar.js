import logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import Profile from './Profile';

export default function Navbar() {
  return (
    <div className='flex gap-3 justify-between  px-pad bg-gradient-to-r from-start-nav to-end-nav py-3'>
        <div className='flex items-center gap-3 '>
            <span className='shadow-md rounded-full'>
               <Link href="/"> <Image src={logo} alt='Online learning' /></Link>
            </span>
            <Link href="/" ><span className='text-white text-3xl'>Online Learning</span></Link>

        </div>
        <div className='flex items-center gap-5 my-auto text-white'>
            <ul className='flex justify-center items-center my-auto gap-3'>
                <li><Link href="/academic">Academic</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
        <div className='h-4 border border-white'></div>
            <Profile/>
        </div>
    </div>
  )
}
