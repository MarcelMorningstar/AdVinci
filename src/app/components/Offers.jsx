import React from 'react'
import { useTranslations } from 'next-intl';
import { MdOutlineMessage } from "react-icons/md";
import { FaRegIdCard, FaGrinWink  } from "react-icons/fa";
import { MdOutlineCelebration } from "react-icons/md";
import { LuBadgePercent, LuClock } from "react-icons/lu";
import styles from "../styles/Offers.module.scss"

export default function Offers() {
    const t = useTranslations('offers');
    const title1 = t("bonus1.title").replace(/\n/g, '<br />');
    const title2 = t("bonus2.title").replace(/\n/g, '<br />');
    
    return (
        <div className={`w-10/12 xl:w-8/12 mx-auto pt-24 ${styles.gridLayout}`}>
            <h2 style={{ gridArea: "title1" }} className='text-4xl text-center font-semibold' dangerouslySetInnerHTML={{ __html: title1 }}/>
            <div style={{ gridArea: "a" }} className='flex flex-col items-center justify-center gap-1'>
                <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                    <LuBadgePercent className='w-14 h-14 text-[var(--primary2)]' />
                </div>
                <p className='w-9/12 text-center'>{ t("bonus1.text1") }</p>
            </div>
            <div style={{ gridArea: "b" }} className='flex flex-col items-center justify-center gap-1'>
                <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                    <MdOutlineCelebration className='w-14 h-14 text-[var(--primary2)]' />
                </div>
                <p className='w-9/12 text-center'>{ t("bonus1.text2") }</p>
            </div>
            <div style={{ gridArea: "c" }} className='flex flex-col items-center justify-center gap-1'>
                <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                    <LuClock className='w-14 h-14 text-[var(--primary2)]' />
                </div>
                <p className='w-9/12 text-center'>{ t("bonus1.text3") }</p>
            </div>

            <div style={{ gridArea: "line" }} className='w-0.5 h-full bg-black' />

            <h2 style={{ gridArea: "title2" }} className='text-4xl text-center font-semibold pt-12 md:pt-0' dangerouslySetInnerHTML={{ __html: title2 }} />
            <div style={{ gridArea: "d" }} className='flex flex-col items-center justify-center gap-1'>
                <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                    <MdOutlineMessage className='w-14 h-14 text-[var(--primary2)]' />
                </div>
                <p className='w-9/12 text-center'>{ t("bonus2.text1") }</p>
            </div>
            <div style={{ gridArea: "e" }} className='flex flex-col items-center justify-center gap-1'>
                <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                    <FaRegIdCard className='w-14 h-14 text-[var(--primary2)]' />
                </div>
                <p className='w-9/12 text-center'>{ t("bonus2.text2") }</p>
            </div>
            <div style={{ gridArea: "f" }} className='flex flex-col items-center justify-center gap-1'>
                <div className='flex justify-center items-center w-24 h-24 rounded-full bg-neutral-300'>
                    <FaGrinWink className='w-14 h-14 text-[var(--primary2)]' />
                </div>
                <p className='w-9/12 text-center'>{ t("bonus2.text3") }</p>
            </div>
        </div>
    )
}
