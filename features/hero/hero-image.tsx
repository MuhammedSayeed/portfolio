import Image from 'next/image'
import hero_img from "@/public/images/hero/hero_img.png"

const HeroImage = () => {
    return (
        <div className=" w-6/7 lg:w-[430px] px-10 h-[490px] absolute bottom-0 left-1/2 -translate-x-1/2 lg:right-0 lg:left-auto lg:translate-x-0 overflow-hidden">
            <Image id="hero-image" src={hero_img} alt="hero" fill className="object-cover select-none pointer-events-none" priority={true} quality={100} loading="eager" />
        </div>
    )
}

export default HeroImage