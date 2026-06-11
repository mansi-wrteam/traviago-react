import React, { useState } from 'react'
import { ArrowBtn, SectionHeading } from '../functions';
import { blogs } from '../constants';

const BlogSection = () => {
    const [expanded, setExpanded] = useState([]);

    function toggle(i) {
        setExpanded(e => e.includes(i) ? e.filter(x => x !== i) : [...e, i]);
    }

    return (
        <section className="bg-warm py-20 max-lg:py-[50px]">
            <div className="w-full max-w-[1320px] mx-auto max-xl:px-2.5">
                <SectionHeading title="The Travel Blog" subtitle="Get inspired, informed, and entertained with our travel stories, tips, and guides.">
                    <div className="flex gap-4 items-center flex-1 justify-end max-sm:justify-start max-sm:hidden">
                        <ArrowBtn dir="left" />
                        <ArrowBtn dir="right" />
                    </div>
                </SectionHeading>

                <div className="grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-[30px] mt-12 max-sm:mt-6 max-xl:mt-8">
                    {blogs.map((b, i) => (
                        <div key={i} className="w-full bg-white rounded-[22px] p-4 flex flex-col gap-4 overflow-hidden hover:shadow-[0_7px_28px_2px_rgba(150,150,161,0.14)] max-sm:max-w-full max-sm:gap-0 transition-shadow">
                            <div>
                                <img src={b.img} alt="blog" className="w-full h-[200px] object-cover rounded-[14px]" />
                            </div>
                            <div className="flex flex-col">
                                <div className="mt-4">
                                    <span className="text-[20px] max-sm:text-[18px] leading-6 font-bold text-dark hover:text-primary cursor-pointer transition-colors">{b.title}</span>
                                </div>
                                <span
                                    className={`text-base leading-6 text-muted font-medium mt-4 ${expanded.includes(i) ? "block" : "[-webkit-line-clamp:2] [-webkit-box-orient:vertical] [display:-webkit-box] overflow-hidden"}`}
                                >
                                    {b.text}
                                </span>
                                <button
                                    onClick={() => toggle(i)}
                                    className="border-none bg-none p-0 mt-10 max-sm:mt-7 text-primary cursor-pointer text-[20px] max-sm:text-base leading-[30px] self-start hover:underline"
                                >
                                    {expanded.includes(i) ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center">
                    <button className="inline-flex items-center justify-center gap-1 px-4 py-2 text-primary bg-white border border-primary rounded-3xl text-[20px] max-sm:text-base leading-[30px] mt-12 cursor-pointer hover:bg-primary hover:text-white transition-all">
                        View All Blogs <i className="bx bx-right-arrow-alt"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BlogSection