import FormLayout from './FormLayout'
import Input from "./Input"
import SubmitBtn from "./SubmitBtn"
import React from 'react'

export default function ContactForm1() {
  return (
    <FormLayout title="Design with us">
      <div className="flex flex-row gap-2">
        <Input type="text" label="Company Name" styles="w-full" />
        <Input type="text" label="VAT" styles="w-full" />
      </div>
      <Input type="email" label="Email" />
      <Input type="phone" label="Phone" />

      <textarea name="" id="" className="font-medium outline outline-gray-300 rounded-lg px-3 py-4 focus:outline-gray-500" placeholder="Message"></textarea>

      <div className="flex flex-col gap-1">
        <label className="flex flex-row items-end gap-1 text-sm font-medium" htmlFor="file_input">Upload your idea (optional)<p className="text-xs font-normal" id="file_input_help">PNG, JPG, PDF (Max file size 10MB).</p></label>
        <input type="file" className="w-full outline outline-gray-300 rounded-lg text-sm file:text-white file:px-2 file:py-2 file:bg-gray-700 file:cursor-pointer cursor-pointer" id="file_input"  />
      </div>
        
      <SubmitBtn />
    </FormLayout>
  )
}
