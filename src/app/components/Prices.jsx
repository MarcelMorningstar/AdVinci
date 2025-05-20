'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useMotionValue, animate } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { PiVideoConferenceFill } from "react-icons/pi";
import { TbPresentationAnalyticsFilled } from "react-icons/tb";
import { FaChartPie } from "react-icons/fa";
import styles from "../styles/Pricing.module.scss"

export default function Prices() {
    const t = useTranslations('price');
    const [price, setPrice] = useState(0);
    // const [plan, setPlan] = useState("starter");
    const [adDuration, setAdDuration] = useState("10");
    const [campaignDuration, setCampaignDuration] = useState("1");
    const [designWithUs, setDesignWithUs] = useState("noThanks");

    const priceMatrix = {
        "10": { "1": 90, "4": 324, "12": 864 },
        "15": { "1": 135, "4": 486, "12": 1296 },
        "30": { "1": 270, "4": 972, "12": 2592 },
    };

    useEffect(() => {
        const basePrice = priceMatrix[adDuration]?.[campaignDuration] || 0;

        const finalPrice = designWithUs === "animated" ? basePrice + 150 : designWithUs === "static" ? basePrice + 75 : basePrice;

        setPrice(finalPrice);
    }, [adDuration, campaignDuration, designWithUs])

    // const starterPlan = () => {
    //     setPlan("starter")
    //     setAdDuration("10")
    //     setCampaignDuration("1")
    //     setDesignWithUs("noThanks")
    // }

    // const communityPlan = () => {
    //     setPlan("community")
    //     setAdDuration("15")
    //     setCampaignDuration("4")
    //     setDesignWithUs("static")
    // }

    // const expansionPlan = () => {
    //     setPlan("expansion")
    //     setAdDuration("30")
    //     setCampaignDuration("12")
    //     setDesignWithUs("animated")
    // }

    return (
        <div className='w-3/4 lg:w-2/3 xl:w-2/3 2xl:w-1/2 flex flex-col items-center gap-4 pt-24'>
            <div className='flex flex-col items-center gap-1'>
                <h2 className='text-center text-4xl'>San Severino Marche</h2>
                <div>
                    <p className='text-center text-base max-w-[640px] text-gray-700'>{`💡 ${t('text1')}`}</p>
                    <p className='text-center text-base max-w-[640px] text-gray-700'>{`💰 ${t('text2')}`}</p>
                </div>              
            </div>

            <Link href="/offers" className='w-11/12 xs:w-full sm:w-[110%] rounded-full shadow-md flex flex-row items-center justify-center py-4 px-4 transition-all duration-750 ease-in-out bg-gradient-to-r from-pink-500 to-orange-400 bg-[length:150%] bg-right hover:bg-left active:bg-left focus:bg-left cursor-pointer'>
                <span className='text-base sm:text-lg text-center text-white font-bold'>{ t("button") }</span>
            </Link>
            
            <div className='w-full flex flex-col gap-8 items-center mt-6'>
                <div className='w-full sm:w-2/3 lg:w-full flex flex-col gap-4'>
                    <ul className="flex flex-col lg:flex-row w-full gap-6">
                        <li className={styles.plan}>
                            <div className={styles.itemContent}>
                                <input type="radio" id="starter" name="plan" value="starter" className={styles.peer} />
                                <label htmlFor="starter" className={styles.label1}>                           
                                    <h4 className='text-gray-800'>{ t("plan1.title") }</h4>
                                    <h5 className='text-gray-800'>€90</h5>
                                    <ul className='text-gray-500'>
                                        <li>{ t("plan1.list.item1") }</li>
                                        <li>{ t("plan1.list.item2") }</li>
                                        <li>{ t("plan1.list.item3") }</li>
                                    </ul>
                                </label>
                            </div>
                        </li>
                        <li className={styles.plan}>
                            <div className={styles.itemContent}>
                                <input type="radio" id="community" name="plan" value="community" className={styles.peer} />
                                <label htmlFor="community" className={styles.label2}>
                                    <h4 className='text-gray-800'>{ t("plan2.title") }</h4>
                                    <h5 className='text-gray-800'>€486</h5>
                                    <ul className='text-gray-500'>
                                        <li>{ t("plan2.list.item1") }</li>
                                        <li>{ t("plan2.list.item2") }</li>
                                        <li>{ t("plan2.list.item3") }</li>
                                    </ul>
                                </label>
                            </div>
                        </li>
                        <li className={styles.plan}>
                            <div className={styles.itemContent}>
                                <input type="radio" id="expansion" name="plan" value="expansion" className={styles.peer} />
                                <label htmlFor="expansion" className={styles.label3}>
                                    <h4 className='text-gray-800'>{ t("plan3.title") }</h4>
                                    <h5 className='text-gray-800'>€2592</h5>
                                    <ul className='text-gray-500'>
                                        <li>{ t("plan3.list.item1") }</li>
                                        <li>{ t("plan3.list.item2") }</li>
                                        <li>{ t("plan3.list.item3") }</li>
                                    </ul>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <AnimatedCounter target={price} />
                </div>
                <div className='w-full flex flex-col gap-6'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center text-2xl font-medium'>{ t("priceBuilding1.title") }</h4>
                        <ul className="flex flex-wrap w-full gap-6">
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="10" name="adDuration" value="10" className={styles.peer} checked={adDuration === "10"} onChange={() => setAdDuration("10")} />
                                    <label htmlFor="10" className={styles.label}>                           
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{ t("priceBuilding1.list.item1.title") }</div>
                                            <ul className='w-fit list-disc ml-5'>
                                                <li>{ t("priceBuilding1.list.item1.text.1") }</li>
                                                <li>{ t("priceBuilding1.list.item1.text.2") }</li>
                                                <li>{ t("priceBuilding1.list.item1.text.3") }</li>
                                                <li>{ t("priceBuilding1.list.item1.text.4") }</li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="15" name="adDuration" value="15" className={styles.peer} checked={adDuration === "15"} onChange={() => setAdDuration("15")} />
                                    <label htmlFor="15" className={styles.label}>
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{ t("priceBuilding1.list.item2.title") }</div>
                                            <ul className='w-fit list-disc ml-5'>
                                                <li>{ t("priceBuilding1.list.item2.text.1") }</li>
                                                <li>{ t("priceBuilding1.list.item2.text.2") }</li>
                                                <li>{ t("priceBuilding1.list.item2.text.3") }</li>
                                                <li>{ t("priceBuilding1.list.item2.text.4") }</li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="30" name="adDuration" value="30" className={styles.peer} checked={adDuration === "30"} onChange={() => setAdDuration("30")} />
                                    <label htmlFor="30" className={styles.label}>
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{ t("priceBuilding1.list.item3.title") }</div>
                                            <ul className='w-fit list-disc ml-5'>
                                                <li>{ t("priceBuilding1.list.item3.text.1") }</li>
                                                <li>{ t("priceBuilding1.list.item3.text.2") }</li>
                                                <li>{ t("priceBuilding1.list.item3.text.3") }</li>
                                                <li>{ t("priceBuilding1.list.item3.text.4") }</li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center text-2xl font-medium'>{ t("priceBuilding2.title") }</h4>
                        <ul className="flex flex-wrap md:grid md:grid-cols-3 w-full gap-6">
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="1" name="campaignDuration" value="1" className={styles.peer} checked={campaignDuration === "1"} onChange={() => setCampaignDuration("1")} />
                                    <label htmlFor="1" className={styles.label}>                           
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{ t("priceBuilding2.list.item1.title") }</div>
                                            <ul className='w-fit list-disc ml-5'>
                                                <li>{ t("priceBuilding2.list.item1.text.1") }</li>
                                                <li>{ t("priceBuilding2.list.item1.text.2") }</li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="4" name="campaignDuration" value="4" className={styles.peer} checked={campaignDuration === "4"} onChange={() => setCampaignDuration("4")} />
                                    <label htmlFor="4" className={styles.label}>
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{ t("priceBuilding2.list.item2.title") }</div>
                                            <ul className='w-fit list-disc ml-5'>
                                                <li>{ t("priceBuilding2.list.item2.text.1") }</li>
                                                <li>{ t("priceBuilding2.list.item2.text.2") }</li>
                                                <li>{ t("priceBuilding2.list.item2.text.3") }</li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="12" name="campaignDuration" value="12" className={styles.peer} checked={campaignDuration === "12"} onChange={() => setCampaignDuration("12")} />
                                    <label htmlFor="12" className={styles.label}>
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{ t("priceBuilding2.list.item3.title") }</div>
                                            <ul className='w-fit list-disc ml-5'>
                                                <li>{ t("priceBuilding2.list.item3.text.1") }</li>
                                                <li>{ t("priceBuilding2.list.item3.text.2") }</li>
                                                <li>{ t("priceBuilding2.list.item3.text.3") }</li>
                                            </ul>
                                        </div>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center text-2xl font-medium'>{ t("priceBuilding3.title") }</h4>
                        <ul className="flex flex-wrap md:grid md:grid-cols-3 w-full gap-6">
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="noThanks" name="designWithUs" value="noThanks" className={styles.peer} checked={designWithUs === "noThanks"} onChange={() => setDesignWithUs("noThanks")} />
                                    <label htmlFor="noThanks" className={styles.label}>                       
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{ t("priceBuilding3.list.item1.title") }</div>
                                            <div className="w-full">{ t("priceBuilding3.list.item1.text") }</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="static" name="designWithUs" value="static" className={styles.peer} checked={designWithUs === "static"} onChange={() => setDesignWithUs("static")} />
                                    <label htmlFor="static" className={styles.label}>                           
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{ t("priceBuilding3.list.item2.title") }</div>
                                            <div className="w-full">{ t("priceBuilding3.list.item2.text") }</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="animated" name="designWithUs" value="animated" className={styles.peer} checked={designWithUs === "animated"} onChange={() => setDesignWithUs("animated")} />
                                    <label htmlFor="animated" className={styles.label}>
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">{ t("priceBuilding3.list.item3.title") }</div>
                                            <div className="w-full">{ t("priceBuilding3.list.item3.text") }</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center gap-1'>
                    <h4 className='text-2xl font-semibold'>{ t("extras.title") }</h4>
                    <div className='w-full flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-6'>
                        <div className='w-full bg-neutral-50 text-gray-600 rounded-lg p-5'>
                            <div className='flex flex-row justify-between gap-5'>
                                <div className='flex flex-row gap-1.5'>
                                    <RiRefreshFill className='h-8 w-8 text-orange-500' />
                                    <h5 className='text-lg sm:text-xl font-semibold'>{ t("extras.extra1") }</h5>
                                </div>
                                <div className='flex flex-row items-start gap-0.5'>
                                    <span className='text-lg font-medium'>€</span>
                                    <span className=' text-3xl font-semibold'>20</span>
                                </div>
                            </div>
                            <div>
                                <p>{ t("extras.extra1text") }</p>
                            </div>
                        </div>
                        <div className='w-full bg-neutral-50 text-gray-600 rounded-lg p-5'>
                            <div className='flex flex-row justify-between gap-5'>
                                <div className='flex flex-row gap-1.5'>
                                    <PiVideoConferenceFill className='h-8 w-8 text-blue-500' />
                                    <h5 className='text-lg sm:text-xl font-semibold'>{ t("extras.extra2") }</h5>
                                </div>
                                <div className='flex flex-row items-start gap-0.5'>
                                    <span className='text-lg font-medium'>€</span>
                                    <span className=' text-3xl font-semibold'>60</span>
                                </div>
                            </div>
                            <div>
                                <p>{ t("extras.extra2text") }</p>
                            </div>
                        </div>
                        <div className='w-full bg-neutral-50 text-gray-600 rounded-lg p-5'>
                            <div className='flex flex-row justify-between gap-5'>
                                <div className='flex flex-row gap-1.5'>
                                    <TbPresentationAnalyticsFilled className='h-8 w-8 text-green-500' />
                                    <h5 className='text-lg sm:text-xl font-semibold'>{ t("extras.extra3") }</h5>
                                </div>
                                <div className='flex flex-row items-start gap-0.5'>
                                    <span className='text-lg font-medium'>€</span>
                                    <span className=' text-3xl font-semibold'>250</span>
                                </div>
                            </div>
                            <div>
                                <p>{ t("extras.extra3text") }</p>
                            </div>
                        </div>
                        <div className='w-full bg-neutral-50 text-gray-600 rounded-lg p-5'>
                            <div className='flex flex-row justify-between gap-5'>
                                <div className='flex flex-row gap-1.5'>
                                    <FaChartPie className='h-8 w-8 text-purple-500' />
                                    <h5 className='text-lg sm:text-xl font-semibold'>{ t("extras.extra4") }</h5>
                                </div>
                                <div className='flex flex-row items-start gap-0.5'>
                                    <span className='text-lg font-medium'>€</span>
                                    <span className=' text-3xl font-semibold'>50</span>
                                    <span className='text-lg font-medium whitespace-nowrap'>/month</span>
                                </div>
                            </div>
                            <div>
                                <p>{ t("extras.extra4text") }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

function AnimatedCounter({ target }) {
  const count = useMotionValue(target);
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 1,
      onUpdate: latest => setDisplay(Math.round(latest)),
    });

    return controls.stop;
  }, [target]);

  return (
    <h3 className="text-5xl text-center font-medium">
        €{display}
    </h3>
  );
}
