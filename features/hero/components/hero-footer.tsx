import AvailableForCollaboration from "@/features/hero/components/available-for-collaboration"
import Brief from "@/features/hero/components/brief"
import RecentWork from "@/features/hero/components/recent-work"

const HeroFooter = () => {
    return (
        <div className="mt-50 lg:mt-15 space-y-12">
            <Brief />
            <RecentWork />
            <AvailableForCollaboration />
        </div>
    )
}

export default HeroFooter