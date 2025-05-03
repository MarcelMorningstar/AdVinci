'use client'

import React, { useState } from "react";
import { useWindowDimensions } from "../utilities/window";
import LinkToHash from "./LinkToHash";
import Image from "next/image";
// import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { MdEmail } from "react-icons/md";
import { BsMegaphoneFill } from "react-icons/bs";
import { FaPaintBrush, FaHandsHelping, FaStar, FaLightbulb, FaRocket } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { TbInfoHexagonFilled } from "react-icons/tb";
// import { SiPinterest, SiInstagram, SiFacebook, } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';
import img1 from '../assets/service1.jpg'
import img2 from '../assets/service2.jpg'
import img3 from '../assets/service3.jpg'
import styles from '../styles/Aboutus.module.scss'

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

const items = [
    {
      id: 1,
      title: "Our Mission",
      Icon: FaStar,
      imgSrc:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description:
        "Our mission is to transform digital advertising into measurable success for every client through innovation and partnership",
    },
    {
      id: 2,
      title: "Our Vision",
      Icon: FaEarthAfrica,
      imgSrc:
        "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      description:
        "Helping businesses grow, succeed, and deliver more value — through powerful advertising and trusted partnership.",
    },
    {
      id: 3,
      title: "Why AdVinci?",
      Icon: FaLightbulb,
      imgSrc:
        "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      description:
        "We create fast, bold advertising solutions — from sleek designs to powerful videos that connect. At the cutting edge of technology, we’re the place for creative minds who want to grow, innovate, and make an impact.",
    },
    {
      id: 4,
      title: "Our Journey",
      Icon: FaRocket,
      imgSrc:
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description:
        "I'm Arita, founder of AdVinci. With a strong background in art, design, and digital media, creativity has been at the core of my journey. Originally from the Baltics, I spent a decade in England gaining international experience before relocating to Italy, where I established AdVinci. \n\nI also spent several years working in Estonia, one of the world’s most digitally advanced and tech-driven countries, further strengthening my expertise in digital innovation. Over the years, I have designed property interiors, created art collections, and evolved into active digital creation. \n\nToday, my hands-on experience in digital marketing, design, and content strategy drives AdVinci’s approach, helping businesses grow their online presence with creativity and precision.",
    },
];

