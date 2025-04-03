import FormLayout from './FormLayout'
import Input from "./Input"
import SubmitBtn from "./SubmitBtn"
import React from 'react'

export default function ContactForm4() {
  return (
    <FormLayout title="General enquiries">
      <div className="flex flex-row gap-2">
        <Input type="text" label="Company Name" styles="w-full" />
        <Input type="text" label="VAT" styles="w-full" />
      </div>

      <div className="flex flex-row gap-2">
        <Input type="email" label="Email" styles="w-full" />
        <Input type="phone" label="Phone" styles="w-full"/>
      </div>

      <textarea name="" id="" className="font-medium outline outline-gray-300 rounded-lg px-3 py-4 focus:outline-gray-500" placeholder="Message"></textarea>

      <SubmitBtn />
    </FormLayout>
  )
}
