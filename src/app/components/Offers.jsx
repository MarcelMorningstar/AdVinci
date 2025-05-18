import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { FaRegIdCard, FaGrinWink  } from "react-icons/fa";
import { MdOutlineCelebration } from "react-icons/md";
import { LuBadgePercent, LuClock } from "react-icons/lu";

export default function Offers() {
  return (
    <div className='w-10/12 xl:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pt-24'>
        <div className='flex flex-col gap-6'>
            <h2 className='text-4xl text-center font-medium'>Founding Client<br/>25% Off</h2>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                        <LuBadgePercent className='w-14 h-14 text-[var(--primary2)]' />
                    </div>
                    <p className='w-9/12 text-center'>Be one of our first 10 clients and save 25% on any package.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                        <MdOutlineCelebration className='w-14 h-14 text-[var(--primary2)]' />
                    </div>
                    <p className='w-9/12 text-center'>To celebrate our launch in San Severino Marche, we’re offering a special discount to our first 10 advertisers.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                        <LuClock className='w-14 h-14 text-[var(--primary2)]' />
                    </div>
                    <p className='w-9/12 text-center'>Lock in your spot early, get seen across town, and be part of something new. Limited availability — this offer ends once 10 clients sign or after 60 days.</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-6'>
            <h2 className='text-4xl text-center font-medium'>Referral Credit<br/>Earn €50</h2>
            <div className='flex flex-col gap-12'>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                        <MdOutlineMessage className='w-14 h-14 text-[var(--primary2)]' />
                    </div>
                    <p className='w-9/12 text-center'>Know another local business that could benefit from digital advertising? Send them our way and when they book any package, you’ll both receive a €50 credit on your next invoice.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                        <FaRegIdCard className='w-14 h-14 text-[var(--primary2)]' />
                    </div>
                    <p className='w-9/12 text-center'> It's a win-win — and perfect for communities like ours.</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-1'>
                    <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                        <FaGrinWink className='w-14 h-14 text-[var(--primary2)]' />
                    </div>
                    <p className='w-9/12 text-center'>Stack up credits up to €200. No strings attached — just help your neighbours grow too.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
