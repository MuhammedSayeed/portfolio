"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"
import { PropsWithChildren } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);
const AboutMeAnimationProvider = ({ children }: PropsWithChildren) => {
    // about me header animation
    useGSAP(() => {
        const mm = gsap.matchMedia();
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
                    duration: 1.5,
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
    // intro animation
    useGSAP(() => {
        const titleSplitedText = new SplitText("#intro-title", { type: "lines" });
        const descSplitedText = new SplitText("#intro-desc", { type: "words, chars" });
        gsap.set(titleSplitedText.lines, {
            yPercent: 200,
        });
        gsap.set(descSplitedText.chars, {
            opacity: 0
        });
        const tl = gsap.timeline();
        tl.to("#intro-img", {
            scrollTrigger: {
                trigger: "#intro-container",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            yPercent: 100,
            duration: 2,
            ease: "power4.out",
            opacity: 1,
        })
        tl.to(titleSplitedText.lines, {
            scrollTrigger: {
                trigger: "#intro-container",
                start: "top 50%",
                end: "top top",
                scrub: 2,
            },
            yPercent: 0,
            duration: 2,
            stagger: 0.2,
            ease: "power4.out",
        });
        tl.to("#intro-arrow", {
            scrollTrigger: {
                trigger: "#intro-container",
                start: "top 30%",
                end: "top top",
                scrub: 2,
            },
            opacity: 1,
            yPercent: 100,
            duration: 2,
            ease: "power4.out",
        })
        tl.to(descSplitedText.chars, {
            scrollTrigger: {
                trigger: "#intro-container",
                start: "top 30%",
                end: "top top",
                scrub: 2,
            },
            stagger: 0.01,
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        })
        return () => {
            titleSplitedText.revert();
            descSplitedText.revert();
            tl.revert();
        }
    })
    // intro-separation animation
    useGSAP(() => {
        // intial state
        gsap.set("#intro-separation", {
            yPercent: 100,
        })
        // timeline
        const tl = gsap.timeline();
        tl.to("#intro-separation", {
            scrollTrigger: {
                trigger: "#intro-separation",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            yPercent: 0,
            duration: 2,
            ease: "power4.out",
        })
        return () => tl.revert();
    })
    // graduation animation
    useGSAP(() => {
        // splitedText
        const titleSplitedText = new SplitText("#graduation-title", { type: "lines" });
        // intial state
        gsap.set(titleSplitedText.lines, {
            opacity: 0,
            yPercent: -300,
        })
        gsap.set("#graduation-date", {
            opacity: 0,
        })
        // timeline
        const tl = gsap.timeline();
        tl.to(titleSplitedText.lines, {
            scrollTrigger: {
                trigger: "#graduation",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            stagger: {
                each: .02,
                from: "center",
            },
            yPercent: 0,
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        })
        tl.to("#graduation-date", {
            scrollTrigger: {
                trigger: "#graduation",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        })
        return () => {
            titleSplitedText.revert();
            tl.revert();
        }
    })
    // graduation-separation animation
    useGSAP(() => {
        // intial state
        gsap.set("#graduation-separation", {
            yPercent: 100,
        })
        // timeline
        const tl = gsap.timeline();
        tl.to("#graduation-separation", {
            scrollTrigger: {
                trigger: "#graduation-separation",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            yPercent: 0,
            duration: 2,
            ease: "power4.out",
        })
        return () => tl.revert();
    })
    // first-job-offer animation
    useGSAP(() => {
        const splitedText = new SplitText("#first-job-offer-text", { type: "lines" });
        // intial state
        gsap.set("#first-job-offer-image", {
            opacity: 0
        });
        gsap.set(splitedText.lines, {
            opacity: 0,
            yPercent: -300,
        })
        gsap.set("#first-job-offer-date", {
            opacity: 0,
        })
        gsap.set("#first-job-offer-location", {
            opacity: 0,
        })
        const tl = gsap.timeline();
        tl.to("#first-job-offer-image", {
            scrollTrigger: {
                trigger: "#first-job-offer",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        })
        tl.to(splitedText.lines, {
            scrollTrigger: {
                trigger: "#first-job-offer",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            stagger: {
                each: .02,
                from: "center",
            },
            yPercent: 0,
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        })
        tl.to("#first-job-offer-date", {
            scrollTrigger: {
                trigger: "#first-job-offer",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        })
        tl.to("#first-job-offer-location", {
            scrollTrigger: {
                trigger: "#first-job-offer",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        })
        return () => {
            splitedText.revert();
            tl.revert();
        }
    })
    // first-job-offer-separation animation
    useGSAP(() => {
        // intial state
        gsap.set("#first-job-offer-separation", {
            yPercent: 100,
        })
        // timeline
        const tl = gsap.timeline();
        tl.to("#first-job-offer-separation", {
            scrollTrigger: {
                trigger: "#first-job-offer-separation",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            yPercent: 0,
            duration: 2,
            ease: "power4.out",
        })
        return () => tl.revert();
    })
    // second-job-offer animation
    useGSAP(() => {
        const splitedText = new SplitText("#second-job-offer-text", { type: "lines" });
        // intial state
        gsap.set("#second-job-offer-image", {
            opacity: 0
        });
        gsap.set(splitedText.lines, {
            opacity: 0,
            yPercent: -300,
        })
        gsap.set("#second-job-offer-date", {
            opacity: 0,
        })
        gsap.set("#second-job-offer-location", {
            opacity: 0,
        })

        const tl = gsap.timeline();
        tl.to("#second-job-offer-image", {
            scrollTrigger: {
                trigger: "#second-job-offer",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        })
        tl.to(splitedText.lines, {
            scrollTrigger: {
                trigger: "#second-job-offer",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            stagger: {
                each: .02,
                from: "center",
            },
            yPercent: 0,
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        })
        tl.to("#second-job-offer-date", {
            scrollTrigger: {
                trigger: "#second-job-offer",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        })
        tl.to("#second-job-offer-location", {
            scrollTrigger: {
                trigger: "#second-job-offer",
                start: "top 80%",
                end: "top 30%",
                scrub: 2,
            },
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        })
        return () => {
            splitedText.revert();
            tl.revert();
        }
    })
    return (
        <div>
            {children}
        </div>
    );
};

export default AboutMeAnimationProvider;