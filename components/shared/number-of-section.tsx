

interface INumberOfSection {
    number: number;
}
const NumberOfSection = ({ number }: INumberOfSection) => {
    return (
        <span className="text-white text-[3.5vw] font-bold block">{number}/5</span>
    )
}

export default NumberOfSection