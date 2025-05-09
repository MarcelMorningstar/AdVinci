'use client'

import React, { useState } from 'react'
import styles from '../styles/Pricing.module.scss';

const subs = [
    {
        id: 1,
        title: "Stater Flash",
        price: "€ 90",
        offer: [
            "10 second slot",
            "1 week", 
            "Static ad creation"
        ]
    },
    {
        id: 2,
        title: "Community Builder",
        price: "€ 320",
        offer: [
            "16 second slot",
            "4 week", 
            "1 free refresh"
        ]
    },
    {
        id: 3,
        title: "Expansion Plus",
        price: "€ 1,200",
        offer: [
            "30 second slot",
            "12 week", 
            "Animated creative"
        ]
    },
]

export default function Prices() {
    const [sub, setSub] = useState(1)

    return (
        <div className='flex flex-col items-center pt-44 pb-16'>
            <h2>San Severino Marche</h2>
            <div className='flex flex-row justify-center gap-5'>
                {
                    subs.map((item) => {
                        return (
                            <div 
                                key={item.id} 
                                className='flex w-[350px] flex-col items-center justify-start gap-5 px-6 sm:px-8 py-6 sm:py-8 backdrop-blur-md shadow-lg rounded-2xl cursor-pointer'
                                onClick={() => setSub(item.id)}
                            >
                                <div>
                                    <h3 className='text-2xl font-medium mb-1'>{ item.title }</h3>
                                    <h4 className='text-3xl font-bold mb-3'>{ item.price }</h4>
                                    <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus maiores odit aspernatur.</p>
                                </div>
                                <div className='bg-[var(--foreground)]/50 w-full h-0.5' />
                                <ul className='space-y-2'>
                                    {
                                        item.offer.map((item, key) => (
                                            <li 
                                                key={key}
                                                className='list-disc'
                                            >
                                                { item }
                                            </li>
                                        )) 
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
