import React from 'react'
import { SectionHeading } from '../functions';
import { trendingGrid } from '../constants';
import useWindowWidth from '../hooks/useWindowWidth';

const TrendingSection = () => {
    const isMobile = useWindowWidth() <= 1024;

    const gridClass = {
        small: "h-[307px]",
        tall: "h-[644px] row-span-2",
        wide: "col-span-2 h-[307px]",
        sm2: "h-[307px]",
        sm3: "h-[307px]",
        sm4: "h-[307px]",
    };

    return (
        <section id="trending" className="bg-white pt-20 max-lg:pt-14">
            <div className="w-full max-w-[1320px] mx-auto max-xl:px-[10px]">
                <SectionHeading
                    centered={!isMobile}
                    fullWidth={isMobile}
                    title="Top Destination"
                    subtitle="The City of Love, where romance, art, and fashion intertwine. Immerse yourself in the enchanting atmosphere of the Eiffel Tower, explore the Louvre's masterpieces, and indulge in world-class cuisine."
                />

                <div
                    className="mt-12 max-sm:mt-7 grid gap-[30px] max-sm:gap-3 max-xl:gap-5"
                    style={{ gridTemplateColumns: "2fr 2.7fr 1.5fr 1.8fr" }}
                >
                    <style>{`
                        @media (max-width:1024px) {
                        .trending-grid { grid-template-columns: repeat(2,1fr) !important; }
                        .trending-grid > div { height:280px !important; grid-column:auto !important; grid-row:auto !important; }
                        }
                        @media (max-width:767px) {
                        .trending-grid { grid-template-columns: 1fr 1fr !important; gap:12px !important; }
                        .trending-grid > div { height:180px !important; grid-column:auto !important; grid-row:auto !important; }
                        }
                    `}</style>
                    <div
                        className="trending-grid mt-0"
                        style={{ display: "grid", gridTemplateColumns: "2fr 2.7fr 1.5fr 1.8fr", gap: "30px", gridColumn: "1/-1" }}
                    >
                        {trendingGrid.map((g, i) => (
                            <div
                                key={i}
                                className={`relative overflow-hidden rounded-[24px] bg-hover-color ${gridClass[g.cls]}`}
                            >
                                <div className='gradient-background' />
                                <img src={g.img} alt={g.name} className="w-full h-full object-cover block" />
                                <div className="absolute left-0 bottom-0 w-full px-6 py-5 max-lg:p-3 flex flex-col gap-2 z-[2]">
                                    <p className="m-0 text-[20px] leading-6 font-bold text-white max-sm:text-[15px]">{g.name}</p>
                                    <p className="m-0 inline-flex items-center justify-center gap-[2px] text-sm bg-white rounded-full text-primary h-[25px] w-[54px]">
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