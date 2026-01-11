import Logo from "@/components/logo"
import ContactMe from "@/components/navbar/contact-me"
import MenuButton from "@/components/navbar/menu-button"
import NavItemsLargeScreen from "@/components/navbar/nav-items-large-screen"


const Navbar = () => {
    return (
        <nav className="py-9 px-6 md:px-16 flex items-center justify-between sticky z-50 top-0 left-0 right-0 text-white bg-transparent mix-blend-difference">
            <Logo />
            <div className="hidden xl:flex justify-between w-full">
                <NavItemsLargeScreen />
                <ContactMe />
            </div>
            <div className="xl:hidden">
                <MenuButton />
            </div>
        </nav>
    )
}

export default Navbar