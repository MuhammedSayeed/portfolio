import MotivatedWordProvider from '@/features/motivated-word/providers/motivated-word-provider'

const MotivatedWord = () => {
    return (
        <MotivatedWordProvider>
            <div id="motivated-word-container" className="bg-secondary px-6 md:px-16 py-8 lg:py-14 gap-5 lg:gap-10 lg:min-h-screen">
                <div className="grid grid-cols-4 h-full items-center">
                    <div className="col-span-1 hidden lg:block" />
                    <div className="col-span-4 lg:col-span-3">
                        <span className='font-spline text-primary uppercase lg:ml-2.5 line-through'>Remember</span>
                        <div>
                            <p id="motivated-word" className="text-[hsl(0,0%,15%)] uppercase font-bold text-6xl lg:text-[8vw] lg:leading-[6.5vw] tracking-tighter">
                                no<br /> one is making<br />any efforts and<br />in the end , result<br /> is zero
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MotivatedWordProvider>
    )
}

export default MotivatedWord