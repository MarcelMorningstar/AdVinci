"use client"

import React from 'react'
import FAQ from '../components/FAQ'

const FAQData = [
  {
    "id": 1,
    "question": "Why is digital advertising better than traditional advertising for my business?",
    "answer": "Digital advertising allows precise local targeting, instant visibility, and detailed performance tracking, often at lower costs compared to traditional methods."
  },
  {
    "id": 2,
    "question": "How exactly does digital advertising benefit small businesses?",
    "answer": "It helps you precisely target local customers, increases foot traffic to your shop, provides measurable results, and improves customer engagement compared to traditional methods."
  },
  {
    "id": 3,
    "question": "What kind of businesses does AdVinci work with?",
    "answer": "We focus on small and medium businesses, helping you effectively reach your community even if you’re completely new to digital advertising."
  },
  {
    "id": 4,
    "question": "Can you help us create content if we have none ready?",
    "answer": "Absolutely! Our experts will guide you from concept to completion, creating attractive ads tailored to your business’s unique strengths."
  },
  {
    "id": 5,
    "question": "How quickly can AdVinci set up our advertising campaign?",
    "answer": "We typically launch your customized digital campaign within 7–10 days from our initial consultation, allowing quick visibility and results."
  },
  {
    "id": 6,
    "question": "What results can we expect from digital advertising with AdVinci?",
    "answer": "You’ll typically see increased customer awareness, more visits to your business, and improved sales opportunities, all easily measured through digital analytics."
  },
  {
    "id": 7,
    "question": "Do we need a website to advertise digitally with AdVinci?",
    "answer": "Many clients notice increased visibility immediately after launching their campaign, with measurable improvements typically within weeks."
  },
  {
    "id": 8,
    "question": "Do we need a website to advertise digitally with AdVinci?",
    "answer": "Yes, digital advertising is highly adaptable. You can easily adjust targeting, budgets, or messaging at any time based on real-time feedback."
  },
  {
    "id": 9,
    "question": "Can we adjust our advertising campaign after it’s launched?",
    "answer": "Yes, digital advertising is highly adaptable. You can easily adjust targeting, budgets, or messaging at any time based on real-time feedback."
  },
  {
    "id": 10,
    "question": "Is digital advertising suitable for seasonal or event-based promotions?",
    "answer": "Perfectly! Digital advertising excels at quickly promoting seasonal offers, events, or limited-time discounts to attract immediate local attention."
  },
  {
    "id": 11,
    "question": "How do we measure if our advertising campaign is successful?",
    "answer": "AdVinci provides detailed visibility reports showing exactly how many local people viewed your advertisements and interacted with them. However, the ultimate measure of success will be clear to you directly—more customers walking through your door, increased inquiries, and a noticeable boost in sales. We aim for tangible results that you can truly feel in your business, beyond just statistics on a report."
  }
]

export default function Page() {
  const handelClick = (id: number) => {
    const details = document.getElementsByTagName("details");

    for (let i = 0; i < details.length; i++) {
      let element = details[i];
      let Elementid = Number(element.getAttribute("data-id"));

      if (Elementid !== id && element.hasAttribute("open")) {
        element.removeAttribute("open");
      }
    }
  };

  return (
    <section className='flex flex-col items-center px-8 sm:px-16 py-36'>
      <div className='flex flex-col justify-center items-center gap-2 mb-4'>
        <h1 className='text-center text-3xl sm:text-5xl font-bold'>Frequently Asked questions</h1>
        <p className='text-center w-2/3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis nobis temporibus, officiis quam quas eos natus autem quia.</p>
      </div>

      <div className='w-full lg:w-3/4 xl:w-1/2'>
        {
          FAQData.map((item) => (
            <FAQ 
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              handelClick={() => handelClick(item.id)}
            />
          ))
        }
      </div>
    </section>
  )
}
