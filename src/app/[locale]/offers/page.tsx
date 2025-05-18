import React from 'react'
import Offers from '../../components/Offers'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

export default function page() {
  return (
    <>
        <section className='min-h-screen bg-neutral-200'>
          <Offers />
          <Contact />
        </section>
        
        <Footer color="#1a1a1a" />
    </>
  )
}
