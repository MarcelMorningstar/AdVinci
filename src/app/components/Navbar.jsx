'use client'

import React, { useState } from 'react'
import LinkToHash from "./LinkToHash";
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/logo.svg'
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { useWindowDimensions } from "../utilities/window";
import { HiMenuAlt3 } from "react-icons/hi";
import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)
  const dimensions = useWindowDimensions()

  return (
    <nav className='fixed z-50 flex flex-row justify-between w-full h-20 px-[12%] bg-[var(--foreground)]'>
      <div className='flex flex-row gap-1 items-end pb-2.5'>
        <LinkToHash to="/#Home" className='relative h-8/12 aspect-[1.47]'>
          <Image src={Logo} fill objectFit='contain' priority alt='AdVinci' />
        </LinkToHash>
        {
          dimensions.width > 950 && (
            <div className='flex felx-row gap-3 items-end h-10/12'>
              <LinkToHash to="/#Services" className='text-xl text-gray-300 whitespace-nowrap hover:text-white cursor-pointer'>Services</LinkToHash>
              <LinkToHash to="/#HowWeBuildYourBrand" className='text-xl text-gray-300 whitespace-nowrap hover:text-white cursor-pointer'>Building Your Brand</LinkToHash>
              <LinkToHash to="/#AboutUs" className='text-xl text-gray-300 whitespace-nowrap hover:text-white cursor-pointer'>About Us</LinkToHash>
              <Link href="/pricing" className='text-xl text-gray-300 whitespace-nowrap hover:text-white cursor-pointer'>Pricing</Link>
              <Link href="/FAQ" className='text-xl text-gray-300 whitespace-nowrap hover:text-white cursor-pointer'>FAQ</Link>
            </div>
          )
        }
      </div>

      <div className='flex flex-row gap-3 items-end h-full'>
        <LinkToHash to="/#Contact" className={styles.outlineborder}>Contact</LinkToHash>
        {
          dimensions.width <= 950 && (
            <Menu open={openMenu} handler={setOpenMenu} placement="bottom-end" className="border-0 rounded-md">
                <MenuHandler className="mb-1">
                  <span><HiMenuAlt3 className="w-9 h-9 text-gray-300 hover:text-white cursor-pointer" /></span>
                </MenuHandler>
                <MenuList className="relative z-50 w-auto text-right py-3 px-4">
                  <ul className="w-full focus:outline-none">
                    <span className="text-foreground text-base font-semibold capitalize">Company Overview</span>
                    <LinkToHash to='/#Services' className="block">
                      <MenuItem className='text-right'>
                        <span className="text-zinc-700 capitalize hover:text-black">Services</span>
                      </MenuItem>
                    </LinkToHash>
                    <LinkToHash to='/#HowWeBuildYourBrand' className="block">
                      <MenuItem className='text-right'>
                        <span className="text-zinc-700 capitalize hover:text-black">Building Your Brand</span>
                      </MenuItem>
                    </LinkToHash>
                    <LinkToHash to='/#Services' className="block">
                      <MenuItem className='text-right'>
                        <span className="text-zinc-700 capitalize hover:text-black">About Us</span>
                      </MenuItem>
                    </LinkToHash>
                    <LinkToHash to='/pricing' className="block">
                      <MenuItem className='text-right'>
                        <span className="text-zinc-700 capitalize hover:text-black">Pricing</span>
                      </MenuItem>
                    </LinkToHash>
                    <hr className="text-zinc-500 my-3" />
                    <span className="text-foreground text-base font-semibold capitalize">Support</span>
                    <LinkToHash to='/FAQ' className="block">
                      <MenuItem className='text-right'>
                        <span className="text-zinc-700 capitalize hover:text-black">FAQ</span>
                      </MenuItem>
                    </LinkToHash>
                  </ul>
                </MenuList>
            </Menu>
          )
        }
      </div>

      <div className={styles.bottomline}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
      </div>
    </nav>
  )
}
