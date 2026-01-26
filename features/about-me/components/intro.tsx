import Image from "next/image"
import hero_img from "@/public/images/hero/hero_img.png"
import { ArrowDown } from "lucide-react"

const Intro = () => {
    return (
        <div id="intro-container" className="w-fit lg:w-full mx-auto lg:mx-0">
            <div className="w-fit">
                <div className="w-fit overflow-hidden">
                    <div id="intro-img" className="w-[310px] h-[370px] relative overflow-hidden opacity-0 -translate-y-full">
                        <Image src={hero_img} alt="hero_img" fill className="object-cover select-none pointer-events-none" quality={100} priority />
                    </div>
                </div>
                <div className="max-w-[310px] w-full text-center font-spline font-light">
                    <div className="overflow-hidden">
                        <h4 id="intro-title" className="text-primary leading-8 uppercase mt-6 text-2xl">
                            hello! <br />
                            i&apos;m mohamed sayed
                        </h4>
                    </div>
                    <div className="overflow-hidden mt-5">
                        <ArrowDown id="intro-arrow" className="mx-auto text-muted opacity-0 -translate-y-full" />
                    </div>
                    <p id="intro-desc" className="mt-5 text-primary uppercase">
                        a front end engineer with almost 2 years of experience in creating web apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Intro