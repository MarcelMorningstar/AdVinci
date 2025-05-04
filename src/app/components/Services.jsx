'use client'

import React, { useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import BrandLine from './BrandLine'
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { MdEmail } from "react-icons/md";
import { BsMegaphoneFill } from "react-icons/bs";
import { TbInfoHexagonFilled } from "react-icons/tb";
import { FaPaintBrush, FaHandsHelping } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import img1 from '../assets/service1.jpg'
import img2 from '../assets/service2.jpg'
import img3 from '../assets/service3.jpg'
import styles from '../styles/Services.module.scss'

const serviceData = {
    1: {
        "title": "Digital Advertising",
        "text": "Reach your audience through our growing network of digital totems, placed in high-traffic local areas. Clients can advertise directly on our network, or we can design and build additional digital advertising solutions tailored to support your business needs."
    },
    2: {
        "title": "Digital Advertising Design",
        "text": "Eye-catching, modern, and on-brand - we craft digital ads that not only look great, but perform even better. From static designs to animated visuals, our creatives are designed to stop the scroll and deliver results."
    },
    3: {
        "title": "Digital Advertising Consultation & Project Planning",
        "text": "From concept to execution, we provide expert guidance for your digital ad campaigns. Whether you're launching your first campaign or scaling up, our team helps you strategize, plan, and implement for maximum impact."
    },
    4: {
        "title": "Email Us",
        "text": "Click it to go to the Contact Form."
    },
}

export default function Services() {
    return (
        <section id="Services" className="min-h-[80vh] flex flex-col gap-32 justify-center items-center pt-32">
            <div className="w-10/12 flex flex-col justify-center items-center">
                <div className='flex flex-col justify-center items-center gap-2 mb-8'>
                    <h2 className='text-center text-3xl sm:text-5xl font-bold'>What We Offer</h2>
                    <p className='text-center w-2/3'>At AdVinci, we deliver smart digital advertising solutions designed to grow your brand and connect you with your local audience.
                    Discover our three core services — built to help your business stand out, attract more customers, and thrive in today's fast-moving world.</p>
                </div>
                <motion.div 
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ amount: 0.1, once: true }}
                    transition={{
                        staggerChildren: 0.25,
                    }}
                    className="w-full mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-5"
                >
                    <ServiceBlock />
                </motion.div>
            </div>

            <BrandLine />
        </section>
    )
}

const Block = ({ id, className, children, ...rest }) => {
    return (
      <motion.div
        id={id}
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

const ServiceBlock = () => {
    const [id, setID] = useState(0);

    return (
        <>
            <Block className="col-span-12 row-span-2 lg:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
                {
                    id == 0 ? (
                        <div className="flex flex-col gap-2" key={0}>
                            <TbInfoHexagonFilled className="w-12 h-12 text-[var(--primary2)]" />
                            <h2 className="text-3xl font-medium">
                                Hover over any <i className="text-5xl">Service</i> block to learn more - the details will appear here.
                            </h2>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2" key={id}>
                            <TypeAnimation
                                sequence={[serviceData[id].title]}
                                wrapper="h3"
                                speed={50}
                                style={{ fontSize: '2rem', fontWeight: '500' }}
                                repeat={0}
                            />
                            <TypeAnimation
                                sequence={[serviceData[id].text]}
                                wrapper="p"
                                speed={75}
                                style={{ fontSize: '1rem', color: '#4B5563' }}
                                repeat={0}
                            />
                        </div>
                    )
                }
            </Block>
            <Block
                onMouseEnter={() => setID(1)}
                onMouseLeave={() => setID(0)}
                whileHover={{
                    rotate: "2.1deg",
                    scale: 1.07,
                }}
                className={styles.block}
            >
                <Image src={img1} fill className="object-cover z-0 rounded-lg" loading='lazy' alt={serviceData[1].title} />

                <div className={styles.glass} />

                <div className={styles.iconContainer}>
                    <BsMegaphoneFill className={styles.icon} />
                </div>
            </Block>
            <Block
                onMouseEnter={() => setID(2)}
                onMouseLeave={() => setID(0)}
                whileHover={{
                    rotate: "-2.1deg",
                    scale: 1.07,
                }}
                className={styles.block}
            >
                <Image src={img2} fill className="object-cover z-0 rounded-lg" loading='lazy' alt={serviceData[2].title} />

                <div className={styles.glass} />

                <div className={styles.iconContainer}>
                    <FaPaintBrush className={styles.icon} />
                </div>
            </Block>
            <Block
                onMouseEnter={() => setID(3)}
                onMouseLeave={() => setID(0)}
                whileHover={{
                    rotate: "-2.1deg",
                    scale: 1.07,
                }}
                className={styles.block}
            >
                <Image src={img3} fill className="object-cover z-0 rounded-lg" loading='lazy' alt={serviceData[2].title} />

                <div className={styles.glass} />

                <div className={styles.iconContainer}>
                    <FaHandsHelping className={styles.icon} />
                </div>
            </Block>
            <Block 
                onMouseEnter={() => setID(4)}
                onMouseLeave={() => setID(0)}
                whileHover={{
                    rotate: "-2.1deg",
                    scale: 1.07,
                }}
                className="col-span-6 lg:col-span-3 aspect-square bg-[linear-gradient(to_bottom_left,_var(--primary1),_var(--primary2)_60%)]"
            >
                <Link
                    href="/#Contact"
                    className="grid w-full h-full place-content-center text-3xl text-white"
                >
                    <MdEmail />
                </Link>
            </Block>
        </>
    )
};