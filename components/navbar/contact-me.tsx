import { ArrowRight } from "lucide-react"

const ContactMe = () => {
    return (
        <div className="relative flex items-center gap-2 text-3xl uppercase group cursor-pointer h-10 overflow-hidden">
            <span>Contact Me</span>
            <ArrowRight className="size-8 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            <span className="absolute bottom-[2px] z-10 w-full bg-white h-[2px] group-hover:translate-x-full transition-all duration-300 delay-100 group-hover:delay-0" />
            <span className="absolute bottom-[2px] -translate-x-full z-10 w-full bg-white h-[2px] group-hover:translate-x-0 transition-all duration-300 group-hover:delay-100" />
        </div>
    )
}

export default ContactMe