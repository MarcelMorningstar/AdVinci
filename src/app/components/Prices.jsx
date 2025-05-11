'use client'

import React, { useState, useEffect } from 'react'
import { useMotionValue, useTransform, animate } from "framer-motion";

export default function Prices() {
    const [price, setPrice] = useState(0);
    const [adDuration, setAdDuration] = useState("16");
    const [campaignDuration, setCampaignDuration] = useState("4");
    const [adType, setAdType] = useState("static");
    const [designWithUs, setDesignWithUs] = useState("noThanks");
    const [swapOption, setSwapOption] = useState("no");
    const [call, setCall] = useState("no2");
    const [CampaignPlan, setCampaignPlan] = useState("basic");
    const [analytics, setAnalytics] = useState("no3");

    useEffect(() => {
        let p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0, p6 = 0, p7 = 0;

        switch (adDuration) {
            case "10":
                p1 = 20
                break;
            case "16":
                p1 = 40
                break;
            case "30":
                p1 = 60
                break;
            default:
                break;
        }

        switch (campaignDuration) {
            case "1":
                p2 = 70
                break;
            case "4":
                p2 = 280
                break;
            case "12":
                p2 = 900
                break;
            default:
                break;
        }

        switch (adType) {
            case "static":
                p3 = 0
                break;
            case "animated":
                p3 = 240
                break;
            default:
                break;
        }

        switch (designWithUs) {
            case "noThanks":
                p4 = 0
                break;
            case "static2":
                p4 = 75
                break;
            case "animated2":
                p4 = 80
                break;
            default:
                break;
        }

        switch (swapOption) {
            case "yes":
                p5 = 20
                break;
            case "no":
                p5 = 0
                break;
            default:
                break;
        }

        switch (call) {
            case "yes2":
                p5 = 60
                break;
            case "no2":
                p5 = 0
                break;
            default:
                break;
        }
        
        switch (CampaignPlan) {
            case "plus":
                p5 = 350
                break;
            case "basic":
                p5 = 0
                break;
            default:
                break;
        }

        console.log(p1, p2, p3, p4, p5, p6, p7)
        setPrice(p1 + p2 + p3 + p4 + p5 + p6 + p7)
    }, [adDuration, campaignDuration, adType, designWithUs, swapOption, call, CampaignPlan, analytics])

    return (
        <div className='relative bg-neutral-200'>
            <div className='fixed w-full left-1/2 transform -translate-x-1/2 pt-16 pb-2.5 bg-neutral-200 shadow-md'>
                <h2 className='text-center text-3xl sm:text-4xl'>San Severino Marche</h2>
                <div className='flex flex-row gap-2 justify-center'>
                    <AnimatedCounter target={price} />
                    {
                        analytics === "yes3" && (
                            <h3 className="text-4xl sm:text-5xl text-center font-medium">+ {50}€/month</h3>
                        )
                    }
                </div>
            </div>
            <div className='flex flex-col items-center pt-44 pb-12 gap-4'>
                
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center'>Slot Duration</h4>
            
                        <ul className="grid w-full gap-6 md:grid-cols-3">
                            <li>
                                <input type="radio" id="10" name="adDuration" value="10" className="hidden peer" checked={adDuration === "10"} onChange={() => setAdDuration("10")} />
                                <label htmlFor="10" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">                           
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">10 seconds</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="16" name="adDuration" value="16" className="hidden peer" checked={adDuration === "16"} onChange={() => setAdDuration("16")} />
                                <label htmlFor="16" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">16 seconds</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="30" name="adDuration" value="30" className="hidden peer" checked={adDuration === "30"} onChange={() => setAdDuration("30")} />
                                <label htmlFor="30" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">30 seconds</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center'>Campaign Duration</h4>
                        <ul className="grid w-full gap-6 md:grid-cols-3">
                            <li>
                                <input type="radio" id="1" name="campaignDuration" value="1" className="hidden peer" checked={campaignDuration === "1"} onChange={() => setCampaignDuration("1")} />
                                <label htmlFor="1" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">                           
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">1 week</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="4" name="campaignDuration" value="4" className="hidden peer" checked={campaignDuration === "4"} onChange={() => setCampaignDuration("4")} />
                                <label htmlFor="4" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">4 weeks</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="12" name="campaignDuration" value="12" className="hidden peer" checked={campaignDuration === "12"} onChange={() => setCampaignDuration("12")} />
                                <label htmlFor="12" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">12 weeks</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center'>Ad Type</h4>
                        <ul className="grid w-full gap-6 md:grid-cols-2">
                            <li>
                                <input type="radio" id="static" name="adType" value="static" className="hidden peer" checked={adType === "static"} onChange={() => setAdType("static")} />
                                <label htmlFor="static" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">                           
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Static Advertising</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="animated" name="adType" value="animated" className="hidden peer" checked={adType === "animated"} onChange={() => setAdType("animated")} />
                                <label htmlFor="animated" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Animated Creative</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center'>Lets Design with us</h4>
                        <ul className="grid w-full gap-6 md:grid-cols-3">
                            <li>
                                <input type="radio" id="noThanks" name="designWithUs" value="noThanks" className="hidden peer" checked={designWithUs === "noThanks"} onChange={() => setDesignWithUs("noThanks")} />
                                <label htmlFor="noThanks" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">                       
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">No Thanks!</div>
                                        <div className="w-full">I have my design ready</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="static2" name="designWithUs" value="static2" className="hidden peer" checked={designWithUs === "static2"} onChange={() => setDesignWithUs("static2")} />
                                <label htmlFor="static2" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">                           
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Static</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="animated2" name="designWithUs" value="animated2" className="hidden peer" checked={designWithUs === "animated2"} onChange={() => setDesignWithUs("animated2")} />
                                <label htmlFor="animated2" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Animated</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center'>24h Rapid Swap</h4>
                        <ul className="grid w-full gap-6 md:grid-cols-2">
                            <li>
                                <input type="radio" id="yes" name="swapOption" value="yes" className="hidden peer" checked={swapOption === "yes"} onChange={() => setSwapOption("yes")} />
                                <label htmlFor="yes" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">                           
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Yes</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="no" name="swapOption" value="no" className="hidden peer" checked={swapOption === "no"} onChange={() => setSwapOption("no")} />
                                <label htmlFor="no" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">No</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center'>1h strategy Call</h4>
                        <ul className="grid w-full gap-6 md:grid-cols-2">
                            <li>
                                <input type="radio" id="yes2" name="call" value="yes2" className="hidden peer" checked={call === "yes2"} onChange={() => setCall("yes2")} />
                                <label htmlFor="yes2" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">                           
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Yes</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="no2" name="call" value="no2" className="hidden peer" checked={call === "no2"} onChange={() => setCall("no2")}  />
                                <label htmlFor="no2" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">No</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center'>Campaign plan</h4>
                        <ul className="grid w-full gap-6 md:grid-cols-2">
                            <li>
                                <input type="radio" id="basic" name="CampaignPlan" value="basic" className="hidden peer" checked={CampaignPlan === "basic"} onChange={() => setCampaignPlan("basic")} />
                                <label htmlFor="basic" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">                           
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Basic</div>
                                        <div className="w-full">Free of charge</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="plus" name="CampaignPlan" value="plus" className="hidden peer" checked={CampaignPlan === "plus"} onChange={() => setCampaignPlan("plus")} />
                                <label htmlFor="plus" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Expansion Plus</div>
                                        <div className="w-full">Expansion Plus</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
            
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-center'>AI audience analytics</h4>
                        <ul className="grid w-full gap-6 md:grid-cols-2">
                            <li>
                                <input type="radio" id="yes3" name="analytics" value="yes3" className="hidden peer" checked={analytics === "yes3"} onChange={() => setAnalytics("yes3")} />
                                <label htmlFor="yes3" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">                           
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">Yes</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <input type="radio" id="no3" name="analytics" value="no3" className="hidden peer" checked={analytics === "no3"} onChange={() => setAnalytics("no3")} />
                                <label htmlFor="no3" className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-[var(--primary2)] peer-checked:text-[var(--primary2)] peer-checked:shadow-lg hover:text-gray-600 hover:bg-gray-100">
                                    <div className="block">
                                        <div className="w-full text-lg font-semibold">No</div>
                                        <div className="w-full">Lorem ipsum dolor sit amet</div>
                                    </div>
                                </label>
                            </li>
                        </ul>
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
    <h3 className="text-4xl sm:text-5xl text-center font-medium">
        €{display}
    </h3>
  );
}
