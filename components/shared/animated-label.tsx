"use client"
import { useRef } from "react"
import { SplitText } from "gsap/all"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import clsx from "clsx"

gsap.registerPlugin(SplitText);

interface IProps {
    item: {
        label: string
    }
    size?: string
}

const AnimatedLabel = ({ item, size }: IProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        const splitedMainLabel = new SplitText(".main-label", { type: "chars" });
        const splitedSecondaryLabel = new SplitText(".secondary-label", { type: "chars" });

        gsap.set(".secondary-label", { y: 0 });
        gsap.set(splitedSecondaryLabel.chars, { yPercent: 100 });

        const tl = gsap.timeline({ paused: true });
        tl.to(splitedMainLabel.chars, {
            yPercent: -100,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.02,
        });
        tl.to(splitedSecondaryLabel.chars, {
            yPercent: 0,
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
            className={clsx("relative flex items-center gap-2 group cursor-pointer px-2 overflow-hidden uppercase", `text-[${size}px]`)}
        >
            <span className="block group-hover:-translate-x-2 transition-transform duration-300">[</span>
            <div className="relative">
                <span className="block main-label">{item.label}</span>
                <span className="block secondary-label absolute left-0 top-0 translate-y-full">
                    {item.label}
                </span>
            </div>
            <span className="block group-hover:translate-x-2 transition-transform duration-300">]</span>
        </div>
    )
}

export default AnimatedLabel