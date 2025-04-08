'use client'

import React, { useEffect, useState, useRef  } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import img from '../assets/6023c1341e01a6243f198dac_Sign up.svg'

export default function HowItWorks() {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [resetting, setResetting] = useState(false);
    const [step, setStep] = useState(0);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

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
            <div className='flex flex-col gap-6 h-[70vh] items-center justify-center'>
                <div className='flex flex-col gap-2 px-4 w-11/12'>
                    <h2 className='text-center text-4xl sm:text-7xl font-bold'>Let's Talk How we <i>Build</i> your Brand</h2>
                    <p className='text-center text-base sm:text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="flex flex-col w-full p-4 items-center">
                    <div className="relative w-11/12 sm:w-2/3 lg:w-1/2 h-2 bg-[linear-gradient(to_right,_var(--primary1)_8%,_var(--primary2)_60%)] rounded-full">
                        <div>
                            <motion.div
                                className="absolute right-0 top-0 h-2 bg-[var(--background)] rounded-full"
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
                            STEP 01
                        </div>
                        <div
                            className={`px-3 sm:px-4 py-2 rounded-xl text-sm md:text-base font-bold duration-75 transition-all ${step >= 2 ? "bg-white text-[var(--primary2)] shadow-md" : "bg-gray-100 text-gray-600"} text-nowrap`}
                        >
                            STEP 02
                        </div>
                        <div
                            className={`px-3 sm:px-4 py-2 rounded-xl text-sm md:text-base font-bold duration-75 transition-all ${step >= 3 ? "bg-white text-[var(--primary2)] shadow-md" : "bg-gray-100 text-gray-600"} text-nowrap`}
                        >
                            STEP 03
                        </div>
                    </div>
                </div>
            </div>

            <div ref={containerRef} className="relative h-[300vh]">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex snap-y snap-mandatory">
                        <div className="flex h-screen w-screen justify-center items-center snap-center">
                            <div className="relative flex flex-col gap-4 xs:gap-8 sm:gap-12 lg:gap-0 lg:flex-row h-full sm:h-5/6 lg:h-2/4 w-4/5 justify-center items-center">
                                <div className="w-full h-full flex flex-1 justify-center lg:justify-end">
                                    <div className="relative w-5/6 sm:w-4/6 md:w-full h-full md:h-5/6">
                                        <Image src={img} fill objectFit="contain" className="h-full" alt="" />
                                    </div>
                                </div>
                                <div className="w-6 h-6 bg-[var(--primary1)] rounded-3xl mt-auto"> </div>
                                <div className="flex flex-1">
                                    <div className="h-fit w-[80vw] sm:w-[70vw] lg:w-auto flex flex-col gap-1 sm:gap-4 bg-white shadow-md rounded-xl px-16 sm:px-24 py-8 sm:py-16">
                                        <h3 className="text-lg font-semibold text-[var(--primary2)]">01</h3>
                                        <h3 className="text-2xl sm:text-3xl font-bold">Thing to Do</h3>
                                        <p className="text-sm sm:text-base text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    </div>
                                </div>
                                <div className="absolute w-full h-3 left-1/2 lg:bottom-0 lg:mb-[6px] bg-[var(--primary1)]"></div>
                            </div>
                        </div>
                        <div className="flex h-screen w-screen justify-center items-center snap-center">
                            <div className="relative flex flex-col gap-4 xs:gap-8 sm:gap-12 lg:gap-0 lg:flex-row h-full sm:h-5/6 lg:h-2/4 w-4/5 justify-center items-center">
                                <div className="w-full h-full flex flex-1 justify-center lg:justify-end">
                                    <div className="relative w-5/6 sm:w-4/6 md:w-full h-full md:h-5/6">
                                        <Image src={img} fill objectFit="contain" className="h-full" alt="" />
                                    </div>
                                </div>
                                <div className="w-6 h-6 bg-[var(--primary1)] rounded-3xl mt-auto"> </div>
                                <div className="flex flex-1">
                                    <div className="h-fit w-[80vw] sm:w-[70vw] lg:w-auto flex flex-col gap-1 sm:gap-4 bg-white shadow-md rounded-xl px-16 sm:px-24 py-8 sm:py-16">
                                        <h3 className="text-lg font-semibold text-[var(--primary2)]">02</h3>
                                        <h3 className="text-2xl sm:text-3xl font-bold">Thing to Do</h3>
                                        <p className="text-sm sm:text-base text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    </div>
                                </div>
                                <div className="absolute w-screen h-3 lg:bottom-0 lg:mb-[6px] bg-[var(--primary1)]"></div>
                            </div>
                        </div>
                        <div className="flex h-screen w-screen justify-center items-center snap-center">
                            <div className="relative flex flex-col gap-4 xs:gap-8 sm:gap-12 lg:gap-0 lg:flex-row h-full sm:h-5/6 lg:h-2/4 w-4/5 justify-center items-center">
                                <div className="w-full h-full flex flex-1 justify-center lg:justify-end">
                                    <div className="relative w-5/6 sm:w-4/6 md:w-full h-full md:h-5/6">
                                        <Image src={img} fill objectFit="contain" className="h-full" alt="" />
                                    </div>
                                </div>
                                <div className="w-6 h-6 bg-[var(--primary1)] rounded-3xl mt-auto"> </div>
                                <div className="flex flex-1">
                                    <div className="h-fit w-[80vw] sm:w-[70vw] lg:w-auto flex flex-col gap-1 sm:gap-4 bg-white shadow-md rounded-xl px-16 sm:px-24 py-8 sm:py-16">
                                        <h3 className="text-lg font-semibold text-[var(--primary2)]">03</h3>
                                        <h3 className="text-2xl sm:text-3xl font-bold">Thing to Do</h3>
                                        <p className="text-sm sm:text-base text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    </div>
                                </div>
                                <div className="absolute w-full h-3 -left-1/2 lg:bottom-0 lg:mb-[6px] bg-[var(--primary1)]"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
