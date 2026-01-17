"use client"
import { useMenuStore } from "@/store/use-menu-store";

const MenuButton = () => {
    const { isOpen, open } = useMenuStore();

    const handleToggleMenu = () => {
        if (!isOpen) open();
    }
    return (
        <button onClick={handleToggleMenu} className="relative font-light text-2xl cursor-pointer">
            <span className=" block tracking-wide">MENU</span>
            <span className="absolute -top-3.5 -right-3">+</span>
        </button>
    )
}

export default MenuButton