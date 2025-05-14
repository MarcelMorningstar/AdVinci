'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useMotionValue, animate } from "framer-motion";
import styles from "../styles/Pricing.module.scss"

export default function Prices() {
    const [price, setPrice] = useState(0);
    const [plan, setPlan] = useState("starter");
    const [adDuration, setAdDuration] = useState("10");
    const [campaignDuration, setCampaignDuration] = useState("1");
    const [designWithUs, setDesignWithUs] = useState("noThanks");

    const priceMatrix = {
        "10": { "1": 90, "4": 290, "12": 765 },
        "15": { "1": 130, "4": 415, "12": 1105 },
        "30": { "1": 220, "4": 705, "12": 1870 },
    };

    useEffect(() => {
        const basePrice = priceMatrix[adDuration]?.[campaignDuration] || 0;

        const finalPrice = designWithUs === "animated" ? basePrice + 150 : designWithUs === "static" ? basePrice + 75 : basePrice;

        setPrice(finalPrice);
    }, [adDuration, campaignDuration, designWithUs])

    const starterPlan = () => {
        setPlan("starter")
        setAdDuration("10")
        setCampaignDuration("1")
        setDesignWithUs("noThanks")
    }

    const communityPlan = () => {
        setPlan("community")
        setAdDuration("15")
        setCampaignDuration("4")
        setDesignWithUs("static")
    }

    const expansionPlan = () => {
        setPlan("expansion")
        setAdDuration("30")
        setCampaignDuration("12")
        setDesignWithUs("animated")
    }

    return (
        <div className='w-3/4 xl:w-2/3 flex flex-col items-center gap-4 pt-24 pb-12'>
            <div className='flex flex-col items-center gap-1'>
                <h2 className='text-center text-4xl'>San Severino Marche</h2>
                <div>
                    <p className='text-center text-base max-w-[640px] text-gray-700'>💡 How It Works — Build Your Campaign in 3 Easy Steps</p>
                    <p className='text-center text-base max-w-[640px] text-gray-700'>💰 Your price adjusts based on your choices — just like building your own custom plan.</p>
                </div>              
            </div>

            <Link href="/offers" className='w-11/12 xs:w-full sm:w-[110%] rounded-full shadow-md flex flex-row items-center justify-center py-4 px-4 transition-all duration-750 ease-in-out bg-gradient-to-r from-pink-500 to-orange-400 bg-[length:150%] bg-right hover:bg-left active:bg-left focus:bg-left cursor-pointer'>
                {/* <span className='text-sm xs:text-base sm:text-lg text-center text-white font-bold'>Limited Time – Claim Your Offer</span> */}
                {/* <span className='text-sm xs:text-base sm:text-lg text-center text-white font-bold'>Limited Time Offer</span> */}
                <span className='text-base sm:text-lg text-center text-white font-bold'>Special Offers</span>
            </Link>
            
            <div className='flex flex-col gap-8 items-center mt-6'>
                <div className='flex flex-col gap-4 w-full'>
                    <div>
                        <AnimatedCounter target={price} />
                    </div>
                    <ul className="flex flex-row w-full gap-6">
                        <li className={styles.plan}>
                            <div className={styles.itemContent}>
                                <input type="radio" id="starter" name="plan" value="starter" className={styles.peer} checked={plan === "starter"} onChange={() => starterPlan()} />
                                <label htmlFor="starter" className={styles.label1}>                           
                                    <h4>Starter Flash</h4>
                                    <h5>€90</h5>
                                    <ul>
                                        <li>10 second slot</li>
                                        <li>1 week</li>
                                        <li>Static ad creation <br/>(for new customers)</li>
                                    </ul>
                                </label>
                            </div>
                        </li>
                        <li className={styles.plan}>
                            <div className={styles.itemContent}>
                                <input type="radio" id="community" name="plan" value="community" className={styles.peer} checked={plan === "community"} onChange={() => communityPlan()} />
                                <label htmlFor="community" className={styles.label2}>
                                    <h4>Community Builder</h4>
                                    <h5>€490</h5>
                                    <ul>
                                        <li>15 second slot</li>
                                        <li>4 week</li>
                                        <li>free refreshes</li>
                                    </ul>
                                </label>
                            </div>
                        </li>
                        <li className={styles.plan}>
                            <div className={styles.itemContent}>
                                <input type="radio" id="expansion" name="plan" value="expansion" className={styles.peer} checked={plan === "expansion"} onChange={() => expansionPlan()} />
                                <label htmlFor="expansion" className={styles.label3}>
                                    <h4>Expansion Plus</h4>
                                    <h5>€2020</h5>
                                    <ul>
                                        <li>30 second slot</li>
                                        <li>12 week</li>
                                        <li>free refreshes</li>
                                    </ul>
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center text-2xl font-medium'>Choose Your Ad Duration</h4>
                        <ul className="flex flex-wrap w-full gap-6">
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="10" name="adDuration" value="10" className={styles.peer} checked={adDuration === "10"} onChange={() => setAdDuration("10")} />
                                    <label htmlFor="10" className={styles.label}>                           
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">10 seconds</div>
                                            <div className="w-full">Lorem ipsum dolor sit amet aaaa aa</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="15" name="adDuration" value="15" className={styles.peer} checked={adDuration === "15"} onChange={() => setAdDuration("15")} />
                                    <label htmlFor="15" className={styles.label}>
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">15 seconds</div>
                                            <div className="w-full">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="30" name="adDuration" value="30" className={styles.peer} checked={adDuration === "30"} onChange={() => setAdDuration("30")} />
                                    <label htmlFor="30" className={styles.label}>
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">30 seconds</div>
                                            <div className="w-full">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center text-2xl font-medium'>Define Your Campaign Reach & Duration</h4>
                        <ul className="flex flex-wrap md:grid md:grid-cols-3 w-full gap-6">
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="1" name="campaignDuration" value="1" className={styles.peer} checked={campaignDuration === "1"} onChange={() => setCampaignDuration("1")} />
                                    <label htmlFor="1" className={styles.label}>                           
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">1 week</div>
                                            <div className="w-full">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="4" name="campaignDuration" value="4" className={styles.peer} checked={campaignDuration === "4"} onChange={() => setCampaignDuration("4")} />
                                    <label htmlFor="4" className={styles.label}>
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">4 weeks</div>
                                            <div className="w-full">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="12" name="campaignDuration" value="12" className={styles.peer} checked={campaignDuration === "12"} onChange={() => setCampaignDuration("12")} />
                                    <label htmlFor="12" className={styles.label}>
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">12 weeks</div>
                                            <div className="w-full">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center text-2xl font-medium'>Lets Design with us</h4>
                        <ul className="flex flex-wrap md:grid md:grid-cols-3 w-full gap-6">
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="noThanks" name="designWithUs" value="noThanks" className={styles.peer} checked={designWithUs === "noThanks"} onChange={() => setDesignWithUs("noThanks")} />
                                    <label htmlFor="noThanks" className={styles.label}>                       
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">No Thanks!</div>
                                            <div className="w-full">I have my design ready</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="static" name="designWithUs" value="static" className={styles.peer} checked={designWithUs === "static"} onChange={() => setDesignWithUs("static")} />
                                    <label htmlFor="static" className={styles.label}>                           
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">Static</div>
                                            <div className="w-full">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="animated" name="designWithUs" value="animated" className={styles.peer} checked={designWithUs === "animated"} onChange={() => setDesignWithUs("animated")} />
                                    <label htmlFor="animated" className={styles.label}>
                                        <div className="block">
                                            <div className="w-full text-lg font-semibold">Animated</div>
                                            <div className="w-full">Lorem ipsum dolor sit amet</div>
                                        </div>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
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
