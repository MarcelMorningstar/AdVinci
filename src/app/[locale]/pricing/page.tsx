import React from 'react'
import Prices from '../../components/Prices'
import Footer from '../../components/Footer'

export default function Page() {
  return (
    <>
      <section className='flex justify-center bg-neutral-200'>
        <Prices />
      </section>

      <Footer color="#1a1a1a" />
    </>
  )
}
