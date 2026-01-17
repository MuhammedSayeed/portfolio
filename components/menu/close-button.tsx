import AnimatedLabel from '@/components/shared/animated-label'
import { useMenuStore } from '@/store/use-menu-store';

const CloseButton = () => {
    const { close } = useMenuStore();

    return (
        <button className="text-2xl" onClick={close}>
            <AnimatedLabel item={{ label: "CLOSE" }} />
        </button>
    )
}

export default CloseButton