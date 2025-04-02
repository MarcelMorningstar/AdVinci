'use client'

import React, { useEffect, useState, useRef  } from "react";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import img from '../6023c1341e01a6243f198dac_Sign up.svg'

export default function HowItWorks() {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev < 100 ? prev + 50 : 100));
        }, 1500);

        return () => clearInterval(interval);
    }, []);

  return (
    <section className="">
        <div className='flex flex-col gap-6 h-[70vh] justify-center'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-center text-7xl font-bold'>Let's Talk How it <i>Works</i></h2>
                <p className='text-center text-lg text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="flex flex-col w-full p-4 items-center">
                <div className="relative w-1/2 h-2 bg-[linear-gradient(to_right,_var(--primary1)_8%,_var(--primary2)_60%)] rounded-full">
                    <div>
                        <motion.div
                            className="absolute right-0 top-0 h-2 bg-white rounded-full"
                            initial={{ width: "100%" }}
                            animate={{ width: `${100 - progress}%` }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{ width: `${100 - progress}%` }}
                        />
                    </div>
                </div>
                <div className="relative flex justify-between w-1/2 top-[8px]">
                    <div className="px-4 py-2 bg-white shadow-md rounded-xl font-bold text-[var(--primary2)]">
                        STEP 01
                    </div>
                    <div
                        className={`px-4 py-2 bg-white shadow-md rounded-xl font-bold ${progress >= 50 ? "text-[var(--primary2)]" : "text-gray-600"}`}
                    >
                        STEP 02
                    </div>
                    <div
                        className={`px-4 py-2 bg-white shadow-md rounded-xl font-bold ${progress >= 100 ? "text-[var(--primary2)]" : "text-gray-400"}`}
                    >
                        STEP 03
                    </div>
                </div>
            </div>
        </div>

        <div ref={containerRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex snap-y snap-mandatory">
                    <div className=" flex h-screen w-screen justify-center items-center snap-center">
                        <div className="relative flex flex-row h-2/4 w-4/5 justify-center items-center">
                            <div className="flex flex-1 px-24 justify-end">
                                <Image src={img} />
                            </div>
                            <div className="w-6 h-6 bg-[var(--primary1)] rounded-3xl mt-auto"> </div>
                            <div className="flex flex-col flex-1 gap-4 bg-white px-24 py-16 shadow-md rounded-xl">
                                <h3 className="text-lg font-semibold text-[var(--primary2)]">01</h3>
                                <h3 className="text-3xl font-bold">Thing to Do</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                            <div className="absolute w-full h-3 left-1/2 bottom-0 mb-[6px] bg-[var(--primary1)]"></div>
                        </div>
                    </div>
                    <div className=" flex h-screen w-screen justify-center items-center snap-center">
                        <div className="relative flex flex-row h-2/4 w-4/5 justify-center items-center">
                            <div className="flex flex-1 px-24 justify-end">
                                <Image src={img} />
                            </div>
                            <div className="w-6 h-6 bg-[var(--primary1)] rounded-3xl mt-auto"> </div>
                            <div className="flex flex-col flex-1 gap-4 bg-white px-24 py-16 shadow-md rounded-xl">
                                <h3 className="text-lg font-semibold text-[var(--primary2)]">02</h3>
                                <h3 className="text-3xl font-bold">Thing to Do</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                            <div className="absolute w-screen h-3 bottom-0 mb-[6px] bg-[var(--primary1)]"></div>
                        </div>
                    </div>
                    <div className=" flex h-screen w-screen justify-center items-center snap-center">
                        <div className="relative flex flex-row h-2/4 w-4/5 justify-center items-center">
                            <div className="flex flex-1 px-24 justify-end">
                                <Image src={img} />
                            </div>
                            <div className="w-6 h-6 bg-[var(--primary1)] rounded-3xl mt-auto"> </div>
                            <div className="flex flex-col flex-1 gap-4 bg-white px-24 py-16 shadow-md rounded-xl">
                                <h3 className="text-lg font-semibold text-[var(--primary2)]">03</h3>
                                <h3 className="text-3xl font-bold">Thing to Do</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                            <div className="absolute w-full h-3 -left-1/2 bottom-0 mb-[6px] bg-[var(--primary1)]"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}
