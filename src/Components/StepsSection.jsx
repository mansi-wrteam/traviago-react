import React from 'react'
import { steps } from '../constants';

const StepsSection = () => {

    return (
        <section id="steps" className="bg-white py-20 max-lg:py-14">
            <div className="w-full max-w-[1320px] mx-auto max-xl:px-2.5">
                <div className="flex justify-between gap-[30px] max-sm:flex-col max-sm:gap-5 max-xl:gap-6">
                    <div className="w-1/2 max-sm:w-full">
                        <div className="flex flex-col max-w-[555px]">
                            <span className="block text-base leading-6 max-lg:text-[14px] max-lg:leading-[22px] text-muted font-medium">Hassle-Free</span>
                            <span className="block text-[40px] leading-[48px] font-bold text-nav-text max-sm:text-[30px] max-sm:leading-[38px]">
                                3 Simple Steps to Your Next Adventure
                            </span>
                        </div>
                        {steps.map((s, i) => (
                            <div key={i} className="flex mt-12 max-sm:mt-6 max-xl:mt-8 max-sm:items-start max-sm:h-auto">
                                <div className={`flex items-center justify-center w-[72px] h-[72px] max-sm:w-[56px] max-sm:h-[56px] text-[32px] max-sm:text-[28px] rounded-full text-white flex-shrink-0 ${s.color}`}>
                                    <i className={`bx ${s.icon}`}></i>
                                </div>
                                <div className="flex flex-col px-4 gap-2 max-sm:gap-1 max-sm:w-[calc(100%-92px)]">
                                    <span className="text-[20px] max-sm:text-base leading-6 font-bold text-nav-text">{s.label}</span>
                                    <span className="text-[20px] max-sm:text-sm leading-[30px] max-sm:leading-[22px] text-nav-text">{s.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-1/2 max-sm:w-full max-h-[549px]">
                        <img src="assets/Step-combine.png" alt="steps" className="w-full h-auto max-h-[549px] max-sm:w-full object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StepsSection