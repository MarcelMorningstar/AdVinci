import React from 'react'
import {useTranslations} from 'next-intl';

export default function FormLayout(props) {
  const t = useTranslations('contact');
  
  return (
    <div className='w-full'>
      <div className='flex flex-col px-4 sm:px-24 gap-1'>
        <h2 className='text-center text-3xl sm:text-5xl font-bold'>{ t("title") }</h2>
        <p className='text-center text-gray-500 text-sm sm:text-base'>{ t("description") }</p>
      </div>

      <form action={props.action} onSubmit={props.onSubmit} className="w-full flex flex-col gap-4 mt-8">
        {props.children}
      </form>
    </div>
  )
}
