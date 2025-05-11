import React from 'react'
import Footer from '../../components/Footer'

export default function Page() {
  return (
    <>
      <section className='flex justify-center pt-32 pb-12'>
          <div className='w-[90vw] sm:w-[70vw]'>
              <h1 className="text-4xl font-bold text-secondary-foreground">
                Privacy Policy
              </h1>
              
              <div className="my-4 flex flex-col gap-2">
                  <p>Effective date: 01.04.2025</p>
                  <p>Updated on: 01.04.2025</p>
              </div>
          </div>
      </section>
        
      <Footer color="#1a1a1a" />
    </>
  )
}
