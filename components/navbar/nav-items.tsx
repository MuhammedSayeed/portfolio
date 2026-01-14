import { navItems } from "@/constants"

const NavItems = () => {


    const RENDER_ITEMS = navItems.map((item) => (
        <div key={item.label} className="flex items-center gap-2 group cursor-pointer hover:font-medium">
            <span className="block group-hover:-translate-x-2 transition-transform">[</span>
            <span className="block group-hover:scale-105 transition-transform ">{item.label}</span>
            <span className="block group-hover:translate-x-2 transition-transform">]</span>
        </div>
    ))


    return (
        <div className="font-spline flex items-center font-normal text-xl gap-20 flex-1 justify-center">
            {RENDER_ITEMS}
        </div>
    )
}

export default NavItems