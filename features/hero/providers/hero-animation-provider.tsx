"use client"
import { INITIAL_YEAR } from "@/constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import { PropsWithChildren } from "react"

gsap.registerPlugin(ScrollTrigger, SplitText);
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

                return () => titleSplit.revert();
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
            gsap.to(INITIAL_YEAR, {
                value: 2002,
                duration: 3,
                ease: "power2.out",
                onUpdate: () => {
                    if (!dobEl) return;
                    const roundedValue = Math.round(INITIAL_YEAR.value);
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
        const mm = gsap.matchMedia();
        mm.add({ isDesktop: "(min-width: 1024px)", isMobile: "(max-width: 1023px)" }, (context) => {
            const { isDesktop } = context.conditions as { isDesktop: boolean };

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

            // animate brief
            if (isDesktop) {
                const briefSplit = SplitText.create("#brief", {
                    type: "words, chars",
                });
                gsap.set(briefSplit.chars, { opacity: 0 });
                tl.to(briefSplit.chars, {
                    opacity: 1,
                    duration: .5,
                    stagger: 0.01,
                    ease: "power1.out"
                }, "<0.4");

                return () => briefSplit.revert();
            } else {
                gsap.set("#brief", { y: -20, opacity: 0 });
                tl.to("#brief", {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power3.out"
                }, "<0.4");
            }
        });
        return () => mm.revert();
    })
    useGSAP(() => {
        // show recent work
        gsap.to("#recent-work", {
            opacity: 1,
            duration: .5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#hero-footer",
                start: "top 80%",
                end: "top 60%",
                toggleActions: "play none none reverse"
            }
        })
        // show available for collaboration
        gsap.to("#available-for-collaboration", {
            opacity: 1,
            duration: .5,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#hero-footer",
                start: "top 70%",
                end: "top 60%",
                toggleActions: "play none none reverse"
            }
        })
    })
    return (
        <>
            {children}
        </>
    )
}

export default HeroAnimationProvider