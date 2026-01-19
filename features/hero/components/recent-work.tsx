import { ArrowRight } from "lucide-react"
import Link from "next/link"

const RecentWork = () => {
    return (
        <div id="recent-work" className="w-fit ml-auto group cursor-pointer opacity-0">
            <div className="flex items-center gap-2">
                <h3 className="text-lg lg:text-[26px] font-light uppercase font-spline tracking-tight leading-none">Recent Work</h3>
                <ArrowRight className="size-6 lg:size-8 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <Link className="text-3xl lg:text-5xl leading-none font-bold font-spline tracking-tight group-hover:text-secondary/50 transition-colors duration-500" href={"#"}>
                TRAVOZA
            </Link>
        </div>
    )
}

export default RecentWork