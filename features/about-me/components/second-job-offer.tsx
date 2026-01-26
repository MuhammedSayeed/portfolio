import Image from "next/image"
import psi_logo from "@/public/images/logos/psi.png"
const SecondJobOffer = () => {
    return (
        <div id="second-job-offer" className="space-y-6 w-fit mx-auto lg:mr-0">
            <div className="relative z-10">
                <Image id="second-job-offer-image" src={psi_logo.src} alt="psi_logo" width={105} height={230} quality={100} className="mx-auto select-none pointer-events-none" />
            </div>
            <div className="max-w-md font-spline font-light uppercase text-center text-primary">
                <p id="second-job-offer-text" className="w-full">
                    I got offer from <br /> <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/psinv" className="text-muted hover:underline cursor-pointer">Property Shop Investment</a> <br /> as a <span>Front End Engineer</span>
                    <span className="text-muted block">
                        (Remotely)
                    </span>
                </p>
                <span id="second-job-offer-date" className="text-muted block mt-4 leading-none">2025 November - Present</span>
                <span id="second-job-offer-location" className="text-muted block mt-2 leading-none text-sm">[ABU DHABI / UAE]</span>
            </div>
        </div>
    )
}

export default SecondJobOffer