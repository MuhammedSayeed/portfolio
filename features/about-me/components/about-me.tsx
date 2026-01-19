import Header from "@/features/about-me/components/header"
import AboutMeAnimationProvider from "@/features/about-me/providers/about-me-animation-provider"

const AboutMe = () => {
    return (
        <AboutMeAnimationProvider>
            <div id="about-me-container" className="px-6 md:px-16 w-full mt-40">
                <Header />
            </div>
            <div className="h-[1000px]"></div>
        </AboutMeAnimationProvider>
    )
}

export default AboutMe