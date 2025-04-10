import React from 'react'

export default function SubmitBtn({ agreed }) {
  return (
    <button 
      type="submit" 
      disabled={!agreed}
      className={`text-white rounded-lg text-xl py-4 text-center transition-all duration-750 ease-in-out focus:outline-none ${
        agreed
          ? "bg-[linear-gradient(to_right,_var(--primary1)_16%,_var(--primary2)_70%)] bg-[length:150%] bg-right hover:bg-left active:bg-left focus:bg-left cursor-pointer"
          : "bg-gray-400 cursor-not-allowed opacity-60"
      }`}
    >
      Send Message
    </button>
  )
}
