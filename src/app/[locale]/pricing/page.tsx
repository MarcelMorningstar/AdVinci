import React from 'react'
import Prices from '../../components/Prices'
import Footer from '../../components/Footer'

export default function Page() {
  return (
    <>
      <section className='min-h-screen flex justify-center bg-neutral-200'>
        <Prices />
      </section>

      <Footer color="#1a1a1a" />
    </>
  )
}
