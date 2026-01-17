import { COUNTRY } from "@/features/constants"

const Country = () => {
    return (
        <span id="country" className="block absolute -bottom-4 right-0 text-xl font-bold tracking-[1.4vw] leading-none -mr-[1.4vw] px-4">
            {COUNTRY}
        </span>
    )
}

export default Country