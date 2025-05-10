import React from 'react'
import {useTranslations} from 'next-intl';

export default function Page() {
  const t = useTranslations('terms');
  const text1 = t("text1").replace(/\n/g, '<br />');
  const text2 = t("text2").replace(/\n/g, '<br />');
  const text3 = t("text3").replace(/\n/g, '<br />');
  const text4 = t("text4").replace(/\n/g, '<br />');
  const text5 = t("text5").replace(/\n/g, '<br />');
  const text6 = t("text6").replace(/\n/g, '<br />');

  return (
    <section className='flex justify-center pt-32 pb-12 bg-neutral-200'>
        <div className='w-[90vw] sm:w-[70vw]'>
            <h1 className="text-4xl font-bold">
                { t("title") }
            </h1>

            <div className="my-4 flex flex-col gap-2.5">
              <div>
                <h4 className='text-xl font-bold'>{ t("subTitle1") }</h4>
                <p dangerouslySetInnerHTML={{ __html: text1 }} className="text-lg" />
              </div>
              <div>
                <h4 className='text-xl font-bold'>{ t("subTitle2") }</h4>
                <p dangerouslySetInnerHTML={{ __html: text2 }} className="text-lg" />
              </div>
              <div>
                <h4 className='text-xl font-bold'>{ t("subTitle3") }</h4>
                <p dangerouslySetInnerHTML={{ __html: text3 }} className="text-lg" />
              </div>
              <div>
                <h4 className='text-xl font-bold'>{ t("subTitle4") }</h4>
                <p dangerouslySetInnerHTML={{ __html: text4 }} className="text-lg" />
              </div>
              <div>
                <h4 className='text-xl font-bold'>{ t("subTitle5") }</h4>
                <p dangerouslySetInnerHTML={{ __html: text5 }} className="text-lg" />
              </div>
              <div>
                <h4 className='text-xl font-bold'>{ t("subTitle6") }</h4>
                <p dangerouslySetInnerHTML={{ __html: text6 }} className="text-lg" />
              </div>
            </div>
        </div>
    </section>
  )
}
