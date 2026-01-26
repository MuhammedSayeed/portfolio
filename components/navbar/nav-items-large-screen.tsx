import AnimatedLabel from "@/components/shared/animated-label"
import { navItems } from "@/constants"

const NavItemsLargeScreen = () => {

    const RENDER_ITEMS = navItems.map((item) => (
        <AnimatedLabel className="text-[1.1vw]" key={item.label} item={item} />
    ))


    return (
        <div className="font-spline flex items-center text-xl gap-10 flex-1 justify-center font-light uppercase">
            {RENDER_ITEMS}
        </div>
    )
}

export default NavItemsLargeScreen