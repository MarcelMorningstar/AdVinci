'use client'

import { useRouter, usePathname } from 'next/navigation';

export default function LinkToHash({ to, className, children }) {
    const router = useRouter();
    const pathname = usePathname();
    const path = to.slice(0, to.indexOf('#'));
    const hash = to.substring(to.indexOf("#"));

    const scrollTo = () => {
        if (pathname != path) {
            sessionStorage.setItem("to", hash);
            router.replace(path);
        } else {
            const element = document.querySelector(hash)

            if (element) {
                const rect = element.getBoundingClientRect();

                window.scrollTo(0, rect.top + window.scrollY - 90);
            }
        }
    }

    return (
        <span className={className} onClick={() => scrollTo()}>{ children }</span>
    )
}
