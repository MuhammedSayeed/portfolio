"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"
import { PropsWithChildren } from "react";


gsap.registerPlugin(ScrollTrigger, SplitText);
const AboutMeAnimationProvider = ({ children }: PropsWithChildren) => {

    useGSAP(() => {
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
    })

    return (
        <div>
            {children}
        </div>
    );
};

export default AboutMeAnimationProvider;