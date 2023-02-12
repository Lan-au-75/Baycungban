import Filter from '@/Components/Filter'
import Flight from '@/Components/Flight'
import FlightDetail from '@/Components/FlightDetail'
import FlightInfo from '@/Components/FlightInfo'
import { LineIcon } from '@/Components/icons/icons'

const FlightData = [
    {
        logo: 'logo-vietnamAirlines.png',
        title: 'Vietnam Airlines',
        borderButtonDetail: 'text-primaryColor',
        borderButtonInfo: 'opacity-40',
        initialPrice: '1,506,000 vnd',
        priceLater: '1,306,000 vnd',
    },
    {
        logo: 'logo-bamboo.png',
        title: 'Bamboo Airways',
        borderButtonDetail: 'opacity-40',
        borderButtonInfo: 'text-primaryColor border-b border-solid border-primaryColor',
        initialPrice: '1,326,000 vnd',
        priceLater: '1,332,000 vnd',
    },
    {
        logo: 'logo-vietnamAirlines.png',
        title: 'Vietnam Airlines',
        borderButtonDetail: 'text-primaryColor',
        borderButtonInfo: 'opacity-40',
        initialPrice: '1,506,000 vnd',
        priceLater: '1,306,000 vnd',
    },
    {
        logo: 'logo-bamboo.png',
        title: 'Bamboo Airways',
        borderButtonDetail: 'opacity-40',
        borderButtonInfo: 'text-primaryColor border-b border-solid border-primaryColor',
        initialPrice: '1,326,000 vnd',
        priceLater: '1,332,000 vnd',
    },
    {
        logo: 'logo-vietnamAirlines.png',
        title: 'Vietnam Airlines',
        borderButtonDetail: 'text-primaryColor',
        borderButtonInfo: 'opacity-40',
        initialPrice: '1,506,000 vnd',
        priceLater: '1,306,000 vnd',
    },
    {
        logo: 'logo-bamboo.png',
        title: 'Bamboo Airways',
        borderButtonDetail: 'opacity-40',
        borderButtonInfo: 'text-primaryColor border-b border-solid border-primaryColor',
        initialPrice: '1,326,000 vnd',
        priceLater: '1,332,000 vnd',
    },
]

function Container() {
    return (
        <div className='mt-[160px] wrapper flex items-start justify-center gap-x-[10px] pt-[15px]'>
            <div>
                <Filter />

                <FlightDetail />

                <FlightInfo />

                {FlightData.map((item, i) => (
                    <Flight
                        key={i}
                        minHeight='min-h-[124px]'
                        logo={item.logo}
                        title={item.title}
                        btn='bg-secondaryColor/10 text-secondaryColor'
                        borderButtonDetail={item.borderButtonDetail}
                        borderButtonInfo={item.borderButtonInfo}
                        initialPrice={item.initialPrice}
                        priceLater={item.priceLater}
                    />
                ))}
            </div>

            {/* your flights  */}
            <div className='hidden xl:block bg-white flex-1 min-h-[423px] p-[15px] pb-0 rounded-xl'>
                <span className='font-semibold leading-[21px] uppercase'>your flights</span>
                <hr className='flex-1 divide-solid my-[15px]' />
                <div className='flex flex-col  gap-y-[15px]'>
                    <div className='flex items-center gap-3 '>
                        <div className='bg-base100 w-[30px] h-[30px] flex items-center justify-center rounded-full'>
                            <span className='font-semibold leading-[21px] text-white'>01</span>
                        </div>
                        <div className='leading-[21px]'>
                            <p className='font-normal'>Fri, 11 Feb, 2022</p>
                            <p className='font-semibold'>Da Nang - Ho Chi Minh</p>
                        </div>
                    </div>

                    <header className='flex flex-col items-start justify-between gap-y-[15px]'>
                        <div className='flex items-center gap-x-[12px] font-semibold leading-[21px]'>
                            <div className='flex items-center justify-center overflow-hidden w-[30px] h-[30px] border border-solid border-black/10 rounded-md'>
                                <img srcSet={`/src/assets/img/logo-bamboo.png 2x`} alt='' />
                            </div>
                            <h2 className='uppercase'>Bamboo Airways</h2>
                        </div>

                        <div className='flex items-center gap-x-[20px] font-semibold'>
                            <div>
                                <p className='text-sm leading-[21px]'>21:40</p>
                                <p className='text-[10px] leading-[15px] px-[5px] py-[3px] bg-grayColor rounded-full text-center mt-1'>
                                    DAD
                                </p>
                            </div>
                            <div>
                                <p className='text-sm leading-[21px] text-center'>1h 30m</p>
                                <LineIcon />

                                <p className='text-[10px] leading-[15px] text-center'>Direct</p>
                            </div>
                            <div>
                                <p className='text-sm leading-[21px]'>23:10</p>
                                <p className='text-[10px] leading-[15px] px-[5px] py-[3px] bg-grayColor rounded-full text-center mt-1'>
                                    SGN
                                </p>
                            </div>
                        </div>

                        <button
                            className='btn py-[10px] px-[51px] font-semibold text-xs leading-[18px] text-primaryColor
                        bg-primaryColor/10'
                        >
                            Change departure flight
                        </button>
                    </header>

                    <hr className='flex-1 divide-solid' />

                    <footer>
                        <div className='flex flex-col gap-y-[15px]'>
                            <div className='flex items-center gap-3 '>
                                <div className='bg-primaryColor w-[30px] h-[30px] flex items-center justify-center rounded-full'>
                                    <span className='font-semibold leading-[21px] text-white'>
                                        02
                                    </span>
                                </div>
                                <div className='leading-[21px]'>
                                    <p className='font-normal'>Sun, 13 Feb, 2022</p>
                                    <p className='font-semibold'>Ho Chi Minh - Da Nang</p>
                                </div>
                            </div>

                            <div className='leading-[21px] bg-base200 rounded-b-xl p-[15px] flex flex-col gap-y-0 -ml-[15px] -mr-[15px]'>
                                <p className='font-normal'>Subtotal</p>
                                <p className='font-semibold text-secondaryColor'>1,322,000 vnd</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Container
