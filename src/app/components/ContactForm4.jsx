import FormLayout from './FormLayout'
import Input from "./Input"
import SubmitBtn from "./SubmitBtn"
import React from 'react'

export default function ContactForm4() {
  return (
    <FormLayout title="General enquiries">
        <div className="flex flex-row gap-2">
          <Input type="text" label="First Name" styles="w-full" />
          <Input type="text" label="Last Name" styles="w-full" />
        </div>

        <Input type="email" label="Email" />

        <Input type="phone" label="Phone" />

        <textarea name="" id="" className="font-medium outline outline-gray-300 rounded-lg px-3 py-4 focus:outline-gray-500" placeholder="Message"></textarea>

        <SubmitBtn />
    </FormLayout>
  )
}
