"use client"

import React from 'react'
import {useTranslations} from 'next-intl';
import FAQ from '../../components/FAQ'
import Footer from '../../components/Footer'

export default function Page() {
  const t = useTranslations('faq');

  const FAQData = [
    {
      "id": 1,
      "question": t("question1"),
      "answer": t("answer1")
    },
    {
      "id": 2,
      "question": t("question2"),
      "answer": t("answer2")
    },
    {
      "id": 3,
      "question": t("question3"),
      "answer": t("answer3")
    },
    {
      "id": 4,
      "question": t("question4"),
      "answer": t("answer4")
    },
    {
      "id": 5,
      "question": t("question5"),
      "answer": t("answer5")
    },
    {
      "id": 6,
      "question": t("question6"),
      "answer": t("answer6")
    },
    {
      "id": 7,
      "question": t("question7"),
      "answer": t("answer7")
    },
    {
      "id": 8,
      "question": t("question8"),
      "answer": t("answer8")
    },
    {
      "id": 9,
      "question": t("question9"),
      "answer": t("answer9")
    },
    {
      "id": 10,
      "question": t("question10"),
      "answer": t("answer10")
    },
    {
      "id": 11,
      "question": t("question11"),
      "answer": t("answer11")
    }
  ]

  const handelClick = (id: number) => {
    const details = document.getElementsByTagName("details");

    for (let i = 0; i < details.length; i++) {
      const element = details[i];
      const Elementid = Number(element.getAttribute("data-id"));

      if (Elementid !== id && element.hasAttribute("open")) {
        element.removeAttribute("open");
      }
    }
  };

  return (
    <>
      <section className='flex flex-col items-center px-8 sm:px-16 pt-32 pb-12 bg-neutral-200'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h2 className='text-center text-3xl sm:text-5xl font-bold'>{ t("title") }</h2>
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
      
      <Footer color="#1a1a1a" />
    </>
  )
}
