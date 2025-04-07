import React from 'react'

export default function Footer() {
  return (
    <div className='flex w-full justify-center py-4'>
        <span className='text-base sm:text-lg text-gray-600'>© { new Date().getFullYear() } Advinci. All rights reserved.</span>
    </div>
  )
}
