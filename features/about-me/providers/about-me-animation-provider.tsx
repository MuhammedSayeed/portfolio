"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"
import { PropsWithChildren } from "react";


gsap.registerPlugin(ScrollTrigger, SplitText);
const AboutMeAnimationProvider = ({ children }: PropsWithChildren) => {
    const mm = gsap.matchMedia();
    useGSAP(() => {
        mm.add({ isDesktop: "(min-width: 1024px)", isMobile: "(max-width: 1023px)" }, (context) => {
            const { isDesktop } = context.conditions as { isDesktop: boolean };
            if (isDesktop) {
                const split = new SplitText("#about-me-header", { type: "chars" });
                gsap.to(split.chars, {
                    scrollTrigger: {
                        trigger: "#about-me-header",
                        start: "top 75%",
                        scrub: 1,
                    },
                    yPercent: 100,
                    duration: 1,
                    stagger: {
                        each: .02,
                        from: "center",
                    },
                    ease: "power4.out",
                });
                return () => split.revert();
            } else {
                gsap.to("#about-me-header", {
                    scrollTrigger: {
                        trigger: "#about-me-header",
                        start: "top 85%",
                        scrub: 1,
                    },
                    yPercent: 100,
                    duration: 1,
                    ease: "power4.out",
                });
            }
        })
        return () => mm.revert();
    })

    useGSAP(() => {
        mm.add({ isDesktop: "(min-width: 1024px)", isMobile: "(max-width: 1023px)" }, (context) => {
            const { isDesktop } = context.conditions as { isDesktop: boolean };
            if (isDesktop) {
                const split = new SplitText("#motivated-word", { type: "words" });
                gsap.to(split.words, {
                    scrollTrigger: {
                        trigger: "#about-me-content",
                        start: "top top",
                        scrub: 1,
                        pin: true,
                    },
                    color: "#F7F7F7",
                    scale: .95,
                    duration: 1.5,
                    stagger: {
                        each: 1,
                        from: "start",
                    },
                    force3D: true,
                });
            } else {
                gsap.set("#motivated-word", { opacity: 0 });
                gsap.to("#motivated-word", {
                    scrollTrigger: {
                        trigger: "#about-me-content",
                        start: "top 80%",
                        scrub: 1,
                    },
                    opacity: 1,
                    color: "#F7F7F7",
                    duration: 1.5,
                    ease: "power4.out",
                });
            }
        })

    })

    return (
        <div>
            {children}
        </div>
    );
};

export default AboutMeAnimationProvider;