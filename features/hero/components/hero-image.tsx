import Image from 'next/image'
import hero_img from "@/public/images/hero/hero_img.png"

const HeroImage = () => {
    return (
        <div className="w-[95%] lg:w-[573px] px-10 h-[653px] absolute bottom-0 lg:bottom-5 left-1/2 -translate-x-1/2 lg:right-5 lg:left-auto lg:translate-x-0 overflow-hidden">
            <Image id="hero-image" src={hero_img} alt="hero" fill className="object-cover select-none pointer-events-none" priority={true} quality={100} />
        </div>
    )
}

export default HeroImage