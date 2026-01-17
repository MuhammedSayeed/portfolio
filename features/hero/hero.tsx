"use client"
import { INTIAL_YEAR } from "@/constants"
import Country from "@/features/hero/country"
import DateOfBirth from "@/features/hero/date-of-birth"
import DeveloperStacks from "@/features/hero/developer-stacks"
import HeroImage from "@/features/hero/hero-image"
import HeroTitle from "@/features/hero/hero-title"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Hero = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#hero-title", {
            type: "chars",
        });
        // initial state
        gsap.set("#hero-container", { autoAlpha: 0 });
        gsap.set(titleSplit.chars, { yPercent: -200, willChange: "transform" });
        gsap.set("#date-of-birth", { opacity: 0, y: -20, rotationX: 90, transformPerspective: 500, willChange: "transform" });
        gsap.set("#country", { opacity: 0 });
        // timeline
        const tl = gsap.timeline();
        // show hero container
        tl.to("#hero-container", {
            autoAlpha: 1,
            duration: .4,
            ease: "power3.out"
        });
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
        // animate date of birth
        tl.to("#date-of-birth", {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1,
            ease: "back.out(1.7)"
        }, "<0.4");
        // start counting
        gsap.to(INTIAL_YEAR, {
            value: 2002,
            duration: 3,
            ease: "power2.out",
            onUpdate: () => {
                const el = document.querySelector("#date-of-birth");
                if (!el) return;
                el.textContent = Math.round(INTIAL_YEAR.value).toString()
            }
        })
        // show country
        tl.to("#country", {
            opacity: 1,
            duration: 0.4,
            ease: "power3.out"
        }, "-=1");

    })

    return (
        <div id="hero-container" className="px-6 md:px-16 w-full invisible relative">
            <div className="relative w-fit mx-auto z-2">
                <DateOfBirth />
                <HeroTitle />
                <Country />
            </div>
            <div id="hero-image-container" className="w-full max-w-[730px] h-[438px] absolute top-[calc(100%+80px)] lg:top-full left-1/2 -translate-x-1/2 ">
                <DeveloperStacks />
                <HeroImage />
            </div>
        </div>
    )
}

export default Hero