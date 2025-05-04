'use client'

import React, { useState } from 'react'
import ContactForm1 from './ContactForm1'
import ContactForm2 from './ContactForm2'
import ContactForm3 from './ContactForm3'
import ContactForm4 from './ContactForm4'


export default function Contact() {
    const [state, setState] = useState(4);

    const services = [
        {
            "id": 1,
            "title": "Design with us",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
        },
        {
            "id": 2,
            "title": "Set up your Advetising around World",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        },
        {
            "id": 3,
            "title": "Digital Advertising Consultation",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut."
        },
        {
            "id": 4,
            "title": "General enquiries",
            "description": "Lorem ipsum dolor sit, consectetur adipiscing, sed do."
        },
    ];

    const renderForm = () => {
        switch (state) {
            case 1:
                return <ContactForm1 />;
            case 2:
                return <ContactForm2 />;
            case 3:
                return <ContactForm3 />;
            case 4:
                return <ContactForm4 />;
            default:
                return <ContactForm4 />;
        }
    };

    return (
        <section id='Contact' className='flex justify-center items-center py-16'>
            <div className='flex flex-col xl:flex-row max-w-[920px] xl:max-w-[1400px] gap-16 px-4 sm:px-16'>
                <div className='flex flex-col flex-1'>
                    <div className='flex flex-col px-4 sm:px-24 mb-8 gap-1'>
                        <h2 className='text-center text-2xl sm:text-4xl font-bold'>Let's Talk about New <i className='text-3xl sm:text-5xl'>Opportunities</i></h2>
                        <p className='text-center text-gray-500 text-sm sm:text-base'>Let's find the right department.</p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3 place-items-stretch'>
                        {services.map((obj, index) => (
                            <div 
                                key={index}
                                className={`flex flex-row justify-between items-start xl:items-center gap-4 w-full h-full px-6 py-4 mb-3 outline-1 cursor-pointer rounded-3xl ${ obj.id === state ? 'outline-gray-500' : 'outline-gray-300' }`}
                                onClick={ () => setState(obj.id) }
                            >
                                <div className='flex flex-col justify-center'>
                                    <h3 className='text-base xl:text-xl font-semibold'>{ obj.title }</h3>
                                    <p className='text-sm xl:text-base text-gray-800'>{ obj.description }</p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <input id={obj.id} type="radio" name="contact-radio" className="w-6 h-6 text-[var(--primary2)] bg-gray-100 border-gray-400 focus:ring-[var(--primary2)]" checked={ obj.id === state } onChange={ () => setState(obj.id) } />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex-1'>
                    { renderForm() }
                </div>
            </div>
        </section>
    )
}
