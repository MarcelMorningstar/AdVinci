import React from 'react'

export default function SubmitBtn({ agreed, pending }) {
  return (
    <button 
      type="submit" 
      disabled={!agreed || pending}
      className={`flex justify-center items-center h-16 text-white rounded-lg text-xl py-4 text-center transition-all duration-750 ease-in-out focus:outline-none ${
        !agreed || pending
          ? "bg-gray-400 cursor-not-allowed opacity-60"
          : "bg-[linear-gradient(to_right,_var(--primary1)_16%,_var(--primary2)_70%)] bg-[length:150%] bg-right hover:bg-left active:bg-left focus:bg-left cursor-pointer"
      }`}
    >
      <div>
        {pending ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className='h-16'><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="16" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="0.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="16" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="0.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="16" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="0.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
        ) : (
          "Send Message"
        )}
      </div>
    </button>
  )
}
