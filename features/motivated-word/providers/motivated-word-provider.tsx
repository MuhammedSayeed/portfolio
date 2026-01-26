"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PropsWithChildren } from "react";
import { SplitText, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(SplitText, ScrollTrigger);
const MotivatedWordProvider = ({ children }: PropsWithChildren) => {

    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add({ isDesktop: "(min-width: 1024px)", isMobile: "(max-width: 1023px)" }, (context) => {
            const { isDesktop } = context.conditions as { isDesktop: boolean };
            if (isDesktop) {
                const split = new SplitText("#motivated-word", { type: "words" });
                gsap.to(split.words, {
                    scrollTrigger: {
                        trigger: "#motivated-word-container",
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
                        trigger: "#motivated-word-container",
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
}

export default MotivatedWordProvider