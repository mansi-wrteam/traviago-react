import React, { useState } from 'react'
import { footerColumns } from '../constants';

const Footer = () => {
    const [email, setEmail] = useState("");

    return (
        <footer id="footer" className="bg-dark text-white max-sm:pt-5">
            <div className="w-full max-w-[1320px] mx-auto max-xl:px-[10px]">
                <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-[30px] max-sm:gap-[22px]">
                    <div className="py-12 max-sm:py-[14px]">
                        <div className="flex items-center gap-[10px] mb-8">
                            <img src="assets/Logo.png" alt="logo" className=" object-contain" />
                        </div>
                        <span className="text-base leading-6 opacity-75 max-sm:text-sm max-sm:leading-[22px]">
                            We're passionate travel experts dedicated to curating unforgettable journeys. With years of experience, we've perfected the art of crafting tailor-made itineraries that cater to every dream.
                        </span>
                        <div className="flex mt-6 gap-6 max-sm:gap-5">
                            {[
                                { icon: "bxl-facebook-circle", href: "https://www.facebook.com/wrteam.in/" },
                                { icon: "bxl-instagram-alt", href: "https://www.instagram.com/wrteam.in/" },
                                { icon: "bxl-linkedin-square", href: "https://www.linkedin.com/company/wrteam/" },
                                { icon: "bxl-youtube", href: "https://www.youtube.com/channel/UCLt9XRUuiWsqKng4681_6cQ" },
                                { icon: "bxl-pinterest", href: "#" },
                            ].map(s => (
                                <a key={s.icon} href={s.href} target="_blank" rel="noreferrer"
                                    className="w-10 h-10 max-sm:w-9 max-sm:h-9 bg-[#2a2f38] flex items-center justify-center rounded-[6px] text-white hover:bg-primary transition-colors">
                                    <i className={`bx ${s.icon} text-2xl max-sm:text-[20px]`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-[30px] max-sm:gap-[22px]">
                        {footerColumns.map(col => (
                            <div className="max-sm:mt-0 mt-16">
                                <span
                                    className="block mb-6 text-[20px] leading-6 font-bold text-white max-sm:text-base  max-sm:mb-0"
                                >
                                    {col.heading}
                                </span>
                                <div className="block mt-4">
                                    <ul>
                                        {col.sub.map(l => (
                                            <li key={l} className="mb-[15px]"><button className="text-white opacity-75 font-medium text-base max-sm:text-sm hover:text-primary transition-colors cursor-pointer">{l}</button></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="max-sm:mt-0 max-sm:mb-6 mt-16">
                        <span
                            className="block mb-6 text-[20px] leading-6 font-bold text-white max-sm:text-base  max-sm:mb-0"
                        >
                            Newsletter
                        </span>
                        <div className="block mt-4">
                            <p className='text-white opacity-75 font-medium text-base max-sm:text-sm leading-6 mb-5'>
                                Receive latest news, updates and many more things every week.
                            </p>
                            <div className="flex border border-[#A5B7C4] rounded-[6px] overflow-hidden opacity-75">
                                <input
                                    type="email"
                                    placeholder="Enter Your email address"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="flex-1 border-none outline-none ml-4 bg-dark text-sub-muted text-sm"
                                />
                                <div className="w-[38px] h-[38px] m-[5px] flex justify-center items-center rounded-[4px] bg-primary text-white cursor-pointer text-[22px]">
                                    <i className="bx bx-send"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#3A4C59] py-[24px] flex justify-between items-center flex-wrap max-sm:flex-col max-sm:text-center max-sm:py-[10px] gap-2">
                    <span className="text-white text-base max-sm:text-sm font-medium">Copyright © Travel 2024. All Rights Reserved</span>
                    <div className="opacity-75 flex items-center">
                        <button className="text-white text-base max-sm:text-sm font-medium hover:text-primary">Terms of use</button>
                        <span className="mx-[10px] max-sm:mx-[6px] text-white text-base max-sm:text-sm">|</span>
                        <button className="text-white text-base max-sm:text-sm font-medium hover:text-primary">Privacy Policies</button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer