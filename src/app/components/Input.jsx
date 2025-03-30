import React from 'react'

export default function Input(props) {
  return (
    <input type={props.type} id={props.label} className={`text-lg font-medium outline outline-gray-300 rounded-xl px-3 py-4 focus:outline-2 focus:outline-gray-500 ${props.styles}`} placeholder={props.label} required />
  )
}
