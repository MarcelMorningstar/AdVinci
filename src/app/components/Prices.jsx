'use client'

import React, { useState, useEffect } from 'react'
import { useMotionValue, animate } from "framer-motion";
import styles from "../styles/Pricing.module.scss"

export default function Prices() {
    const [price, setPrice] = useState(0);
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

    return (
        <div className='w-3/4 xl:w-2/3 flex flex-col items-center gap-6 pt-24 pb-12'>
            <div className='flex flex-col items-center gap-1'>
                <h2 className='text-center text-4xl'>San Severino Marche</h2>
                <p className='text-center text-base max-w-[640px] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ratione, suscipit officia accusantium qui cupiditate optio ipsa ducimus, enim consectetur eveniet explicabo doloribus cumque praesentium atque reprehenderit. Vero, tenetur architecto?</p>
                <button 
                    type="button" 
                    className={`
                    mt-2 px-9 py-3 rounded-full
                    flex items-center gap-2 
                    text-gray-600
                    font-bold
                    shadow-[-5px_-5px_10px_rgba(242,_242,_242,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
                    
                    transition-all

                    hover:shadow-[-1px_-1px_5px_rgba(242,_242,_242,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(242,_242,_242,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
                    hover:text-[var(--primary2)]
                `}>
                    Offers
                </button>
            </div>
            
            <div className='flex flex-col gap-3 items-center'>
                <div>
                    <AnimatedCounter target={price} />
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center text-2xl font-medium'>Slot Duration</h4>
                        <ul className="flex flex-wrap w-full gap-6">
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="10" name="adDuration" value="10" className={styles.peer} checked={adDuration === "10"} onChange={() => setAdDuration("10")} />
                                    <label htmlFor="10" className={styles.label1}>                           
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
                                    <label htmlFor="15" className={styles.label2}>
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
                                    <label htmlFor="30" className={styles.label3}>
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
                        <h4 className='text-center text-2xl font-medium'>Campaign Duration</h4>
                        <ul className="flex flex-wrap md:grid md:grid-cols-3 w-full gap-6">
                            <li className={styles.item}>
                                <div className={styles.itemContent}>
                                    <input type="radio" id="1" name="campaignDuration" value="1" className={styles.peer} checked={campaignDuration === "1"} onChange={() => setCampaignDuration("1")} />
                                    <label htmlFor="1" className={styles.label1}>                           
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
                                    <label htmlFor="4" className={styles.label2}>
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
                                    <label htmlFor="12" className={styles.label3}>
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
                                    <label htmlFor="noThanks" className={styles.label1}>                       
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
                                    <label htmlFor="static" className={styles.label2}>                           
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
                                    <label htmlFor="animated" className={styles.label3}>
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
