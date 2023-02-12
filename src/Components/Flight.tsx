import { BaggageIcon, InFlightMealIcon } from './icons/icons'

interface Props {
    logo?: string
    title?: string
    divide?: string
    btn?: string
    minHeight?: string
    borderButtonDetail?: string
    borderButtonInfo?: string
    initialPrice?: React.ReactNode
    priceLater?: React.ReactNode
    children?: React.ReactNode
}

function Flight({
    logo,
    title,
    divide,
    btn,
    children,
    minHeight,
    borderButtonDetail,
    borderButtonInfo,
    initialPrice,
    priceLater,
}: Props) {
    return (
        <div className='mt-[5px] flex flex-col gap-y-[10px]'>
            <div
                className={`bg-white p-[15px] flex-1 ${minHeight} h-full rounded-xl flex flex-col gap-y-[26px]`}
            >
                {/* Flight detail Header*/}
                <header className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-[12px] font-semibold leading-[21px]'>
                        <div className='flex items-center justify-center overflow-hidden w-[30px] h-[30px] border border-solid border-black/10 rounded-md'>
                            <img srcSet={`/src/assets/img/${logo} 2x`} alt='' />
                        </div>
                        <h2 className='uppercase'>{title}</h2>
                    </div>

                    <div className='flex items-center gap-x-[15px] font-semibold'>
                        <div>
                            <p className='text-sm leading-[21px]'>21:40</p>
                            <p className='text-[10px] leading-[15px] px-[5px] py-[3px] bg-grayColor rounded-full text-center mt-1'>
                                DAD
                            </p>
                        </div>
                        <div>
                            <p className='text-sm leading-[21px] text-center'>1h 30m</p>
                            <img srcSet='/src/assets/img/line.png 2x' alt='' className='py-[3px]' />
                            <p className='text-[10px] leading-[15px] text-center'>Direct</p>
                        </div>
                        <div>
                            <p className='text-sm leading-[21px]'>23:10</p>
                            <p className='text-[10px] leading-[15px] px-[5px] py-[3px] bg-grayColor rounded-full text-center mt-1'>
                                SGN
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-1'>
                        <div className='flex items-center gap-x-[7px] font-semibold leading-[21px'>
                            <BaggageIcon />
                            <span>
                                Baggage <span className='text-primaryColor'>20kg</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-x-[7px] font-semibold leading-[21px'>
                            <InFlightMealIcon />
                            <span>
                                In-flight
                                <span className='text-primaryColor'>Meal</span>
                            </span>
                        </div>
                    </div>

                    <div className='leading-[21px]'>
                        <div className='font-normal opacity-50 line-through'>{initialPrice}</div>
                        <div className='font-semibold text-secondaryColor'>{priceLater}</div>
                    </div>

                    <button
                        className={`btn ${btn}  px-[15px] py-[6px] font-semibold leading-[21px]
                            min-w-[82px] min-h-[33px]`}
                    >
                        Choose
                    </button>
                </header>
                {/* Flight detail Container*/}
                <section className='flex flex-col gap-y-[19px]'>
                    <div className='flex items-center gap-x-[30px] text-xs font-semibold leading-[18px] uppercase'>
                        <span className={`${borderButtonDetail} `}>Flight detail</span>
                        <span className={`${borderButtonInfo}`}>fare info</span>
                        {divide && <hr className={divide} />}
                    </div>

                    {children}
                </section>
            </div>
        </div>
    )
}

export default Flight
