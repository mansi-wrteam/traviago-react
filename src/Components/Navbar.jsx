import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants';

const Navbar = () => {
    const [isHome, setIsHome] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        function onScroll() {
            const homeElement = document.getElementById("home");
            if (!homeElement) return;
            const bottom = homeElement.getBoundingClientRect().bottom;
            setIsHome(bottom > 100);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.documentElement.style.overflowY = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    const handleNavClick = (id) => {
        setActiveSection(id);
        setMenuOpen(false);
    };

    const renderNavLinks = (mobile = false) =>
        navLinks.map((l) => (
            <li
                key={l.label}
                className={mobile ? "border-b border-border-color" : ""}
            >
                <a
                    href={l.href}
                    onClick={() => handleNavClick(l.id)}
                    className={
                        mobile
                            ? `flex items-center px-6 py-5 text-nav-text text-[18px]
                           font-medium hover:bg-hover-color
                           ${activeSection === l.id ? "!text-primary font-bold" : ""}`
                            : `block text-base font-medium transition-colors
                           ${isHome ? "text-white" : "text-nav-text"}
                           ${activeSection === l.id
                                ? "!text-primary font-bold"
                                : "hover:!text-primary"
                            }`
                    }
                >
                    {l.label}
                </a>
            </li>
        ));

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full h-[80px] flex items-center z-[1000] transition-all duration-200
                ${isHome ? "bg-transparent" : "bg-white shadow-md border-black/[0.06]"}`}
            >
                <div className="flex justify-between items-center w-full max-w-[1320px] mx-auto relative md:top-2.5 px-0 max-xl:px-3">
                    <img
                        src={isHome ? "./assets/Logo.png" : "./assets/DarkLogo.png"}
                        alt="Brand Logo"
                        className="w-[138px] h-[40px] object-contain transition-opacity duration-200"
                    />

                    <button
                        className="md:hidden p-2 border-none bg-transparent cursor-pointer z-[1001] min-w-[44px] min-h-[44px] flex-shrink-0 flex flex-col justify-center items-center"
                        onClick={() => setMenuOpen(open => !open)}
                        aria-label="Toggle navigation"
                    >
                        <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"} text-4xl ${isHome ? "text-white " : "text-[#333]"}`}></i>
                    </button>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center flex-row">
                        <ul className="flex items-center flex-row gap-[30px] p-0">
                            {renderNavLinks()}
                        </ul>
                    </nav>

                    <div className="hidden md:block">
                        <ul className="flex items-center gap-[30px] p-0">
                            <li><button className={`text-base font-medium ${isHome ? "text-white" : "text-nav-text"} hover:text-primary transition-colors`}>USD</button></li>
                            <li><button className={`text-base font-medium ${isHome ? "text-white" : "text-nav-text"} hover:text-primary transition-colors`}>Sign Up</button></li>
                            <li>
                                <button className="text-white bg-primary px-4 py-2 text-xl rounded-full hover:bg-[#d4820a] transition-colors">
                                    Log In
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            {menuOpen && (
                <div
                    className="fixed inset-0 bg-dark/50 backdrop-blur-[2px] z-[1099]"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            <nav
                className={`fixed top-0 right-0 w-[280px] h-dvh z-[1100] bg-white shadow-lg flex flex-col overflow-y-auto
                    transition-transform duration-300
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between px-5 py-[20px] pb-4 border-b border-border-color flex-shrink-0">
                    <img src="./assets/DarkLogo.png" alt="Brand Logo" className="w-[110px] object-contain" />
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-center w-9 h-9 border-none bg-[#f8f9fa] rounded-full cursor-pointer text-[22px] text-nav-text hover:bg-border-color transition-colors"
                    >
                        <i className="bx bx-x"></i>
                    </button>
                </div>

                <ul className="flex flex-col">
                    {renderNavLinks(true)}
                </ul>

                <div className="mt-auto border-t border-border-color">
                    <ul className="flex flex-col">
                        <li className="border-b border-border-color">
                            <button className="flex items-center px-6 py-5 text-nav-text text-[18px] font-medium hover:bg-hover-color">USD</button>
                        </li>
                        <li className="border-b border-border-color">
                            <button className="flex items-center px-6 py-5 text-nav-text text-[18px] font-medium hover:bg-hover-color">Sign Up</button>
                        </li>
                        <li>
                            <button className="flex items-center px-6 py-5 text-primary font-bold text-[18px] hover:bg-hover-color">Log In</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar