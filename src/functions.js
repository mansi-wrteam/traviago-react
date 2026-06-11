export function ArrowBtn({ onClick, disabled, dir = "left" }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`flex items-center justify-center w-[38px] h-[38px] text-2xl rounded-full border border-dark text-dark transition-all duration-200 cursor-pointer
        hover:bg-dark hover:text-white disabled:opacity-40 disabled:cursor-not-allowed`}
        >
            <i className={`bx bx-${dir}-arrow-alt`}></i>
        </button>
    );
}

export function Dots({ total, active, onChange }) {
    return (
        <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onChange(i)}
                    className={`h-2 rounded-full transition-all duration-200 flex-shrink-0 ${i === active
                            ? "bg-primary w-[22px] rounded-[4px]"
                            : "w-2 bg-[#D8E0E6]"
                        }`}
                />
            ))}
        </div>
    );
}

export function SectionHeading({ title, subtitle, children, centered = false, fullWidth = false }) {
    return (
        <div className={`flex ${centered ? "justify-center" : "justify-between"} gap-4`}>
            <div className={`${centered ? "text-center" : ""} ${!fullWidth ? (centered ? "max-w-[870px]" : "max-w-[645px]") : ""}`}>
                <span className="block text-[40px] leading-[48px] font-bold text-nav-text mb-2 max-lg:mb-[6px] max-sm:text-[30px] max-sm:leading-[38px]">
                    {title}
                </span>
                <span className="block text-base leading-6 text-muted font-medium max-sm:text-[14px] max-sm:leading-[22px]">
                    {subtitle}
                </span>
            </div>
            {children}
        </div>
    );
}