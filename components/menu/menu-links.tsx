import { navItems } from '@/constants'
import Link from 'next/link'

const MenuLinks = () => {
    const RENDER_NAV_LINKS = navItems.map((i) => {
        return (
            <Link href={i.href} key={i.label} className="overflow-hidden leading-none">
                <span className="inline-block menu-link-item">
                    {i.label}
                </span>
            </Link>
        )
    })

    return (
        <div id="links" className="flex flex-col font-bold text-5xl uppercase tracking-tighter gap-3">
            {RENDER_NAV_LINKS}
        </div>
    )
}

export default MenuLinks