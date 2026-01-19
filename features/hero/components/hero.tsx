
import AvailableForCollaboration from "@/features/hero/components/available-for-collaboration"
import Brief from "@/features/hero/components/brief"
import Country from "@/features/hero/components/country"
import DateOfBirth from "@/features/hero/components/date-of-birth"
import DeveloperStacks from "@/features/hero/components/developer-stacks"
import HeroImage from "@/features/hero/components/hero-image"
import HeroTitle from "@/features/hero/components/hero-title"
import RecentWork from "@/features/hero/components/recent-work"
import HeroAnimationProvider from "@/features/hero/providers/hero-animation-provider"

const Hero = () => {

    return (
        <HeroAnimationProvider>
            <div id="hero-container" className="px-6 md:px-16 w-full relative opacity-0">
                <div className="relative w-fit mx-auto z-2">
                    <DateOfBirth />
                    <HeroTitle />
                    <Country />
                </div>
                <div id="hero-image-container" className="w-full max-w-[973px] h-[438px] relative mt-65 lg:mt-45 top-[calc(100%+80px)] lg:top-full left-1/2 -translate-x-1/2">
                    <div className="absolute inset-0">
                        <HeroImage />
                        <DeveloperStacks />
                    </div>
                </div>
                <div id="hero-footer" className="mt-50 lg:mt-15 space-y-12">
                    <Brief />
                    <RecentWork />
                    <AvailableForCollaboration />
                </div>
            </div>
        </HeroAnimationProvider>

    )
}

export default Hero