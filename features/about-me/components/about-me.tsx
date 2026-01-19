import NumberOfSection from "@/components/shared/number-of-section"
import Header from "@/features/about-me/components/header"
import MotivatedWord from "@/features/about-me/components/motivated-word"
import AboutMeAnimationProvider from "@/features/about-me/providers/about-me-animation-provider"

const AboutMe = () => {
    return (
        <AboutMeAnimationProvider>
            <div id="about-me-container" className="px-6 md:px-16 w-full mt-20 lg:mt-40 lg:mb-5">
                <Header />
            </div>
            <div id="about-me-content" className="grid grid-rows-[auto_1fr] bg-secondary px-6 md:px-16 py-8 lg:py-14 gap-5 lg:gap-10 lg:min-h-screen">
                <div>
                    <NumberOfSection number={2} />
                </div>
                <div className="grid grid-cols-4 h-full">
                    <div className="col-span-1 hidden lg:block" />
                    <div className="col-span-4 lg:col-span-3">
                        <MotivatedWord />
                    </div>
                </div>
            </div>
        </AboutMeAnimationProvider>
    )
}

export default AboutMe