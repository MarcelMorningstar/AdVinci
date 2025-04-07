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
            id="Logo" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="-50 -50 850 320"
            className='w-3/4 duration-200 transition-all fill-[var(--foreground)]'
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
            <g id="Layer_2" filter="url(#glow)">
                <g id="Layer_3">
                    <g>
                        <path stroke='url(#gradient)' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' d="M.01,215.49L130.47,0l97.94,172.32,82.07-137s18.9-27.3,48.57-27.87l-130.29,217.82L129.39,52.32,49.23,185.92s-12.35,25.7-49.23,29.57h.01Z"/>
                        <path stroke='url(#gradient)' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' d="M134.09,94.99l-15.3,27.3,35.47,62.67s16.92,30.6,48.22,30.14l-68.39-120.11h0Z"/>
                        <path stroke='url(#gradient)' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' d="M213.3,7.56l51.55,77.72,16.91-28.12-21.55-29.47s-14.38-18.73-46.92-20.12h0Z"/>
                    </g>
                </g>
                <g id="Layer_2-2">
                <g>
                    <path stroke='url(#gradient)' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' d="M272.92,224.1l26.41-70.64h13.59l26.21,70.64h-13.2l-5.91-16.9h-28.23l-5.76,16.9h-13.12ZM294.89,197.4h21.87l-9.65-27.89c-.22-.73-.44-1.45-.62-2.19s-.36-1.65-.51-2.73h-.29c-.16.95-.34,1.82-.51,2.58-.18.78-.38,1.52-.62,2.24l-9.65,27.98h-.01Z"/>
                    <path stroke='url(#gradient)' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' d="M363.84,224.1v-70.64h22.22c12.51,0,21.89,2.86,28.12,8.6,6.24,5.74,9.36,14.34,9.36,25.84s-3.45,19.71-10.35,26.3-16.07,9.9-27.54,9.9h-21.82.01ZM375.81,163.61v50.39h9.26c8.11,0,14.45-2.28,19.01-6.84,4.56-4.56,6.84-10.92,6.84-19.06s-2.18-13.98-6.53-18.18c-4.35-4.21-10.73-6.3-19.14-6.3h-9.45.01Z"/>
                    <path stroke='url(#gradient)' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' d="M507.08,153.46l-25.31,70.64h-13.45l-24.83-70.64h13.05l17.25,52.66c.33,1.12.61,2.23.84,3.35s.42,2.21.59,3.3h.2c.13-1.05.33-2.14.62-3.27.28-1.13.62-2.31,1.02-3.52l17.34-52.51h12.71-.03Z"/>
                    <path stroke='url(#gradient)' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' d="M543.52,224.1h-12.02v-70.64h12.02v70.64Z"/>
                    <path stroke='url(#gradient)' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' d="M636.17,224.1h-13.01l-32.8-50.5c-.66-1.02-1.23-1.95-1.73-2.81-.49-.86-.88-1.62-1.19-2.32h-.25c.13.99.24,2.35.29,4.09.07,1.74.11,3.88.11,6.41v45.12h-11.58v-70.64h13.9l31.77,49.36c.69,1.05,1.31,2.02,1.85,2.9s.98,1.67,1.31,2.36h.2c-.13-.95-.22-2.25-.29-3.92-.07-1.66-.11-3.7-.11-6.13v-44.58h11.52v70.64h.01Z"/>
                    <path stroke='url(#gradient)' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' d="M720.25,220.45c-3.59,1.7-7.07,2.94-10.44,3.69-3.39.75-7.07,1.13-11.04,1.13-10.84,0-19.32-3.15-25.45-9.45-6.13-6.3-9.19-14.96-9.19-25.96s3.39-20.19,10.18-27.15c6.78-6.96,15.64-10.44,26.58-10.44,3.57,0,6.87.29,9.85.88,2.99.59,6.03,1.54,9.11,2.86l-3.94,9.81c-2.47-1.05-4.87-1.82-7.21-2.29-2.35-.47-4.89-.71-7.61-.71-7.07,0-12.87,2.36-17.44,7.07-4.56,4.71-6.84,11.1-6.84,19.18s2.1,14.21,6.28,18.79c4.19,4.57,9.85,6.87,16.97,6.87,2.36,0,4.87-.32,7.49-.94,2.62-.62,5.33-1.65,8.08-3.06l4.63,9.7h0Z"/>
                    <path stroke='url(#gradient)' strokeWidth={4} strokeLinecap='round' strokeLinejoin='round' d="M758.94,224.1h-12.02v-70.64h12.02v70.64Z"/>
                </g>
                </g>
            </g>
        </svg>
    )
}
