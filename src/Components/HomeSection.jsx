import React, { useCallback, useState } from 'react'
import useWindowWidth from '../hooks/useWindowWidth';
import { slides } from '../constants';

const HomeSection = () => {
    const [current, setCurrent] = useState(0);
    const isMobile = useWindowWidth() <= 767;

    const go = useCallback((n) => {
        setCurrent((n + slides.length) % slides.length);
    }, []);

    return (
        <section
            id="home"
            className="relative w-full min-h-screen max-sm:min-h-0 max-sm:[aspect-ratio:1/1.85] -mt-[70px] pt-[70px] overflow-hidden"
        >
            {slides.map((s, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ${i === current ? "opacity-100" : "opacity-0"}`}
                    style={{ animation: i === current ? "fade 1.5s" : undefined }}
                >
                    <img src={s.bgImage} alt="" className="absolute inset-0 w-full h-full object-cover object-center max-sm:object-top" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(32,35,38,0.35)] to-transparent opacity-100" style={{ background: "linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),linear-gradient(180deg,rgba(32,35,38,0.35) 9.63%,rgba(32,35,38,0) 38.5%)" }} />
                </div>
            ))}

            <div className="absolute flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-[1320px] pointer-events-none px-4 text-center">
                <div className="text-white text-[20px] mb-[24px] leading-6 max-xl:text-[24px] max-sm:text-[16px] max-sm:leading-5 max-sm:px-7 max-sm:mb-3 opacity-76">
                    Seamless Booking: 15,000+ Multi-Day Adventures Await
                </div>
                <div className="text-white text-[70px] leading-[78px] max-xl:text-[58px] max-xl:leading-[66px] max-xl:px-12 max-sm:text-[28px] max-sm:leading-[34px] max-sm:px-0">
                    Await Your Exploration with Tailored Tours &amp; Packages
                </div>
            </div>

            <button
                onClick={() => go(current - 1)}
                className="hidden sm:flex cursor-pointer absolute top-1/2 -mt-[22px] left-2 xl:left-12 w-[58px] h-[58px] max-sm:w-[38px] max-sm:h-[38px] items-center justify-center text-white text-[41px] max-sm:text-[24px] rounded-full border-[1.89px] border-white hover:bg-black/80 transition-all duration-200 z-10"
            >
                <i className="bx bx-left-arrow-alt"></i>
            </button>
            <button
                onClick={() => go(current + 1)}
                className="hidden sm:flex cursor-pointer absolute top-1/2 -mt-[22px] right-2 xl:right-2 w-[58px] h-[58px] max-sm:w-[38px] max-sm:h-[38px] items-center justify-center text-white text-[41px] max-sm:text-[24px] rounded-full border-[1.89px] border-white hover:bg-black/80 transition-all duration-200 z-10"
            >
                <i className="bx bx-right-arrow-alt"></i>
            </button>

            {isMobile && (
                <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center items-center gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all duration-200 flex-shrink-0 border border-white/80
                  ${i === current ? "bg-white w-[22px] rounded-[4px]" : "bg-white/50 w-2"}`}
                        />
                    ))}
                </div>
            )}

            <style>{`@keyframes fade { from { opacity:.4 } to { opacity:1 } }`}</style>
        </section>
    );
}

export default HomeSection