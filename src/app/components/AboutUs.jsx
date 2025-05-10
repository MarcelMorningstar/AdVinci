'use client'

import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {useTranslations} from 'next-intl';
import { useWindowDimensions } from "../utilities/window";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { FaStar, FaLightbulb } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import img from '../assets/arita.jpg'
import Image from "next/image";
import img1 from '../assets/aboutus1.jpg'
import img2 from '../assets/aboutus2.jpg'
import img3 from '../assets/aboutus3.jpg'
import styles from '../styles/About.module.scss';



export default function AboutUs() {
    const t = useTranslations('about');

    const items = [
      {
        id: 1,
        title: t("about1.title"),
        Icon: FaStar,
        description: t("about1.description"),
      },
      {
        id: 2,
        title: t("about2.title"),
        Icon: FaEarthAfrica,
        description: t("about2.description"),
      },
      {
        id: 3,
        title: t("about3.title"),
        Icon: FaLightbulb,
        description: t("about3.description"),
      }
    ];

    const ref = useRef(null)
    const [refHeight, setRefHeight] = useState(0);
    const [mobile, setMobile] = useState(false)
    const [open, setOpen] = useState(items[0].id);
    const dimensions = useWindowDimensions();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
    
    

    useEffect(() => {
      if (dimensions.width < 768) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }, [dimensions])

    useLayoutEffect(() => {
      if (ref.current) {
        setRefHeight(ref.current.offsetHeight);
      }
    }, [dimensions]);

    // const raw1Y = useTransform(scrollYProgress, [0, 1], mobile ? [-0.6 * refHeight, 0.6 * refHeight] : [-0.5 * refHeight, 0.6 * refHeight]);
    // const raw2Y = useTransform(scrollYProgress, [0, 1], mobile ? [-0.2 * refHeight, 1 * refHeight] : [0.2 * refHeight, 1.05 * refHeight]);
    // const raw3Y = useTransform(scrollYProgress, [0, 1], [-1.3 * refHeight, 1 * refHeight]);
    const raw1Y = useTransform(scrollYProgress, [0, 1], mobile ? [-0.6 * refHeight, 0.6 * refHeight] : [-0.3 * dimensions.height, 0.2 * dimensions.height]);
    const raw2Y = useTransform(scrollYProgress, [0, 1], mobile ? [-0.2 * refHeight, 1 * refHeight] : [-0.09 * dimensions.height, 0.4 * dimensions.height]);
    const raw3Y = useTransform(scrollYProgress, [0, 1], [-0.6 * dimensions.height, 0.3 * dimensions.height]);
    const parallax1Y = useSpring(raw1Y, { stiffness: 70, damping: 7 });
    const parallax2Y = useSpring(raw2Y, { stiffness: 70, damping: 7 });
    const parallax3Y = useSpring(raw3Y, { stiffness: 70, damping: 7 });

    return (
        <section id="AboutUs" className="flex flex-col pt-44">
            {/* <div className="h-[30vh]"></div> */}
            <div className="flex flex-col justify-center items-center">
              <h2 className="w-10/12 mb-20 sm:mb-16 text-center xl:text-left text-4xl sm:text-5xl font-bold z-30 px-2">{ t("title") }</h2>
              <div className="w-10/12 flex flex-col xl:flex-row gap-8 pb-32 items-stretch">
                  <div className="relative z-40 flex flex-col h-[600px] lg:h-[420px] w-full max-w-6xl mx-auto shadow overflow-hidden rounded-lg bg-[var(--background)]">
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
                  <div ref={ref} className="relative left-1/2 -translate-x-1/2 xl:left-0 xl:translate-x-0 w-full h-96 md:w-11/12 lg:w-3/4 xl:w-full order-first xl:order-2">
                      <motion.div
                        className="absolute left-1/12 md:left-4 w-[70%] md:w-[49%] 2xl:w-[45%] aspect-video rounded-[100px] z-30 shadow-2xl"
                        style={{ y: parallax1Y }}
                      >
                        <Image src={img1} fill className="object-cover rounded-[100px]" loading='lazy' alt="" />         
                      </motion.div>
                      <motion.div
                        className="absolute left-1/3 md:left-1/3 w-[60%] md:w-[45%] 2xl:w-[35%] aspect-[3/2] rounded-[48px] z-10 shadow-2xl"
                        style={{ y: parallax2Y }}
                      >
                        <Image src={img3} fill className="object-cover rounded-[48px]" loading='lazy' alt="" />
                      </motion.div>
                      {
                        dimensions.width >= 768 && (
                            <motion.div
                              className="absolute right-2 w-[37%] 2xl:w-[35%] aspect-square rounded-[60px] z-20 shadow-2xl"
                              style={{ y: parallax3Y }}
                            >
                              <Image src={img2} fill className="object-cover rounded-[60px]" loading='lazy' alt="" />
                            </motion.div>
                        )
                      }
                      
                  </div>
              </div>

              <div className="relative z-40 w-full h-28 bg-[var(--foreground)]">
                <div className={styles.topline}>
                  <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                  </svg>
                </div> 
                <div className={styles.bottomline}>
                  <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                  </svg>
                </div>
              </div>
              
              <div className="relative z-30 flex gap-52 pt-24 pb-16 bg-[var(--background2)]">
                  <div className="w-full flex flex-col gap-20 sm:gap-16 justify-center items-center">
                    <h1 className="text-center text-4xl sm:text-5xl font-bold">{ t("title2") }</h1>
                    <div className="w-10/12 md:w-9/12 flex flex-col lg:flex-row gap-12 items-center lg:items-start">
                        <div className="relative w-[300px] sm:w-[400px] h-[400px] shrink-0">
                          <Image src={img} fill className="object-cover rounded-2xl" loading='lazy' alt="" />
                        </div>
                        <div className="flex flex-col gap-2.5 justify-center text-xl text-center lg:text-left">
                          <p>{ t("text1") }</p>
                          <p>{ t("text2") }</p>
                          <p>{ t("text3") }</p>
                          <span id="signature" className="text-8xl">Arita Bluka</span>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </section>
    )
}

