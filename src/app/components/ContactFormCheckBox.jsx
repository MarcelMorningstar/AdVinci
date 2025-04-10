import React, { useEffect } from 'react'

export default function ContactFormCheckBox({ agreed, setAgreed }) {
    return (
        <div className='flex flex-row gap-2 items-center'>
            <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className='w-4 h-4 text-[var(--primary2)] bg-gray-100 border-gray-300 rounded-sm focus:ring-[var(--primary2)]'
            />
            <label>
                I agree to the <a href="/terms" target="_blank" className='text-[var(--primary2)] hover:font-semibold'>Terms</a> & <a href="/privacy" target="_blank" className='text-[var(--primary2)] hover:font-semibold'>Privacy Policy</a>
            </label>
        </div>
        
    )
}
