import { PERSONAL_EMAIL } from "@/constants"
import { ArrowRight } from "lucide-react"

const AvailableForCollaboration = () => {
    return (
        <div className="w-fit space-y-1 group flex flex-col lg:items-end cursor-pointer">
            <div className="flex items-center gap-2">
                <h3 className="uppercase font-spline font-light text-lg lg:text-[26px] tracking-tight leading-none">Available for collaboration</h3>
                <ArrowRight className="size-6 lg:size-8 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <span className="relative block leading-none text-2xl lg:text-3xl overflow-hidden uppercase font-bold tracking-tight font-sofia-condensed w-fit">
                <span className="block">{PERSONAL_EMAIL}</span>
                <span className="absolute group-hover:translate-x-full transition-all duration-500 delay-100 group-hover:delay-0 h-[2px] bottom-0 left-0 lg:left-auto right-0 bg-black w-[267px] lg:w-[334px]" />
                <span className="-translate-x-full group-hover:translate-x-0 transition-all duration-500 group-hover:delay-100 absolute h-[2px] bottom-0 left-0 lg:left-auto right-0 bg-black w-[267px] lg:w-[334px]" />
            </span>
        </div>
    )
}

export default AvailableForCollaboration