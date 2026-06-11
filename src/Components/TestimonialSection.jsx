import React, { useEffect, useState } from 'react'
import { testimonials } from "../constants"

const TestimonialSection = () => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            setActive(a => (a + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(t);
    }, []);

    const progress = ((active + 1) / testimonials.length) * 100;

    return (
        <section className="py-20 max-sm:py-[50px]">
            <div className="w-full max-w-[1320px] mx-auto max-xl:px-2.5 flex gap-[30px] max-lg:flex-col max-sm:flex-col max-sm:gap-7">
                <div className="flex flex-col gap-12 max-sm:gap-7 flex-1 min-w-0">
                    <span className="text-[40px] max-sm:text-[30px] leading-[48px] max-sm:leading-[38px] font-bold">
                        What our customers are <br className="hidden xl:inline" /> saying us?
                    </span>
                    <span className="text-base max-xl:text-[14px] text-muted font-medium">
                        Don't just take our word for it. See what our travelers have to say about their incredible journeys with us.
                    </span>
                    <div className="flex gap-12 max-sm:flex-wrap max-sm:gap-3 max-sm:justify-center">
                        {[{ val: "8.5M+", lbl: "Happy Customers" }, { val: "4.8 ★", lbl: "Overall Rating" }].map(s => (
                            <div key={s.lbl} className="bg-border-color p-4 rounded-[12px] min-w-[120px] flex flex-col gap-2 max-sm:flex-1 max-sm:text-center">
                                <span className="text-[28px] max-sm:text-[22px] leading-[34px] font-bold">{s.val}</span>
                                <span className="text-base leading-6 font-medium text-muted">{s.lbl}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 min-w-0 bg-warm p-10 max-sm:p-6 rounded-[30px] max-sm:rounded-[20px] flex flex-col justify-between">
                    {testimonials.map((t, i) => (
                        <div key={i} className={i === active ? "block" : "hidden"}>
                            <div className="flex items-center gap-[15px] mb-8 max-sm:mb-5 max-sm:gap-3 flex-wrap max-sm:flex-wrap">
                                <img src={t.img} alt={t.name} className="w-[72px] h-[72px] max-sm:w-[56px] max-sm:h-[56px] rounded-full" />
                                <div className="flex flex-col">
                                    <span className="text-base font-medium leading-6">{t.name}</span>
                                    <span className="text-sm leading-[17px] text-muted">{t.loc}</span>
                                </div>
                                <span className="ml-auto bg-primary text-white px-2 py-1 rounded-full text-sm">{t.rating}</span>
                            </div>
                            <p className="text-base leading-6 text-muted max-sm:text-sm max-sm:leading-[22px]">{t.review}</p>
                        </div>
                    ))}
                    <div className="flex items-center gap-[15px] mt-8">
                        <span className="font-medium">{String(active + 1).padStart(2, "0")}</span>
                        <div className="flex-1 h-1 bg-[#d7d1c6] rounded-full overflow-hidden">
                            <div className="h-full bg-primary transition-all duration-400" style={{ width: `${progress}%` }} />
                        </div>
                        <span className="font-medium">03</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection