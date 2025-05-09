'use client'

import React from 'react'
import ContactForm1 from './ContactForm1'
// import ContactForm2 from './ContactForm2'
// import ContactForm3 from './ContactForm3'
// import ContactForm4 from './ContactForm4'


export default function Contact() {
    // const [state, setState] = useState(4);

    // const services = [
    //     {
    //         "id": 1,
    //         "title": "Design with us",
    //         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
    //     },
    //     {
    //         "id": 2,
    //         "title": "Set up your Advetising around World",
    //         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    //     },
    //     {
    //         "id": 3,
    //         "title": "Digital Advertising Consultation",
    //         "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod incididunt ut."
    //     },
    //     {
    //         "id": 4,
    //         "title": "General enquiries",
    //         "description": "Lorem ipsum dolor sit, consectetur adipiscing, sed do."
    //     },
    // ];

    // const renderForm = () => {
    //     switch (state) {
    //         case 1:
    //             return <ContactForm1 />;
    //         case 2:
    //             return <ContactForm2 />;
    //         case 3:
    //             return <ContactForm3 />;
    //         case 4:
    //             return <ContactForm4 />;
    //         default:
    //             return <ContactForm4 />;
    //     }
    // };

    return (
        <section id='Contact' className='w-full flex justify-center items-center py-24'>
            <div className='w-full max-w-[800px] px-4 sm:px-16'>
                { <ContactForm1 /> }
            </div>
        </section>
    )
}
