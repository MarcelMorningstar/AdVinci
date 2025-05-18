import React from 'react'
import Prices from '../../components/Prices'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

export default function Page() {
  return (
    <>
      <section className='min-h-screen flex flex-col items-center bg-neutral-200'>
        <Prices />
        <Contact />
      </section>

      <Footer color="#1a1a1a" />
    </>
  )
}
