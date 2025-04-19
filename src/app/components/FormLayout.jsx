import React from 'react'

export default function FormLayout(props) {
  return (
    <div>
      <div className='flex flex-col px-4 sm:px-24 gap-1'>
        <h3 className='text-center text-2xl sm:text-4xl font-bold'>{props.title}</h3>
        <p className='text-center text-gray-500 text-sm sm:text-base'>We reply to every message personally.</p>
      </div>

      <form action={props.action} onSubmit={props.onSubmit} className="flex flex-col gap-4 mt-8">
        {props.children}
      </form>
    </div>
  )
}
