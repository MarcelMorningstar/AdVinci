import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/logo.svg'
import { MdEmail, MdPhone } from "react-icons/md";
import { PiTrademark } from "react-icons/pi";

export default function Footer() {
  return (
    <div className='flex flex-col gap-10 w-full justify-center pt-10 pb-4 bg-[var(--pastal)] text-white'>
      <div className='flex flex-col sm:flex-row gap-8 justify-between items-center px-8 md:px-28 lg:px-44'>
        <div className='flex flex-col gap-2 items-center sm:items-start'>
          <div className='relative flex flex-row gap-1 mb-1'>
            <Image src={Logo} className='w-12 h-8 object-contain' alt='AdVinci' />
            <h3 className='text-2xl font-medium'>AdVinci</h3>
          </div>
          <div className='flex flex-row gap-1.5'>
            <MdEmail className='w-6 h-6 text-white' />
            <span><a href="mailto:arita@advinci.it">arita@advinci.it</a></span>
          </div>
          <div className='flex flex-row gap-1.5'>
            <MdPhone className='w-6 h-6 text-white' />
            <span><a href="tel:+3508008361">+3508008361</a></span>
          </div>
          <div className='flex flex-row gap-1.5'>
            <PiTrademark className='w-6 h-6 text-white' />
            <span>PIVA 02154870436</span>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-6 sm:gap-16 text-center sm:text-right'>
          <div className='flex flex-col gap-1.5'>
            <span className='mb-0.5'>Company</span>
            <Link className='text-neutral-200' href='/#Services' >Services</Link>
            <Link className='text-neutral-200' href='/aboutus' >About Us</Link>
            <Link className='text-neutral-200' href='/pricing' >Pricing</Link>
          </div>
          <div className='flex flex-col gap-1.5'>
            <span className='mb-0.5'>Support</span>
            <Link className='text-neutral-200' href='/#Contact' >Contact</Link>
            <Link className='text-neutral-200' href='/FAQ' >FAQ</Link>
            <Link className='text-neutral-200' href='/privacy' >Privacy Policy</Link>
            <Link className='text-neutral-200' href='/terms' >Terms of Service</Link>
          </div>
        </div>
      </div>
      <span className='flex justify-center items-center text-base sm:text-lg'>© { new Date().getFullYear() } Advinci. All rights reserved.</span>
    </div>
  )
}