const Panel = ({ open, setOpen, id, Icon, title, description }) => {
    const dimensions = useWindowDimensions();
    const isOpen = open === id;
    const formattedDescription = description.replace(/\n/g, '<br />');

    const panelVariants1 = {
        open: {
            width: "100%",
            height: "265px",
        },
        closed: {
            width: "0%",
            height: "0px",
        },
    };
    
    const panelVariants2 = {
        open: {
            width: "100%",
            height: "445px",
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
          className="bg-[var(--background2)] hover:bg-[#8e7995] transition-colors p-3 border-l-[1px] border-r-[1px] border-b-[1px] border-[var(--background2)] flex flex-row-reverse justify-end items-center gap-4 relative group"
          onClick={() => setOpen(id)}
        >
          <span
            style={{
              writingMode: "vertical-lr",
            }}
            className="hidden text-xl font-light rotate-180"
          >
            {title}
          </span>
          <span className="block text-xl font-light">{title}</span>
          <div className="w-6 aspect-square text-[var(--primary2)] grid place-items-center">
            <Icon />
          </div>
          <span className="w-4 h-4 bg-[var(--background2)] group-hover:bg-[#8e7995] transition-colors border-r-[1px] border-b-[1px] border-[var(--background2)] rotate-45 absolute bottom-0 right-[50%] translate-y-[50%] translate-x-[50%] z-40" />
        </button>
  
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key={`panel-${id}`}
              variants={dimensions.width && dimensions.width > 1024 ? panelVariants1 : panelVariants2}
              initial="closed"
              animate="open"
              exit="closed"
              className="relative z-[35] bg-neutral-100 w-full h-full overflow-none flex"
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
