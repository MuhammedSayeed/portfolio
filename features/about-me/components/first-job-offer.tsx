import Image from "next/image"
import pixel_logo from "@/public/images/logos/pixel-logo.png"

const FirstJobOffer = () => {
    return (
        <div id="first-job-offer" className="space-y-6 w-fit mx-auto lg:ml-0">
            <div className="bg-secondary relative z-10">
                <Image id="first-job-offer-image" src={pixel_logo.src} alt="pixel_logo" width={250} height={230} quality={100} className="mx-auto select-none pointer-events-none" />
            </div>
            <div className="max-w-md font-spline font-light uppercase text-center text-primary">
                <p id="first-job-offer-text" className="w-full">
                    I got my first job offer from <br /> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/pixel-information-systems---pixelsoft" className="text-muted hover:underline cursor-pointer">Pixel Integrated Solutions</a> <br /> as a <span>Front End Engineer</span>
                </p>
                <span id="first-job-offer-date" className="text-muted block mt-4 leading-none">2025 August - Present</span>
                <span id="first-job-offer-location" className="text-muted block mt-2 leading-none text-sm">[CAIRO / EGYPT]</span>
            </div>
        </div>
    )
}

export default FirstJobOffer