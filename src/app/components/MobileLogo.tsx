"use client"

import React, { useEffect, useState, type RefObject } from 'react'

interface Props {
    cursor: { x: number; y: number }
    sectionRef: RefObject<HTMLElement | null>
    mouseOnCard: boolean
}
  
export default function Logo({ cursor, sectionRef, mouseOnCard }: Props) {
    const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" })
    
    useEffect(() => {
        if (sectionRef.current && cursor.x !== null && cursor.y !== null) {
          const cardRect = sectionRef.current.getBoundingClientRect()
          const cxPercentage = (cursor.x / cardRect.width) * 100
          const cyPercentage = (cursor.y / cardRect.height) * 100
          setGradientCenter({
            cx: `${cxPercentage}%`,
            cy: `${cyPercentage}%`,
          })
        }
    }, [cursor, sectionRef])

    return (
        <svg 
            id="MobileLogo" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="-50 -50 820 550"
            className='w-11/12 duration-200 transition-all fill-[var(--foreground)]'
        >
            <defs>
                <radialGradient 
                    id='gradient' 
                    gradientUnits='userSpaceOnUse' 
                    cx={gradientCenter.cx}
                    cy={gradientCenter.cy}
                >
                    {mouseOnCard && <stop stopColor='#03C4FB' />} 
                    <stop offset={1} stopColor='#9A51B8' />
                </radialGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" result="blur"/>
                    <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <g id="Layer_5" filter="url(#glow)">
                <g id="Layer_6">
                    <g>
                        <path stroke='url(#gradient)' strokeWidth={6} strokeLinecap='round' strokeLinejoin='round' d="M0,438.27L265.33,0l199.21,350.48,166.91-278.65s38.43-55.52,98.78-56.68l-264.98,443.02L263.16,106.42,100.14,378.13S75.03,430.41,0,438.28h0Z"/>
                        <path stroke='url(#gradient)' strokeWidth={6} strokeLinecap='round' strokeLinejoin='round' d="M272.7,193.19l-31.12,55.52,72.14,127.47s34.42,62.23,98.07,61.3l-139.09-244.29h0Z"/>
                        <path stroke='url(#gradient)' strokeWidth={6} strokeLinecap='round' strokeLinejoin='round' d="M433.8,15.37l104.84,158.06,34.4-57.2-43.82-59.93s-29.24-38.1-95.42-40.93h0Z"/>
                    </g>
                </g>
            </g>
        </svg>
    )
}
