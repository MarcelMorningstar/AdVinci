import React, { useState, useEffect, useActionState } from 'react'
import FormLayout from './FormLayout'
import Input from "./Input"
import PhoneInput from 'react-phone-input-2'
import ContactFormCheckBox from './ContactFormCheckBox'
import SubmitBtn from "./SubmitBtn"
import { Toaster, toast } from "sonner";
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { sendMail } from '../utilities/mail'

import 'react-phone-input-2/lib/style.css'

export default function ContactForm2() {
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({
    company: '',
    email: '',
    phone: '',
    place: '',
    message: '',
    file: ''
  });
  const initialState = { type: null, message: null };

  const handleFormSubmit = async (prevState, formDataFromDom) => {
    const formDataObj = {
      company: formDataFromDom.get('company')?.trim() || '',
      email: formDataFromDom.get('email')?.trim() || '',
      phone: formDataFromDom.get('phone')?.trim() || '',
      place: formDataFromDom.get('phone')?.trim() || '',
      message: formDataFromDom.get('message')?.trim() || '',
      file: formDataFromDom.get('file')
    };

    const newErrors = {};
    let valid = true;

    if (!formDataObj.company) {
      newErrors.company = 'Company name is required';
      valid = false;
    }

    if (!formDataObj.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formDataObj.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    const phoneNumber = parsePhoneNumberFromString(formDataObj.phone);

    if (!phoneNumber || !phoneNumber.isValid()) {
      newErrors.phone = 'Please enter a valid phone number';
      valid = false;
    }

    if (!formDataObj.place) {
      newErrors.place = 'Place is required';
      valid = false;
    }

    if (!formDataObj.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return { type: 'error', message: 'Please fix the errors above.' };
    }

    setErrors({
      company: '',
      email: '',
      phone: '',
      place: '',
      message: '',
      file: ''
    });

    const result = await sendMail(formDataObj, "Set up your Advetising around World");

    return result;
  };
  
  const [state, formAction, isPending] = useActionState(handleFormSubmit, initialState);
  
  useEffect(() => {
    if (state.message && state.type === 'success') {
      setAgreed(false);
      toast.success(state.message);
    }
    if (state.message && state.type === 'error') {
      setAgreed(false);
      toast.error(state.message);
    }
  }, [state]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.size > 20 * 1024 * 1024) {
      setErrors({...errors, file: "File size must be under 20MB"});
      e.target.value = null;
      return;
    }

    if (file) {
      setErrors({
        company: '',
        email: '',
        phone: '',
        place: '',
        message: '',
        file: ''
      });
    }
  };

  return (
    <FormLayout action={formAction} title="Set up your Advetising around World">
      <div className='relative w-full'>
        <Input type="text" label="Company Name" name="company" styles="w-full" />
        {errors.company && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.company}</span>}
      </div>

      <div className='relative w-full'>
        <Input type="email" label="Email" name="email" styles="w-full" />
        {errors.email && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.email}</span>}
      </div>
      <div className='relative w-full'>
        <PhoneInput
          inputProps={{
            name: 'phone',
          }}
          containerClass='react-phone-input'
          inputStyle={{
            fontSize: '1.125rem',
            fontWeight: '500',
            backgroundColor: 'transparent',
            border: 'none',
            outline: '1px solid #d1d5db',
            borderRadius: '0.75rem',
            boxShadow: 'none',
            width: '100%',
            height: '60px'
          }}
          buttonStyle={{
            backgroundColor: 'transparent',
            border: 'none',
            borderRight: '1px solid #d1d5db',
            borderRadius: '0.75rem 0 0 0.75rem',
          }}
          containerStyle={{
            width: '100%',
          }}
          country={'it'}
          placeholder="Phone"
          enableSearch
          disableSearchIcon
          searchPlaceholder='Search'
          searchNotFound='No entries to show'
        />
        {errors.phone && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.phone}</span>}
      </div>
      <div className='relative w-full'>
        <Input type="text" label="Place" name="place" styles="w-full" />
        {errors.place && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.place}</span>}
      </div>

      <div className='relative w-full'>
        <textarea name="message" id="" className="w-full max-h-48 font-medium bg-transparent border-0 outline outline-gray-300 rounded-lg px-3 py-4 focus:outline-2 focus:outline-gray-500 focus:ring-0" placeholder="Message"></textarea>
        {errors.message && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.message}</span>}
      </div>

      <div className="relative flex flex-col gap-1">
        <label className="flex flex-row items-end gap-1 text-sm font-medium" htmlFor="file_input">Upload your ad (Optional, It's okay if you don't have it yet)<p className="text-xs font-normal" id="file_input_help">Image, Video, PDF (Max file size 20MB).</p></label>
        <input type="file" name="file" accept="image/*,video/*,.pdf" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="file_input" onChange={handleFileChange} />
        {errors.file && <span className='absolute -bottom-2 right-3 bg-[var(--background)] text-sm text-red-800'>{errors.file}</span>}
      </div>

      <ContactFormCheckBox agreed={agreed} setAgreed={setAgreed} />

      <SubmitBtn agreed={agreed} pending={isPending} />

      <Toaster richColors />
    </FormLayout>
  )
}
