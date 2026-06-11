import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
    const [active, setActive] = useState(ids[0]);
    useEffect(() => {
        function update() {
            const navH = 80;
            const scrollY = window.scrollY + navH + 10;
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
                setActive(ids[ids.length - 1]);
                return;
            }
            let cur = ids[0];
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollY) cur = id;
            }
            setActive(cur);
        }
        window.addEventListener("scroll", update, { passive: true });
        update();
        return () => window.removeEventListener("scroll", update);
    }, [ids]);
    return active;
}