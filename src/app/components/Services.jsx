'use client'

import React from "react";
import {useTranslations} from 'next-intl';
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from '../assets/service1.png'
import img2 from '../assets/service2.jpg'
import img3 from '../assets/service3.jpg'
import styles from '../styles/Services.module.scss'

export default function Services() {
    const t = useTranslations('services');

    // const { ref: ref1, inView: inView1 } = useInView({
    //     triggerOnce: true,
    //     threshold: 0.2,
    // });
    // const { ref: ref2, inView: inView2 } = useInView({
    //     triggerOnce: true,
    //     threshold: 0.2,
    // });
    // const { ref: ref3, inView: inView3 } = useInView({
    //     triggerOnce: true,
    //     threshold: 0.2,
    // });

    return (
        <section id="Services" className="min-h-[80vh] flex flex-col gap-32 justify-center items-center pt-32 overflow-x-hidden overflow-y-clip">
            <div className="w-10/12 flex flex-col justify-center items-center">
                <div className='flex flex-col justify-center items-center gap-2 mb-12'>
                    <h2 className='text-center text-3xl sm:text-5xl font-bold'>{ t("title") }</h2>
                    <p className='text-center w-3/4'>{ t("description") }</p>
                </div>
                {/* <motion.div 
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ amount: 0.1, once: true }}
                    transition={{
                        staggerChildren: 0.25,
                    }}
                    className="w-full mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-5"
                >
                    <ServiceBlock />
                </motion.div> */}

                <div className="flex flex-col w-full gap-32">
                    <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-8 lg:gap-12 min-h-[20vh]">
                        <div className="flex flex-col gap-2 rounded-lg px-12 sm:px-16 py-8 sm:py-12" key={1}>
                            <h3 className="text-4xl font-medium text-center">{ t("service1.title") }</h3>
                            <p className="text-lg text-center">{ t("service1.description") }</p>
                        </div>
                        <motion.div 
                            className="w-full h-full flex items-center justify-center"
                            initial={ { opacity: 0, x: 300, y: 0 } }
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <div className="relative w-3/4 aspect-[4/3] rounded-3xl shadow-2xl">
                                <Image src={img1} fill sizes="500px" className="object-cover rounded-3xl" loading='lazy' alt={ t("service1.title") } />
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-col lg:grid grid-cols-2 gap-12 min-h-[20vh]">
                        <motion.div 
                            className="w-full h-full flex items-center justify-center"
                            initial={ { opacity: 0, x: -300, y: 0 } }
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <div className="relative w-3/4 aspect-[4/3] rounded-3xl shadow-2xl">
                                <Image src={img2} fill sizes="500px" className="object-cover rounded-3xl" loading='lazy' alt={ t("service2.title") } />
                            </div>
                        </motion.div>
                        <div className="flex flex-col gap-2 rounded-lg px-12 sm:px-16 py-8 sm:py-12" key={2}>
                            <h3 className="text-4xl font-medium text-center">{ t("service2.title") }</h3>
                            <p className="text-lg text-center">{ t("service2.description") }</p>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse lg:grid grid-cols-2 gap-12 min-h-[20vh]">
                        <div className="flex flex-col gap-2 rounded-lg px-12 sm:px-16 py-8 sm:py-12" key={3}>
                            <h3 className="text-4xl font-medium text-center">{ t("service3.title") }</h3>
                            <p className="text-lg text-center">{ t("service3.description") }</p>
                        </div>
                        <motion.div 
                            className="w-full h-full flex items-center justify-center"
                            initial={ { opacity: 0, x: 300, y: 0 } }
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            <div className="relative w-3/4 aspect-[4/3] rounded-3xl shadow-2xl">
                                <Image src={img3} fill sizes="500px" className="object-cover rounded-3xl" loading='lazy' alt={ t("service3.title") } />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className={styles.image}>
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
        </section>
    )
}

