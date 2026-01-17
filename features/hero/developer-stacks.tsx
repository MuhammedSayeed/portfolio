import { STACKS } from "@/features/constants";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const DeveloperStacks = () => {
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
            duration: .7,
            ease: "power1.inOut"
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
    const RENDER_STACKS = STACKS.map((stack, index) => (
        <div key={index} className="overflow-hidden">
            <span className="block developer-stack">
                {stack}
            </span>
        </div>
    ))

    return (
        <div className="w-full h-full flex flex-col justify-end font-bold text-3xl mt-32 lg:mt-0 text-center lg:text-left">
            {RENDER_STACKS}
        </div>
    )
}

export default DeveloperStacks