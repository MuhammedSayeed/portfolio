import clsx from "clsx"
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react"

interface IProps {
    label?: string
    className?: string
    reverse?: boolean
    id?: string
}
const Separation = ({ label, className, reverse, id }: IProps) => {
    return (
        <div className="overflow-hidden w-fit mx-auto">
            <div id={id} className={clsx("text-muted flex items-center gap-2 font-spline uppercase font-light w-fit", className)}>
                {reverse && <ArrowLeft className="-rotate-45 hidden lg:block" />}
                <span className="block">{label}</span>
                {!reverse && <ArrowRight className="rotate-45 hidden lg:block" />}
                <ArrowDown className="block lg:hidden text-muted" />
            </div>
        </div>

    )
}

export default Separation