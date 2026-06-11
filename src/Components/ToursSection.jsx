import React, { useRef, useState } from 'react'
import useWindowWidth from '../hooks/useWindowWidth';
import { ArrowBtn, Dots, SectionHeading } from '../functions';
import { tours } from '../constants';

const ToursSection = () => {
    const sliderRef = useRef(null);
    const [favs, setFavs] = useState([]);
    const [dotPage, setDotPage] = useState(0);
    const isMobile = useWindowWidth() <= 767;

    const getVisible = () => (window.innerWidth <= 767 ? 1 : window.innerWidth <= 1024 ? 2 : 3);
    const totalPages = Math.ceil(tours.length / getVisible());

    function scrollBy(dir) {
        sliderRef.current?.scrollBy({ left: dir * (420 + 30), behavior: "smooth" });
    }

    function handleScroll() {
        if (!isMobile || !sliderRef.current) return;
        const cardW = (sliderRef.current.children[0]?.getBoundingClientRect().width || 0) + 24;
        const page = Math.round(sliderRef.current.scrollLeft / (cardW * getVisible() + 24));
        setDotPage(page);
    }

    function scrollToDot(p) {
        const el = sliderRef.current;
        if (!el || !el.children[0]) return;
        const cardW = el.children[0].getBoundingClientRect().width + 24;
        el.scrollTo({ left: p * getVisible() * cardW + p * 5.5, behavior: "smooth" });
        setDotPage(p);
    }

    return (
        <section id="tours" className="bg-warm py-20 max-lg:py-14 scroll-mt-[80px] flex min-h-[653px]">
            <div className="w-full max-w-[1320px] mx-auto max-xl:px-2.5">
                <SectionHeading
                    title="Popular Tour Packages"
                    subtitle="Immerse yourself in diverse cultures, breathtaking landscapes, and unforgettable experiences. Your global adventure awaits."
                >
                    <div className="flex gap-4 items-center max-sm:hidden">
                        <ArrowBtn onClick={() => scrollBy(-1)} dir="left" />
                        <ArrowBtn onClick={() => scrollBy(1)} dir="right" />
                    </div>
                </SectionHeading>

                <div
                    ref={sliderRef}
                    onScroll={handleScroll}
                    className="scroll-width-none flex gap-[30px] overflow-x-auto scroll-smooth scrollbar-none mt-12 max-sm:mt-6 max-xl:mt-8"
                >
                    {tours.map((t, i) => (
                        <div key={i} className="max-w-[420px] bg-white rounded-[22px] p-4 overflow-hidden flex-shrink-0 w-full hover:shadow-[0_7px_28px_2px_rgba(150,150,161,0.14)] transition-shadow">
                            <div className="relative">
                                <img src={t.img} alt={t.title} className="w-full h-[295px] object-cover rounded-[14px]" />
                                <span
                                    onClick={() => setFavs(f => f.includes(i) ? f.filter(x => x !== i) : [...f, i])}
                                    className="absolute top-[15px] right-[15px] w-[30px] h-[30px] bg-white rounded-full grid place-items-center cursor-pointer"
                                >
                                    <i className={`bx ${favs.includes(i) ? "bxs-heart text-red" : "bx-heart"}`}></i>
                                </span>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-2xl max-sm:text-[20px] leading-[29px] font-bold text-dark">{t.title}</span>
                                <span className="text-base leading-[22px] font-medium text-muted">
                                    <i className="bx bx-star"></i> {t.rating}
                                </span>
                            </div>
                            <span className="text-sm leading-[17px] text-muted">{t.duration}</span>
                            <div className="mt-3 py-3 border-t border-b border-border-color grid grid-cols-4 gap-2">
                                {[
                                    { icon: "bxs-plane-alt", label: `${t.flights} Flights` },
                                    { icon: "bxs-building-house", label: `${t.hotels} Hotel` },
                                    { icon: "bxs-car", label: `${t.transfers} Transfers` },
                                    { icon: "bx-cycling", label: `${t.activities} Activities` },
                                ].map(f => (
                                    <div key={f.icon} className="text-center flex flex-col">
                                        <i className={`bx ${f.icon} text-primary text-[18px] block mb-2`}></i>
                                        <span className="text-sm leading-6 text-sub-muted">{f.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <div className="flex items-center gap-1">
                                    <span className="text-base leading-[19px] font-bold text-dark">{t.price}</span>
                                    <span className="text-sm leading-[17px] text-muted">/ Per person</span>
                                </div>
                                <span className="w-6 h-6 rounded-full border border-sub-muted bg-white grid place-items-center cursor-pointer hover:bg-primary hover:border-primary group transition-all">
                                    <i className="bx bx-right-arrow-alt text-[16px] text-sub-muted group-hover:text-white"></i>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {isMobile && <Dots total={totalPages} active={dotPage} onChange={scrollToDot} />}
            </div>
        </section>
    );
}

export default ToursSection