"use client"
import Logo from "@/components/logo";
import CityTime from "@/components/menu/city-time";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useMenuStore } from "@/store/use-menu-store";
import gsap from "gsap";
import MenuLinks from "@/components/menu/menu-links";
import SocialLinks from "@/components/menu/social-links";
import PersonalEmail from "@/components/menu/personal-email";
import CloseButton from "@/components/menu/close-button";
const Menu = () => {
    const container = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);
    const { isOpen } = useMenuStore();

    useGSAP(() => {
        // initial state
        gsap.set(container.current, { yPercent: 100, autoAlpha: 0 });
        gsap.set("#menu-logo", { opacity: 0 });
        gsap.set("#close-button", { opacity: 0 });
        gsap.set("#city-time", { opacity: 0 });
        gsap.set(".menu-link-item", { yPercent: 100, willChange: "transform" });
        gsap.set(".social-link", { yPercent: 100, willChange: "transform" });
        gsap.set(".personal-email", { yPercent: 100, willChange: "transform" });
        // timeline 
        tl.current = gsap.timeline({ paused: true });
        // open menu
        tl.current.to(container.current, {
            yPercent: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power2.inOut",
        });
        // show logo
        tl.current.to("#menu-logo", {
            opacity: 1,
            duration: 0.7,
            ease: "power2.inOut",
        }, "<0.4");
        // show close button
        tl.current.to("#close-button", {
            opacity: 1,
            duration: 0.7,
            ease: "power2.inOut",
        }, "<0.4");
        // show city time
        tl.current.to("#city-time", {
            opacity: 1,
            duration: 0.7,
            ease: "power2.inOut",
        }, "<0.4");
        // show links
        tl.current.to(".menu-link-item", {
            yPercent: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
        }, "<0.5");
        // show social links
        tl.current.to(".social-link", {
            yPercent: 0,
            duration: 0.7,
            ease: "power2.out",
        }, "<0.6");
        // show personal email
        tl.current.to(".personal-email", {
            yPercent: 0,
            duration: 0.7,
            ease: "power2.out",
        }, "<0.7");
    }, { scope: container })

    useGSAP(() => {
        if (!tl.current) return;
        if (isOpen) {
            tl.current.timeScale(1).play();
        } else {
            tl.current.timeScale(1.6).reverse();
        }
    }, [isOpen]);


    return (
        <div ref={container} className="bg-primary w-full h-full fixed inset-0 z-51 py-9 px-6 md:px-16 text-secondary grid grid-rows-[auto_1fr] invisible will-change-transform">
            <div>
                <div className="flex justify-between items-start">
                    <div id="menu-logo" className="w-fit h-fit">
                        <Logo />
                    </div>
                    <div id="close-button" className="w-fit h-fit">
                        <CloseButton />
                    </div>
                </div>
                <div id="city-time" className="w-fit ml-auto">
                    <CityTime />
                </div>
                <div className="mt-10">
                    <MenuLinks />
                </div>
            </div>
            <div className="flex flex-col justify-end items-center">
                <SocialLinks />
                <PersonalEmail />
            </div>
        </div>
    )
}

export default Menu
