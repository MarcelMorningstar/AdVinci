import React from 'react'

export default function Input(props) {
  return (
    <input 
      type={props.type} 
      name={props.name}
      id={props.label} 
      className={`text-lg font-medium bg-transparent border-0 outline outline-gray-300 rounded-xl px-3 py-4 focus:outline-2 focus:outline-gray-500 focus:ring-0 ${props.styles}`} 
      placeholder={props.label} 
      onChange={props.onChange}
      />
  )
}
