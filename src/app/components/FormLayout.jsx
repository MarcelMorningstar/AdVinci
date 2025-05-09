import React from 'react'

export default function FormLayout(props) {
  return (
    <div className='w-full'>
      <div className='flex flex-col px-4 sm:px-24 gap-1'>
        <h2 className='text-center text-3xl sm:text-5xl font-bold'>Design with Us</h2>
        <p className='text-center text-gray-500 text-sm sm:text-base'>We reply to every message personally.</p>
      </div>

      <form action={props.action} onSubmit={props.onSubmit} className="w-full flex flex-col gap-4 mt-8">
        {props.children}
      </form>
    </div>
  )
}
