import FormLayout from './FormLayout'
import Input from "./Input"
import SubmitBtn from "./SubmitBtn"
import React from 'react'

export default function ContactForm3() {
  return (
    <FormLayout title="Digital Advertising Consultation">
      <Input type="text" label="Company Name" />
      <Input type="email" label="Email" />
      <Input type="phone" label="Phone" />
      <Input type="text" label="Topic" />

      <textarea name="" id="" className="font-medium outline outline-gray-300 rounded-lg px-3 py-4 focus:outline-gray-500" placeholder="Message"></textarea>

      <SubmitBtn />
    </FormLayout>
  )
}
