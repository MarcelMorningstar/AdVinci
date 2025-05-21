import React from 'react'
import {useTranslations} from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image'
import Logo from '../assets/logo.svg'
import { MdEmail, MdPhone } from "react-icons/md";
import { PiTrademark } from "react-icons/pi";
import { IoLogoInstagram, IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";

export default function Footer({ color }) {
  const t = useTranslations('footer');
  const t2 = useTranslations('navbar');

  return (
    <div className="flex flex-col gap-10 w-full justify-center pt-10 pb-4 text-white" style={{ backgroundColor: color }}>
      <div className='flex flex-col gap-8 lg:gap-0'>
        <div className='flex flex-col sm:flex-row gap-8 justify-between px-8 md:px-28 lg:px-36 xl:px-44'>
          <div className='flex flex-col gap-2 items-center sm:items-start'>
            <div className='relative flex flex-row items-end gap-1 mb-1'>
              <Image src={Logo} className='w-12 h-8 object-contain' alt='AdVinci' />
              <h4 className='text-2xl leading-5 text-white font-medium'>AdVinci</h4>
            </div>
            <div className='flex flex-row gap-1.5 text-white hover:text-[var(--primary1)]'>
              <MdEmail className='w-6 h-6 text-inherit transition ease-in duration-100' />
              <span className='transition ease-in duration-100'><a href="mailto:arita@advinci.it">arita@advinci.it</a></span>
            </div>
            <div className='flex flex-row gap-1.5 text-white hover:text-[var(--primary1)]'>
              <MdPhone className='w-6 h-6 text-inherit transition ease-in duration-100' />
              <span className='transition ease-in duration-100'><a href="tel:+393508008361">+393508008361</a></span>
            </div>
            <div className='flex flex-row gap-1.5'>
              <PiTrademark className='w-6 h-6 text-white' />
              <span>PIVA 02154870436</span>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-6 sm:gap-16 text-center sm:text-right'>
            <div className='flex flex-col gap-1.5'>
              <span className='mb-0.5'>{ t2("category2") }</span>
              <Link className='text-neutral-200 hover:text-white' href='/#Services' >{ t2("item1") }</Link>
              <Link className='text-neutral-200 hover:text-white' href='/aboutus' >{ t2("item2") }</Link>
              <Link className='text-neutral-200 hover:text-white' href='/pricing' >{ t2("item3") }</Link>
            </div>
            <div className='flex flex-col gap-1.5'>
              <span className='mb-0.5'>{ t2("category3") }</span>
              <Link className='text-neutral-200 hover:text-white' href='/#Contact' >{ t2("item7") }</Link>
              <Link className='text-neutral-200 hover:text-white' href='/FAQ' >{ t2("item4") }</Link>
              <Link className='text-neutral-200 hover:text-white' href='/privacy' >{ t2("item5") }</Link>
              <Link className='text-neutral-200 hover:text-white' href='/terms' >{ t2("item6") }</Link>
            </div>
          </div>
        </div>
        <div className='relative top-0 lg:-top-8 h-fit lg:h-0 flex flex-row gap-2 justify-center'>
          <Link href="https://www.instagram.com/advinci.studio?igsh=bW52ZXN5c3V6Ym5l" target="_blank">
            <IoLogoInstagram className='w-12 h-12 text-white hover:text-[var(--primary1)] transition ease-in duration-100' />
          </Link>
          <Link href="https://www.facebook.com/people/Advincistudio/61575626319583/" target="_blank">
            <IoLogoFacebook className='w-12 h-12 text-white hover:text-[var(--primary1)] transition ease-in duration-100' />
          </Link>
          <Link href="https://wa.me/+393508008361" target="_blank">
            <IoLogoWhatsapp className='w-12 h-12 text-white hover:text-[var(--primary1)] transition ease-in duration-100' />
          </Link>
        </div>
      </div>
      <span className='flex justify-center items-center text-base sm:text-lg'>© { new Date().getFullYear() } AdVinci. { t("title") }</span>
    </div>
  )
}
