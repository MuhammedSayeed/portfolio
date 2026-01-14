import Logo from "@/components/logo"
import ContactMe from "@/components/navbar/contact-me"
import NavItems from "@/components/navbar/nav-items"


const Navbar = () => {
    return (
        <nav className="py-9 px-16 flex items-center justify-between sticky bg-amber-900 z-100 top-0 left-0 right-0">
            <Logo />
            <NavItems />
            <ContactMe />
        </nav>
    )
}

export default Navbar