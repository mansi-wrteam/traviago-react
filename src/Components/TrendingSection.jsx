import React from 'react'
import { SectionHeading } from '../functions';
import { trendingGrid } from '../constants';
import useWindowWidth from '../hooks/useWindowWidth';

const TrendingSection = () => {
    const isMobile = useWindowWidth() <= 1024;

    return (
        <section id="trending" className="bg-white pt-20 max-lg:pt-14">
            <div className="w-full max-w-[1320px] mx-auto max-xl:px-2.5">
                <SectionHeading
                    centered={!isMobile}
                    fullWidth={isMobile}
                    title="Top Destination"
                    subtitle="The City of Love, where romance, art, and fashion intertwine. Immerse yourself in the enchanting atmosphere of the Eiffel Tower, explore the Louvre's masterpieces, and indulge in world-class cuisine."
                />

                <div
                    className="mt-12 max-sm:mt-6 max-xl:mt-8 grid gap-[30px] max-sm:gap-3 max-xl:gap-5"
                >
                    <div
                        className="trending-grid mt-0"
                    >
                        {trendingGrid.map((g, i) => (
                            <div
                                key={i}
                                className={`relative overflow-hidden rounded-[24px] bg-hover-color ${g.class}`}
                            >
                                <div className='gradient-background' />
                                <img src={g.img} alt={g.name} className="w-full h-full object-cover block" />
                                <div className="absolute left-0 bottom-0 w-full px-6 py-5 max-lg:p-3 flex flex-col gap-2 z-[2]">
                                    <p className="m-0 text-[20px] leading-6 font-bold text-white max-sm:text-[15px]">{g.name}</p>
                                    <p className="m-0 inline-flex items-center justify-center gap-0.5 text-sm bg-white rounded-full text-primary h-[25px] w-[54px]">
                                        <i className="bx bx-star text-primary text-base"></i> {g.rating}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <button className="inline-flex items-center justify-center gap-1 px-4 py-2 text-primary bg-white border border-primary rounded-[24px] text-[20px] max-sm:text-base leading-[30px] mt-12 cursor-pointer hover:bg-primary hover:text-white transition-all">
                        All Destinations <i className="bx bx-right-arrow-alt"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default TrendingSection