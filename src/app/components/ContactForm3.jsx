import React, { useState } from 'react'
import FormLayout from './FormLayout'
import Input from "./Input"
import PhoneInput from 'react-phone-input-2'
import ContactFormCheckBox from './ContactFormCheckBox'
import SubmitBtn from "./SubmitBtn"
import { parsePhoneNumberFromString } from 'libphonenumber-js';

import 'react-phone-input-2/lib/style.css'


export default function ContactForm3() {
  const [agreed, setAgreed] = useState(false);
    const [formData, setFormData] = useState({
      company: '',
      vat: '',
      email: '',
      phone: '',
      topic: '',
      message: ''
    });
    const [errors, setErrors] = useState({
      company: '',
      vat: '',
      email: '',
      phone: '',
      topic: '',
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
      }
    };
  
    const validate = () => {
      let valid = true;
      const newErrors = {};
  
      if (!formData.company) {
        newErrors.company = 'Company name is required';
        valid = false;
      }
  
      if (!formData.email) {
        newErrors.email = 'Email is required';
        valid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        valid = false;
      }

      const phoneNumber = parsePhoneNumberFromString(`+${formData.phone}`);

      if (!phoneNumber || !phoneNumber.isValid()) {
        newErrors.phone = 'Please enter a valid phone number';
        valid = false;
      }

      if (!formData.topic) {
        newErrors.message = 'Topic is required';
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
    <FormLayout title="Digital Advertising Consultation" onSubmit={handleSubmit}>
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
        <Input type="text" label="Topic" name='topic' styles="w-full" onChange={handleChange} />
        {errors.topic && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.topic}</span>}
      </div>

      <div className='relative w-full'>
        <textarea name="message" id="" className="w-full max-h-48 font-medium bg-transparent border-0 outline outline-gray-300 rounded-lg px-3 py-4 focus:outline-2 focus:outline-gray-500 focus:ring-0" placeholder="Message" onChange={handleChange}></textarea>
        {errors.message && <span className='absolute -top-3 left-3 bg-[var(--background)] text-red-800'>{errors.message}</span>}
      </div>

      <ContactFormCheckBox agreed={agreed} setAgreed={setAgreed} />

      <SubmitBtn agreed={agreed} />
    </FormLayout>
  )
}
