"use client"

import React, { useState, useRef } from 'react'
import Logo from './Logo'

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null)
    const [cursor, setCursor] = useState({ x: 0, y: 0 })
    const [mouseOnCard, setMouseOnCard] = useState(false)

    const handleMouseMove = (
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        if (sectionRef.current !== null) {
            const rect = sectionRef.current.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top
            setCursor({ x: x, y: y })
        }
    }

    return (
        <section 
            className='h-screen bg-[var(--foreground)]'
            ref={sectionRef}
            onMouseEnter={() => setMouseOnCard(true)}
            onMouseLeave={() => setMouseOnCard(false)}
            onMouseMove={(event) => handleMouseMove(event)}
        >
            <div className='w-full h-full flex justify-center items-center'>
                <Logo cursor={cursor} sectionRef={sectionRef} mouseOnCard={mouseOnCard} />
            </div>
        </section>
    )
}
