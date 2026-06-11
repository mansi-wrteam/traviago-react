import React from 'react'
import { search } from '../constants';

const SearchSection = () => {
    return (
        <section className="relative z-50 -mt-20 max-sm:-mt-10 py-10 max-sm:py-4 px-5 max-sm:px-4 flex justify-center">
            <div className="flex justify-center items-center p-4 max-sm:p-2 w-[824px] max-w-full rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] gap-0 flex-wrap max-sm:flex-nowrap max-sm:gap-1 max-sm:w-auto">
                {search.map(item => (
                    <div key={item.label} className="flex gap-[10px] h-[50px] w-[224px] max-sm:w-auto max-sm:min-w-0 max-sm:justify-center max-sm:h-[40px] items-center">
                        <div className="flex items-center justify-center p-[13px] text-2xl max-sm:text-[20px] border border-border-color rounded-full max-sm:w-[40px] max-sm:h-[40px] max-sm:p-0">
                            <i className={`bx ${item.icon}`}></i>
                        </div>
                        <div className="flex flex-col justify-center gap-[2px] max-sm:hidden">
                            <span className="text-base leading-[19px] font-bold text-nav-text">{item.label}</span>
                            <span className="text-sm leading-[17px] text-muted">{item.sub}</span>
                        </div>
                    </div>
                ))}
                <button className="flex items-center justify-center gap-1 px-4 h-[46px] max-sm:h-[40px] min-w-[119px] max-sm:min-w-0 max-sm:px-4 text-xl max-sm:text-sm font-normal text-white bg-primary border-none rounded-[24px] cursor-pointer transition-colors">
                    <i className="bx bx-search-alt"></i>
                    <span className="max-sm:hidden">Search</span>
                </button>
            </div>
        </section>
    );
}

export default SearchSection;