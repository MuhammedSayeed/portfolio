import { STACKS } from "@/features/constants";

const DeveloperStacks = () => {

    const RENDER_STACKS = STACKS.map((stack, index) => (
        <div key={index} className="overflow-hidden">
            <span className="block developer-stack leading-none">
                {stack}
            </span>
        </div>
    ))

    return (
        <div className="w-full h-full flex flex-col justify-end gap-4 tracking-tight font-bold text-[32px] lg:text-[42px] mt-40 lg:mt-0 text-center lg:text-left lg:pb-5">
            {RENDER_STACKS}
        </div>
    )
}

export default DeveloperStacks