import NumberOfSection from "@/components/shared/number-of-section"
import Separation from "@/components/shared/separation"
import Graduation from "@/features/about-me/components/graduation"
import Header from "@/features/about-me/components/header"
import Intro from "@/features/about-me/components/intro"
import FirstJobOffer from "@/features/about-me/components/first-job-offer"
import AboutMeAnimationProvider from "@/features/about-me/providers/about-me-animation-provider"
import SecondJobOffer from "@/features/about-me/components/second-job-offer"
const AboutMe = () => {
    return (
        <AboutMeAnimationProvider>
            <div id="about-me-container" className="px-6 md:px-16 w-full mt-20 lg:mt-40 lg:mb-5">
                <Header />
            </div>
            <div className="grid grid-rows-[auto_1fr] bg-secondary px-6 md:px-16 py-8 lg:py-14 gap-5 lg:gap-10 ">
                <div>
                    <NumberOfSection number={2} />
                </div>
                <div className="w-full max-w-7xl mx-auto space-y-20">
                    <Intro />
                    <Separation id="intro-separation" label="but how i started ?" className="mx-auto text-xl" />
                    <Graduation />
                    <Separation id="graduation-separation" label="Then" className="mx-auto text-xl" reverse />
                    <FirstJobOffer />
                    <Separation id="first-job-offer-separation" label="Then" className="mx-auto text-xl" />
                    <SecondJobOffer />
                </div>
            </div>
        </AboutMeAnimationProvider>
    )
}

export default AboutMe