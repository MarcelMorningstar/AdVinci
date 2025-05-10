'use client'

import React, { useEffect, useState, useRef  } from "react";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import { motion, useTransform, useScroll  } from "framer-motion";
import img1 from '../assets/step1Icon.png'
import img2 from '../assets/step2Icon.png'
import img3 from '../assets/step3Icon.png'
import img4 from '../assets/step1.png'
import img5 from '../assets/step2.png'
import img6 from '../assets/step3.png'
import styles from '../styles/How.module.scss';

export default function HowItWorks() {
    const t = useTranslations('how');
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [resetting, setResetting] = useState(false);
    const [step, setStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

    const backgroundColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#b8a8a0", "#535353", "#04243D"]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100 && !resetting) {
                    // Start the reset process with delay
                    setResetting(true);
                    setTimeout(() => {
                        setProgress(0);
                        setStep(1);
                    }, 500); // 500ms delay before resetting to 0
                    return prev; // Keep current progress until the timeout happens
                }

                if (resetting) {
                    // Delay before starting the progress after reset
                    setTimeout(() => {
                        setResetting(false); // Allow progress to start again
                    }, 200); // Delay before starting progress again
                    return prev; // Keep the progress at 0 until the reset delay completes
                }

                return prev + 50; // Increment the progress by 50
            });
        }, 1500);

        return () => clearInterval(interval);
    }, [resetting]);

    const handleAnimationComplete = () => {
        if (progress == 0) { setStep(1) } else { setStep(step + 1) }
    };

    return (
        <section id="HowWeBuildYourBrand" className="">
            <div className='flex flex-col gap-6 min-h-[50vh] items-center justify-center'>
                <div className='flex flex-col gap-2 px-4 w-11/12'>
                    <h2 className='text-center text-4xl sm:text-7xl font-bold'>{ t("title") }</h2>
                </div>

                <div className="flex flex-col w-full p-4 items-center">
                    <div className="relative w-11/12 sm:w-2/3 lg:w-1/2 h-2 bg-[linear-gradient(to_right,_var(--primary1)_8%,_var(--primary2)_60%)] rounded-full">
                        <div>
                            <motion.div
                                className="absolute z-20 right-0 top-0 h-2 bg-gray-100 rounded-full"
                                initial={{ width: "100%" }}
                                animate={{ width: `${100 - progress}%` }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                                style={{ width: `${100 - progress}%` }}
                                onAnimationComplete={handleAnimationComplete}
                            />
                        </div>
                    </div>
                    <div className="relative flex justify-between w-11/12 sm:w-2/3 lg:w-1/2 top-[8px]">
                        <div className="px-3 sm:px-4 py-2 bg-white shadow-md rounded-xl text-sm md:text-base font-bold text-[var(--primary2)] text-nowrap">
                            { t('step') } 01
                        </div>
                        <div
                            className={`px-3 sm:px-4 py-2 rounded-xl text-sm md:text-base font-bold duration-75 transition-all ${step >= 2 ? "bg-white text-[var(--primary2)] shadow-md" : "bg-gray-100 text-gray-600"} text-nowrap`}
                        >
                            { t('step') } 02
                        </div>
                        <div
                            className={`px-3 sm:px-4 py-2 rounded-xl text-sm md:text-base font-bold duration-75 transition-all ${step >= 3 ? "bg-white text-[var(--primary2)] shadow-md" : "bg-gray-100 text-gray-600"} text-nowrap`}
                        >
                            { t('step') } 03
                        </div>
                    </div>
                </div>
            </div>

            <motion.div ref={containerRef} className="relative h-[300vh]" style={{ backgroundColor: backgroundColor }}>
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex snap-y snap-mandatory">
                        <div className="flex h-screen w-screen justify-center items-center snap-center">
                            <div className={`relative flex flex-col gap-4 xs:gap-8 sm:gap-12 lg:gap-0 lg:flex-row h-full sm:h-5/6 lg:h-2/4 w-4/5 justify-center items-center ${styles.shortscreengap}`}>
                                <div className={`w-full h-full flex flex-1 justify-center items-end lg:items-center ${styles.shortscreenscale}`}>
                                    <div className="relative max-h-10/12 w-10/12 aspect-video rounded-2xl">
                                        <Image src={img4} fill sizes="(max-width: 600px) 300px, 600px" className="h-full w-full object-contain aspect-square rounded-2xl" loading='lazy' alt="" />
                                    </div>
                                </div>
                                <div className="relative z-30 w-6 h-6 bg-[var(--primary1)] rounded-3xl mt-auto" />
                                <div className="flex flex-1">
                                    <div className={`relative h-fit w-[80vw] sm:w-[70vw] lg:w-auto flex flex-col gap-1 sm:gap-4 bg-neutral-100 shadow-2xl rounded-xl px-12 sm:px-16 py-6 sm:py-12 ${styles.shortscreenscale}`} >
                                        <h3 className="text-lg font-semibold text-[var(--primary2)]">
                                            <Image src={img1} sizes="64px" className="w-12 sm:w-16 h-12 sm:h-16 object-contain" loading='lazy' alt="" />
                                        </h3>
                                        <h3 className="text-xl sm:text-3xl font-bold">{ t("how1.title") }</h3>
                                        <p className="text-sm sm:text-lg text-gray-500">{ t("how1.description") }</p>
                                    </div>
                                </div>
                                <motion.div 
                                    className="absolute z-20 w-[200vw] h-3 left-1/2 lg:bottom-0 lg:mb-[6px] bg-[var(--primary1)] origin-left duration-400 ease-linear"
                                    style={{ scaleX: scrollYProgress }}
                                ></motion.div>
                                <div 
                                    className="absolute z-10 w-[200vw] h-3 left-1/2 lg:bottom-0 lg:mb-[6px] bg-gray-200 origin-left"
                                ></div>
                            </div>
                        </div>
                        <div className="flex h-screen w-screen justify-center items-center snap-center">
                            <div className={`relative flex flex-col gap-4 xs:gap-8 sm:gap-12 lg:gap-0 lg:flex-row h-full sm:h-5/6 lg:h-2/4 w-4/5 justify-center items-center ${styles.shortscreengap}`}>
                                <div className={`w-full h-full flex flex-1 justify-center items-end lg:items-center ${styles.shortscreenscale}`}>
                                    <div className="relative max-h-10/12 w-10/12 aspect-video rounded-2xl">
                                        <Image src={img5} fill sizes="(max-width: 600px) 300px, 600px" className="h-full w-full object-contain aspect-square rounded-2xl" loading='lazy' alt="" />
                                    </div>
                                </div>
                                <div 
                                    className={`relative z-30 w-6 h-6 bg-[var(--primary1)] origin-center rounded-3xl mt-auto duration-200 ease-linear`}
                                />
                                <div className="flex flex-1">
                                    <div className={`relative h-fit w-[80vw] sm:w-[70vw] lg:w-auto flex flex-col gap-1 sm:gap-4 bg-neutral-100 shadow-md rounded-xl px-12 sm:px-16 py-6 sm:py-12 ${styles.shortscreenscale}`}>
                                        <h3 className="text-lg font-semibold text-[var(--primary2)]">
                                            <Image src={img2} sizes="64px" className="w-12 sm:w-16 h-12 sm:h-16 object-contain" loading='lazy' alt="" />
                                        </h3>
                                        <h3 className="text-xl sm:text-3xl font-bold">{ t("how2.title") }</h3>
                                        <p className="text-sm sm:text-lg text-gray-500">{ t("how2.description") }</p>
                                    </div>
                                </div>
                                {/* <div className="absolute w-screen h-3 lg:bottom-0 lg:mb-[6px] bg-[var(--primary1)]"></div> */}
                            </div>
                        </div>
                        <div className="flex h-screen w-screen justify-center items-center snap-center">
                            <div className={`relative flex flex-col gap-4 xs:gap-8 sm:gap-12 lg:gap-0 lg:flex-row h-full sm:h-5/6 lg:h-2/4 w-4/5 justify-center items-center ${styles.shortscreengap}`}>
                                <div className={`w-full h-full flex flex-1 justify-center items-end lg:items-center ${styles.shortscreenscale}`}>
                                    <div className="relative max-h-10/12 w-10/12 aspect-video rounded-2xl">
                                        <Image src={img6} fill sizes="(max-width: 600px) 300px, 600px" className="h-full w-full object-contain aspect-square rounded-2xl" loading='lazy' alt="" />
                                    </div>
                                </div>
                                <div 
                                    className={`relative z-30 w-6 h-6 bg-[var(--primary1)] origin-center rounded-3xl mt-auto duration-200 ease-linear`}
                                />
                                <div className="flex flex-1">
                                    <div className={`relative h-fit w-[80vw] sm:w-[70vw] lg:w-auto flex flex-col gap-1 sm:gap-4 bg-neutral-100 shadow-md rounded-xl px-12 sm:px-16 py-6 sm:py-12 ${styles.shortscreenscale}`}>
                                        <h3 className="text-lg font-semibold text-[var(--primary2)]">
                                            <Image src={img3} sizes="64px" className="w-12 sm:w-16 h-12 sm:h-16 object-contain" loading='lazy' alt="" />
                                        </h3>
                                        <h3 className="text-xl sm:text-3xl font-bold">{ t("how3.title") }</h3>
                                        <p className="text-sm sm:text-lg text-gray-500">{ t("how3.description") }</p>
                                    </div>
                                </div>
                                {/* <div className="absolute w-full h-3 -left-1/2 lg:bottom-0 lg:mb-[6px] bg-[var(--primary1)]"></div> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
