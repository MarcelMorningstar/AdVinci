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

export default function ContactForm4() {
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const initialState = { type: null, message: null };

  const handleFormSubmit = async (prevState, formDataFromDom) => {
    const formDataObj = {
      company: formDataFromDom.get('company')?.trim() || '',
      email: formDataFromDom.get('email')?.trim() || '',
      phone: formDataFromDom.get('phone')?.trim() || '',
      message: formDataFromDom.get('message')?.trim() || ''
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
      message: ''
    });

    const result = await sendMail(formDataObj, "General enquiries");

    return result;
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, initialState);

  useEffect(() => {
    if (state.message && state.type === 'success') {
      toast.success(state.message);
    }
    if (state.message && state.type === 'error') {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <FormLayout action={formAction} title="General enquiries">
      <div className='relative w-full'>
        <Input type="text" label="Company Name" name="company" styles="w-full" />
        {errors.company && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.company}</span>}
      </div>

      <div className='relative w-full'>
        <Input type="text" label="Email" name="email" styles="w-full" />
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
        <textarea name="message" id="" className="w-full max-h-48 font-medium bg-transparent border-0 outline outline-gray-300 rounded-lg px-3 py-4 focus:outline-2 focus:outline-gray-500 focus:ring-0" placeholder="Message"></textarea>
        {errors.message && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.message}</span>}
      </div>

      <ContactFormCheckBox agreed={agreed} setAgreed={setAgreed} />

      <SubmitBtn agreed={agreed} pending={isPending} />

      <Toaster richColors />
    </FormLayout>
  )
}
