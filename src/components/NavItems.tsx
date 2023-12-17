"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { useState, useRef, useEffect } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)

    const navRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(navRef, () => setActiveIndex(null));

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setActiveIndex(null);
            }
        }

        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    })

    return (
        <div className="flex gap-4 h-full" ref={navRef}>
            {PRODUCT_CATEGORIES.map((category, index) => {
                const handleOpen = () => {
                    if (activeIndex === index) {
                        setActiveIndex(null);
                    }
                    else {
                        setActiveIndex(index);
                    }
                }
                const isAnyOpen = activeIndex !== null;
                const isOpen = index === activeIndex;

                return (<NavItem
                    isAnyOpen={isAnyOpen}
                    isOpen={isOpen}
                    handleOpen={handleOpen}
                    category={category}
                    key={category.value}
                />);
            })}
        </div>
    )
}

export default NavItems