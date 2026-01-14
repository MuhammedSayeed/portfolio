"use client"
import { useRef } from "react"
import { SplitText } from "gsap/all"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(SplitText);

interface IProps {
    item: {
        label: string
    }
}

const AnimatedLabel = ({ item }: IProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        const splitedMainLabel = new SplitText(".main-label", { type: "chars" });
        const splitedSecondaryLabel = new SplitText(".secondary-label", { type: "chars" });

        const tl = gsap.timeline({ paused: true });
        tl.to(splitedMainLabel.chars, {
            y: -25,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.02,
        });
        tl.to(splitedSecondaryLabel.chars, {
            y: -25,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.02,
        }, "<");

        tlRef.current = tl;
    }, { scope: containerRef });

    const handleMouseEnter = () => tlRef.current?.play();
    const handleMouseLeave = () => tlRef.current?.reverse();

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center gap-2 group cursor-pointer px-2 overflow-hidden"
        >
            <span className="block group-hover:-translate-x-2 transition-transform duration-300">[</span>
            <span className="block main-label">{item.label}</span>
            <span className="block group-hover:translate-x-2 transition-transform duration-300">]</span>

            <span className="block secondary-label absolute left-7 translate-y-6">
                {item.label}
            </span>
        </div>
    )
}

export default AnimatedLabel