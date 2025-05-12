import React from 'react'
import {useTranslations} from 'next-intl';

export default function ContactFormCheckBox({ agreed, setAgreed }) {
    const t = useTranslations('contact');
    
    return (
        <div className='flex flex-row gap-2 items-center'>
            <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className='w-4 h-4 text-[var(--primary2)] bg-gray-100 border-gray-300 rounded-sm focus:ring-[var(--primary2)]'
            />
            <label>
                {t("form.item6")} <a href="/privacy" target="_blank" className='text-[var(--primary2)] hover:font-semibold'>{t("form.item8")}</a>
            </label>
        </div>
        
    )
}
