"use client"
import { INTIAL_YEAR } from "@/constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { PropsWithChildren } from "react"



const HeroAnimationProvider = ({ children }: PropsWithChildren) => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add({ isDesktop: "(min-width: 1024px)", isMobile: "(max-width: 1023px)" }, (context) => {
            const { isDesktop } = context.conditions as { isDesktop: boolean };
            // initial state
            gsap.set("#hero-container", { autoAlpha: 0 });
            gsap.set("#date-of-birth", { opacity: 0, y: -20, rotationX: 90, transformPerspective: 500, willChange: "transform, opacity" });
            gsap.set("#country", { opacity: 0 });
            // timeline
            const tl = gsap.timeline();
            // show hero container
            tl.to("#hero-container", {
                autoAlpha: 1,
                duration: .4,
                ease: "power3.out"
            });
            if (isDesktop) {
                const titleSplit = SplitText.create("#hero-title", {
                    type: "chars",
                });
                gsap.set(titleSplit.chars, { yPercent: -100 });
                // show title
                tl.to(titleSplit.chars, {
                    yPercent: 0,
                    stagger: {
                        each: .02,
                        from: "center",
                    },
                    duration: .3,
                    ease: "power3.out",
                }, "<0.4");
            } else {
                gsap.set("#hero-title", { y: -50, opacity: 0, willChange: "transform, opacity" });
                tl.to("#hero-title", {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power3.out"
                }, "<0.4");
            }
            // animate date of birth
            tl.to("#date-of-birth", {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1,
                ease: "back.out(1.7)"
            }, "<0.4");

            // start counting
            const dobEl = document.querySelector("#date-of-birth");
            let lastValue = 0;
            gsap.to(INTIAL_YEAR, {
                value: 2002,
                duration: 3,
                ease: "power2.out",
                onUpdate: () => {
                    if (!dobEl) return;
                    const roundedValue = Math.round(INTIAL_YEAR.value);
                    if (roundedValue !== lastValue) {
                        dobEl.textContent = roundedValue.toString();
                        lastValue = roundedValue;
                    }
                }
            })
            // show country
            tl.to("#country", {
                opacity: 1,
                duration: 0.4,
                ease: "power3.out"
            }, "-=1");
        });
        return () => mm.revert();
    })
    useGSAP(() => {
        // initial state
        gsap.set("#hero-image-container", { backgroundColor: "transparent" });
        gsap.set(".developer-stack", { yPercent: 100 });
        gsap.set("#hero-image", { yPercent: -100, opacity: 0 });
        // timeline
        const tl = gsap.timeline();
        // show hero image
        tl.to("#hero-image", {
            opacity: 1,
            yPercent: 0,
            duration: 1.5,
            ease: "power3.out"
        }, "<0.4");
        // show developer stack
        tl.to(".developer-stack", {
            yPercent: 0,
            duration: .5,
            stagger: .1,
            ease: "power1.inOut"
        }, "<0.4");
        // show hero image container background
        tl.to("#hero-image-container", {
            backgroundColor: "#F1F1F1",
            duration: .5,
            ease: "power1.inOut"
        }, "<0.4");

    })
    return (
        <>
            {children}
        </>
    )
}

export default HeroAnimationProvider