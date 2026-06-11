import React, { useRef, useState } from 'react'
import useWindowWidth from '../hooks/useWindowWidth';
import { destinations } from '../constants';
import { ArrowBtn, Dots, SectionHeading } from '../functions';

const DestinationsSection = () => {
    const trackRef = useRef(null);
    const [idx, setIdx] = useState(0);
    const isMobile = useWindowWidth() <= 767;

    const getVisible = () => {
        const w = window.innerWidth;
        return w <= 767 ? 2 : w <= 1024 ? 5 : 6;
    };

    const maxIndex = Math.max(0, destinations.length - getVisible());

    function scrollTo(i) {
        const clamped = Math.min(Math.max(i, 0), maxIndex);
        setIdx(clamped);
        const el = trackRef.current;
        if (!el || !el.children[0]) return;
        const itemW = el.children[0].getBoundingClientRect().width;
        const gap = window.innerWidth <= 767 ? 16 : 48;
        el.scrollTo({ left: clamped * (itemW + gap), behavior: "smooth" });
    }

    const visibleCount = getVisible();
    const totalPages = Math.ceil(destinations.length / visibleCount);

    function handleScroll() {
        if (!isMobile || !trackRef.current) return;
        const el = trackRef.current;
        const itemW = el.children[0]?.getBoundingClientRect().width || 0;
        const gap = 16;
        const page = Math.round(el.scrollLeft / (visibleCount * (itemW + gap)));
        setIdx(page);
    }

    return (
        <section id="destinations" className="bg-warm -mt-20 pt-[121px] scroll-mt-[80px] flex min-h-[653px]">
            <div className="w-full max-w-[1320px] mx-auto max-xl:px-2.5">
                <SectionHeading
                    title="Trending Destinations"
                    subtitle="Immerse yourself in the vibrant culture of Trending Destination. Discover hidden gems, delectable cuisine, and unforgettable experiences"
                >
                    <div className="flex gap-4 items-center max-sm:hidden">
                        <ArrowBtn onClick={() => scrollTo(idx - 1)} disabled={idx === 0} dir="left" />
                        <ArrowBtn onClick={() => scrollTo(idx + 1)} disabled={idx >= maxIndex} dir="right" />
                    </div>
                </SectionHeading>

                <div className="overflow-hidden mt-12 max-sm:mt-6 max-xl:mt-8">
                    <div
                        ref={trackRef}
                        onScroll={handleScroll}
                        className="scroll-width-none flex gap-12 max-xl:gap-4 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-2"
                    >
                        {destinations.map((d, i) => (
                            <div key={i} className="snap-start max-xl:flex-[0_0_190px]">
                                <div className="relative w-[180px] rounded-[8100px] overflow-hidden cursor-pointer group">
                                    <img
                                        src={d.img}
                                        alt={d.name}
                                        className="w-full h-[260px] object-cover block rounded-[12px] transition-transform duration-200 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-black/35 transition-all duration-200 backdrop-blur-[4px] rounded-[12px] pointer-events-none">
                                        <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white text-white text-[32px] rotate-[-50deg]">→</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center flex-col pt-4">
                                    <span className="text-[20px] leading-6 font-bold">{d.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {isMobile && (
                    <Dots total={totalPages} active={idx} onChange={(p) => {
                        const el = trackRef.current;
                        if (!el || !el.children[0]) return;
                        const itemW = el.children[0].getBoundingClientRect().width;
                        el.scrollTo({ left: p * visibleCount * (itemW + 16), behavior: "smooth" });
                        setIdx(p);
                    }} />
                )}
            </div>
        </section>
    );
}

export default DestinationsSection