export default function AboutUs() {
    return (
        <section id="Services" className="min-h-screen flex justify-center items-center pt-32">
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
                    {/* <HeaderBlock /> */}
                    {/* <SocialsBlock /> */}
                    <AboutBlock />
                    {/* <ServicesBlock /> */}
                </motion.div>
            </div>
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

const Panel = ({ open, setOpen, id, Icon, title, imgSrc, description }) => {
    const dimensions = useWindowDimensions();
    const isOpen = open === id;
    const formattedDescription = description.replace(/\n/g, '<br />');

    const panelVariants = {
        open: {
            width: "100%",
            height: "100%",
        },
        closed: {
            width: "0%",
            height: "100%",
        },
    };
    
    const panelVariantsSm = {
        open: {
            width: "100%",
            height: "340px",
        },
        closed: {
            width: "100%",
            height: "0px",
        },
    };
    
    const descriptionVariants = {
        open: {
            opacity: 1,
            y: "0%",
            transition: {
            delay: 0.125,
            },
        },
        closed: { opacity: 0, y: "100%" },
    };

    return (
      <>
        <button
          className="bg-white hover:bg-slate-50 transition-colors p-3 border-l-[1px] border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
          onClick={() => setOpen(id)}
        >
          <span
            style={{
              writingMode: "vertical-lr",
            }}
            className="hidden lg:block text-xl font-light rotate-180"
          >
            {title}
          </span>
          <span className="block lg:hidden text-xl font-light">{title}</span>
          <div className="w-6 lg:w-full aspect-square text-[var(--primary2)] grid place-items-center">
            <Icon />
          </div>
          <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
        </button>
  
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key={`panel-${id}`}
              variants={dimensions.width && dimensions.width > 1024 ? panelVariants : panelVariantsSm}
              initial="closed"
              animate="open"
              exit="closed"
              className="w-full h-full overflow-y-auto relative flex"
            >
              <motion.div
                variants={descriptionVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col gap-2 px-6 py-8"
              >
                <h4 className="text-3xl font-bold">{ title }</h4>
                <p dangerouslySetInnerHTML={{ __html: formattedDescription }} className="text-xl" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
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
                <LinkToHash
                    to="/#Contact"
                    className="grid w-full h-full place-content-center text-3xl text-white"
                >
                    <MdEmail />
                </LinkToHash>
            </Block>
        </>
    )
};

const AboutBlock = () => {
    const [open, setOpen] = useState(items[0].id);

    return (
        <Block className="col-span-12">
            <div className="flex flex-col lg:flex-row h-[550px] lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden rounded-lg">
                {items.map((item) => {
                    return (
                        <Panel
                            key={item.id}
                            open={open}
                            setOpen={setOpen}
                            id={item.id}
                            Icon={item.Icon}
                            title={item.title}
                            imgSrc={item.imgSrc}
                            description={item.description}
                        />
                    );
                })}
            </div>
        </Block>
    )
};

// const HeaderBlock = () => (
//     <Block className="col-span-12 row-span-2 md:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
//         <div className="flex flex-col gap-2">
//             <BsMegaphoneFill className="w-10 h-10 text-[var(--primary2)]" />
//             <h2 className="text-4xl font-medium">
//                 Hello, We are all about <i>Advertising!</i>
//             </h2>
//             <p className="text-base text-gray-600">
//                 From bold visuals to smart placement, we bring your brand to life through 
//                 creative and strategic digital advertising solutions.
//             </p>
//         </div>
//     </Block>
// );

// const SocialsBlock = () => (
//     <>
//         <Block
//             whileHover={{
//                 rotate: "2.5deg",
//                 scale: 1.1,
//             }}
//             className="col-span-6 md:col-span-3 aspect-square bg-[#bd081c]"
//         >
//             <Link
//                 href="#"
//                 className="grid w-full h-full place-content-center text-3xl text-white"
//             >
//                 <SiPinterest />
//             </Link>
//         </Block>
//         <Block
//             whileHover={{
//                 rotate: "-2.5deg",
//                 scale: 1.1,
//             }}
//             className="col-span-6 md:col-span-3 aspect-square bg-[#e4405f]"
//         >
//             <Link
//                 href="#"
//                 className="grid w-full h-full place-content-center text-3xl text-white"
//             >
//                 <SiInstagram />
//             </Link>
//         </Block>
//         <Block
//             whileHover={{
//                 rotate: "-2.5deg",
//                 scale: 1.1,
//             }}
//             className="col-span-6 md:col-span-3 aspect-square bg-blue-600 "
//         >
//             <Link
//                 href="#"
//                 className="grid w-full h-full place-content-center text-3xl text-white"
//             >
//                 <SiFacebook />
//             </Link>
//         </Block>
//         <Block 
//             whileHover={{
//                 rotate: "-2.5deg",
//                 scale: 1.1,
//             }}
//             className="col-span-6 md:col-span-3 aspect-square bg-[linear-gradient(to_bottom_left,_var(--primary1),_var(--primary2)_60%)]"
//         >
//             <Link
//                 href="#Contact"
//                 className="grid w-full h-full place-content-center text-3xl text-white"
//             >
//                 <MdEmail />
//             </Link>
//         </Block>
//     </>
// );

// const AboutBlock = () => (
//     <Block className="col-span-12 px-8 sm:px-12 py-6 sm:py-8">
//         <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-snug">
//             We are a creative digital advertising agency driven by strategy, design, and innovation. 
//             With a passion for helping brands stand out in today’s fast-paced digital world, 
//             we craft impactful visual campaigns that connect, engage, and convert. 
//             Whether you're launching a new product or strengthening your brand presence, 
//             our team is here to turn your vision into eye-catching results.
//         </p>
//     </Block>
// );

// const ServicesBlock = () => (
//     <>  
//         <Block id="Services" className="col-span-12 md:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
//             <h2 className="text-2xl font-bold mb-2">What We Offer</h2>
//             <p className="text-base text-gray-600">
//                 We specialize in powerful digital advertising solutions tailored to elevate your brand visibility. 
//                 Explore our three core services designed to help you reach your audience effectively and efficiently.
//             </p>
//         </Block>
//         <Block className="col-span-12 md:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
//             <h3 className="text-xl font-bold mb-1">Digital Advertising Design</h3>
//             <p className="text-base text-gray-600">
//                 Eye-catching, modern, and on-brand — we craft digital ads that not only look great, 
//                 but perform even better. From static designs to animated visuals, our creatives are 
//                 designed to stop the scroll and deliver results.
//             </p>
//         </Block>
//         <Block className="col-span-12 md:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
//             <h3 className="text-xl font-bold mb-1">Advertising in Strategic Locations</h3>
//             <p className="text-base text-gray-600">
//                 Reach your audience in high-traffic areas with our network of digital totems. 
//                 Currently available in key locations including city centers, shopping malls, transport hubs, 
//                 and business districts — your message is always seen.
//             </p>
//         </Block>
//         <Block className="col-span-12 md:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
//             <h3 className="text-xl font-bold mb-1">Digital Advertising Consultation & Project Planning</h3>
//             <p className="text-base text-gray-600">
//                 From concept to execution, we provide expert guidance for your digital ad campaigns. 
//                 Whether you're launching your first campaign or scaling up, our team helps you strategize, 
//                 plan, and implement for maximum impact.
//             </p>
//         </Block>
//     </>
// )