// const Block = ({ id, className, children, ...rest }) => {
//     return (
//       <motion.div
//         id={id}
//         variants={{
//             initial: {
//                 scale: 0.5,
//                 y: 50,
//                 opacity: 0,
//             },
//             animate: {
//                 scale: 1,
//                 y: 0,
//                 opacity: 1,
//             },
//         }}
//         transition={{
//             type: "spring",
//             mass: 3,
//             stiffness: 400,
//             damping: 50,
//         }}
//         className={twMerge(
//             "col-span-4 rounded-lg bg-white shadow-lg",
//             className
//         )}
//         {...rest}
//       >
//         { children }
//       </motion.div>
//     );
// };

// const ServiceBlock = () => {
//     const [id, setID] = useState(0);

//     return (
//         <>
//             <Block className="col-span-12 row-span-2 lg:col-span-6 px-8 sm:px-12 py-6 sm:py-8">
//                 {
//                     id == 0 ? (
//                         <div className="flex flex-col gap-2" key={0}>
//                             <TbInfoHexagonFilled className="w-12 h-12 text-[var(--primary2)]" />
//                             <h2 className="text-3xl font-medium">
//                                 Hover over any <i className="text-5xl">Service</i> block to learn more - the details will appear here.
//                             </h2>
//                         </div>
//                     ) : (
//                         <div className="flex flex-col gap-2" key={id}>
//                             <TypeAnimation
//                                 sequence={[serviceData[id].title]}
//                                 wrapper="h3"
//                                 speed={50}
//                                 style={{ fontSize: '2rem', fontWeight: '500' }}
//                                 repeat={0}
//                             />
//                             <TypeAnimation
//                                 sequence={[serviceData[id].text]}
//                                 wrapper="p"
//                                 speed={75}
//                                 style={{ fontSize: '1rem', color: '#4B5563' }}
//                                 repeat={0}
//                             />
//                         </div>
//                     )
//                 }
//             </Block>
//             <Block
//                 onMouseEnter={() => setID(1)}
//                 onMouseLeave={() => setID(0)}
//                 whileHover={{
//                     rotate: "2.1deg",
//                     scale: 1.07,
//                 }}
//                 className={styles.block}
//             >
//                 <Image src={img1} fill sizes="250px" className="object-cover z-0 rounded-lg" loading='lazy' alt={serviceData[1].title} />

//                 <div className={styles.glass} />

//                 <div className={styles.iconContainer}>
//                     <BsMegaphoneFill className={styles.icon} />
//                 </div>
//             </Block>
//             <Block
//                 onMouseEnter={() => setID(2)}
//                 onMouseLeave={() => setID(0)}
//                 whileHover={{
//                     rotate: "-2.1deg",
//                     scale: 1.07,
//                 }}
//                 className={styles.block}
//             >
//                 <Image src={img2} fill sizes="250px" className="object-cover z-0 rounded-lg" loading='lazy' alt={serviceData[2].title} />

//                 <div className={styles.glass} />

//                 <div className={styles.iconContainer}>
//                     <FaPaintBrush className={styles.icon} />
//                 </div>
//             </Block>
//             <Block
//                 onMouseEnter={() => setID(3)}
//                 onMouseLeave={() => setID(0)}
//                 whileHover={{
//                     rotate: "-2.1deg",
//                     scale: 1.07,
//                 }}
//                 className={styles.block}
//             >
//                 <Image src={img3} fill sizes="250px" className="object-cover z-0 rounded-lg" loading='lazy' alt={serviceData[2].title} />

//                 <div className={styles.glass} />

//                 <div className={styles.iconContainer}>
//                     <FaHandsHelping className={styles.icon} />
//                 </div>
//             </Block>
//             <Block 
//                 onMouseEnter={() => setID(4)}
//                 onMouseLeave={() => setID(0)}
//                 whileHover={{
//                     rotate: "-2.1deg",
//                     scale: 1.07,
//                 }}
//                 className="col-span-6 lg:col-span-3 aspect-square bg-[linear-gradient(to_bottom_left,_var(--primary1),_var(--primary2)_60%)]"
//             >
//                 <Link
//                     href="/#Contact"
//                     className="grid w-full h-full place-content-center text-3xl text-white"
//                 >
//                     <MdEmail />
//                 </Link>
//             </Block>
//         </>
//     )
// };