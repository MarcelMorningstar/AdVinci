import React, { useState } from 'react'
import FormLayout from './FormLayout'
import Input from "./Input"
import PhoneInput from 'react-phone-input-2'
import ContactFormCheckBox from './ContactFormCheckBox'
import SubmitBtn from "./SubmitBtn"

import 'react-phone-input-2/lib/style.css'


export default function ContactForm1() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    vat: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    company: '',
    vat: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
    } else {
      console.log("fuck")
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.company) {
      newErrors.company = 'Company name is required';
      valid = false;
    }

    if (!formData.vat) {
      newErrors.vat = 'VAT is required';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <FormLayout title="Design with us" onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className='relative w-full'>
          <Input type="text" label="Company Name" name="company" styles="w-full" onChange={handleChange} />
          {errors.company && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.company}</span>}
        </div>
        <div className='relative w-full'>
          <Input type="text" label="VAT" name="vat" styles="w-full" onChange={handleChange} />
          {errors.vat && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.vat}</span>}
        </div>
      </div>

      <div className='relative w-full'>
        <Input type="email" label="Email" name="email" styles="w-full" onChange={handleChange} />
        {errors.email && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.email}</span>}
      </div>
      <div className='relative w-full'>
        <PhoneInput
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
          value={formData.phone}
          placeholder="Phone"
          enableSearch
          disableSearchIcon
          searchPlaceholder='Search'
          searchNotFound='No entries to show'
          onChange={(value) => { setFormData({...formData, 'phone': value}) }}
        />
        {errors.phone && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.phone}</span>}
      </div>

      <div className='relative w-full'>
        <textarea name="message" id="" className="w-full max-h-48 font-medium bg-transparent border-0 outline outline-gray-300 rounded-lg px-3 py-4 focus:outline-2 focus:outline-gray-500 focus:ring-0" placeholder="Message" onChange={handleChange}></textarea>
        {errors.message && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="flex flex-row items-end gap-1 text-sm font-medium" htmlFor="file_input">Upload your idea (optional)<p className="text-xs font-normal" id="file_input_help">PNG, JPG, PDF (Max file size 10MB).</p></label>
        <input type="file" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="file_input" />
      </div>
      
      <ContactFormCheckBox agreed={agreed} setAgreed={setAgreed} />
        
      <SubmitBtn agreed={agreed} />
    </FormLayout>
  )
}
