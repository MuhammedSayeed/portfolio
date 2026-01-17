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
    className?: string
}

const AnimatedLabel = ({ item, className }: IProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();
        const tl = gsap.timeline({ paused: true });

        mm.add({ isDesktop: "(min-width: 1024px)", isMobile: "(max-width: 1023px)" }, (context) => {
            const { isDesktop } = context.conditions as { isDesktop: boolean };
            let splitedMainLabel: SplitText | undefined;
            let splitedSecondaryLabel: SplitText | undefined;

            if (isDesktop) {
                const mainSplit = new SplitText(".main-label", { type: "chars" });
                const secondarySplit = new SplitText(".secondary-label", { type: "chars" });
                splitedMainLabel = mainSplit;
                splitedSecondaryLabel = secondarySplit;
                // initial state
                gsap.set(".secondary-label", { y: 0 });
                gsap.set(secondarySplit.chars, { yPercent: 100 });
                // animation
                tl.to(mainSplit.chars, {
                    yPercent: -100,
                    duration: 0.4,
                    ease: "power2.out",
                    stagger: 0.02,
                });
                tl.to(secondarySplit.chars, {
                    yPercent: 0,
                    duration: 0.4,
                    ease: "power2.out",
                    stagger: 0.02,
                }, "<");
            } else {
                tl.to(".main-label", {
                    yPercent: -100,
                    duration: 0.4,
                    ease: "power2.out",
                });
                tl.to(".secondary-label", {
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out",
                }, "<");
            }
            return () => {
                splitedMainLabel?.revert();
                splitedSecondaryLabel?.revert();
            }
        });

        tlRef.current = tl;
    }, { scope: containerRef });

    const handleMouseEnter = () => tlRef.current?.play();
    const handleMouseLeave = () => tlRef.current?.reverse();

    return (
        <div
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={clsx("relative flex items-center gap-2 group cursor-pointer px-2 overflow-hidden uppercase", className)}
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