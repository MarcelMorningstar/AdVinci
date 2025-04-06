'use client'

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { MdEmail } from "react-icons/md";
import { BsMegaphoneFill } from "react-icons/bs";
import { SiPinterest, SiInstagram, SiFacebook, } from "react-icons/si";

export default function AboutUs() {
    return (
        <section className="min-h-screen flex justify-center items-center pt-32">
            <div className="max-w-10/12 flex justify-center items-center">
                <motion.div 
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ amount: 0.1, once: true }}
                    transition={{
                        staggerChildren: 0.25,
                    }}
                    className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-5"
                >
                    <HeaderBlock />
                    <SocialsBlock />
                    <AboutBlock />
                    <ServicesBlock />
                </motion.div>
            </div>
        </section>
    )
}

const Block = ({ className, children, ...rest }) => {
    return (
      <motion.div
        variants={{
            initial: {
                scale: 0.5,
                y: 50,
                opacity: 0,
            },
            animate: {
                scale: 1,
                y: 0,
                opacity: 1,
            },
        }}
        transition={{
            type: "spring",
            mass: 3,
            stiffness: 400,
            damping: 50,
        }}
        className={twMerge(
            "col-span-4 rounded-lg bg-white shadow-lg",
            className
        )}
        {...rest}
      >
        { children }
      </motion.div>
    );
};

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
        <div className="flex flex-col gap-2">
            <BsMegaphoneFill className="w-10 h-10 text-[var(--primary2)]" />
            <h2 className="text-4xl font-medium">
                Hello, We are all about Advertising!
            </h2>
            <p className="text-base text-gray-600">
                From bold visuals to smart placement, we bring your brand to life through 
                creative and strategic digital advertising solutions.
            </p>
        </div>
    </Block>
);

const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 md:col-span-3 aspect-square bg-[#bd081c]"
        >
            <Link
                href="#"
                className="grid w-full h-full place-content-center text-3xl text-white"
            >
                <SiPinterest />
            </Link>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 md:col-span-3 aspect-square bg-[#e4405f]"
        >
            <Link
                href="#"
                className="grid w-full h-full place-content-center text-3xl text-white"
            >
                <SiInstagram />
            </Link>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 md:col-span-3 aspect-square bg-blue-600 "
        >
            <Link
                href="#"
                className="grid w-full h-full place-content-center text-3xl text-white"
            >
                <SiFacebook />
            </Link>
        </Block>
        <Block 
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 md:col-span-3 aspect-square bg-[linear-gradient(to_bottom_left,_var(--primary1),_var(--primary2)_60%)]"
        >
            <Link
                href="#Contact"
                className="grid w-full h-full place-content-center text-3xl text-white"
            >
                <MdEmail />
            </Link>
        </Block>
    </>
);

const AboutBlock = () => (
    <Block className="col-span-12 px-8 sm:px-12 py-6 sm:py-8">
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-snug">
            We are a creative digital advertising agency driven by strategy, design, and innovation. 
            With a passion for helping brands stand out in today’s fast-paced digital world, 
            we craft impactful visual campaigns that connect, engage, and convert. 
            Whether you're launching a new product or strengthening your brand presence, 
            our team is here to turn your vision into eye-catching results.
        </p>
    </Block>
);

const ServicesBlock = () => (
    <>  
        <Block className="col-span-12 md:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
            <h2 className="text-2xl font-bold mb-2">What We Offer</h2>
            <p className="text-base text-gray-600">
                We specialize in powerful digital advertising solutions tailored to elevate your brand visibility. 
                Explore our three core services designed to help you reach your audience effectively and efficiently.
            </p>
        </Block>
        <Block className="col-span-12 md:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
            <h3 className="text-xl font-bold mb-1">Digital Advertising Design</h3>
            <p className="text-base text-gray-600">
                Eye-catching, modern, and on-brand — we craft digital ads that not only look great, 
                but perform even better. From static designs to animated visuals, our creatives are 
                designed to stop the scroll and deliver results.
            </p>
        </Block>
        <Block className="col-span-12 md:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
            <h3 className="text-xl font-bold mb-1">Advertising in Strategic Locations</h3>
            <p className="text-base text-gray-600">
                Reach your audience in high-traffic areas with our network of digital totems. 
                Currently available in key locations including city centers, shopping malls, transport hubs, 
                and business districts — your message is always seen.
            </p>
        </Block>
        <Block className="col-span-12 md:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
            <h3 className="text-xl font-bold mb-1">Digital Advertising Consultation & Project Planning</h3>
            <p className="text-base text-gray-600">
                From concept to execution, we provide expert guidance for your digital ad campaigns. 
                Whether you're launching your first campaign or scaling up, our team helps you strategize, 
                plan, and implement for maximum impact.
            </p>
        </Block>
    </>
)
