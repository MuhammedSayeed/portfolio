import AnimatedLabel from "@/components/shared/animated-label"

const SocialLinks = () => {
    const SOCIAL_MEDIA_LINKS = [
        {
            label: "linkedin",
            href: "#"
        },
        {
            label: "github",
            href: "#"
        }
    ]


    const RENDER_SOCIAL_LINKS = SOCIAL_MEDIA_LINKS.map((i) => (
        <a key={i.label} href={i.href} className="social-link">
            <AnimatedLabel size="30" item={{ label: i.label }} />
        </a>
    ))
    return (
        <div className="flex items-center overflow-hidden">
            {RENDER_SOCIAL_LINKS}
        </div>
    )
}

export default SocialLinks