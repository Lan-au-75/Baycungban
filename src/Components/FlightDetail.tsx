import { BaggageIcon, InFlightMealIcon } from '@/Components/icons/icons'
import Flight from './Flight'

const flightDetailData1 = [
    {
        text: 'Baggage',
        subText: '20kg',
    },
    {
        text: 'In-flight',
        subText: 'Meal',
    },
    {
        text: 'In-flight',
        subText: 'Meal',
    },
]

const flightDetailData2 = [
    {
        text: 'Aircraft',
        subText: 'Airbus A321',
    },
    {
        text: 'Seat layout ',
        subText: '3-3',
    },
    {
        text: 'Seat pitch',
        subText: '29 inches (standard)',
    },
]

function FlightDetail() {
    return (
        <Flight
            minHeight='min-h-[331px]'
            logo='logo-bamboo.png'
            title='Bamboo Airways'
            divide='divide-solid flex-1'
            btn='bg-secondaryColor/10 text-secondaryColor'
            borderButtonDetail='text-primaryColor border-b border-solid border-primaryColor'
            borderButtonInfo='opacity-40'
            initialPrice='1,326,000 vnd'
            priceLater='1,322,000 vnd'
        >
            <div className='flex gap-x-[92px]'>
                {/* Flight detail Container Left */}

                <div className='flex'>
                    <div>
                        <p className='font-semibold leading-[21px]'>21:40</p>
                        <p className='font-normal leading-[18px] text-xs'>11 Feb</p>

                        <p className='font-normal leading-[21px] pt-8'>1h 30m</p>

                        <p className='font-semibold leading-[21px] pt-[51px]'>23:10</p>
                        <p className='font-normal leading-[18px] text-xs'>11 Feb</p>
                    </div>

                    <div className='ml-[31px] mr-[26px]'>
                        <img srcSet='/src/assets/img/line2.png 4x' alt='' />
                    </div>

                    <div>
                        <p className='font-semibold leading-[21px]'>Da nang (DAD)</p>
                        <p className='font-normal leading-[18px] text-xs'>Da Nang Airport</p>

                        <p className='font-semibold leading-[21px] pt-[104px] text-[14px]'>
                            Ho Chi Minh City (SGN)
                        </p>
                        <p className='font-normal leading-[18px] text-xs'>Tansonnhat Intl</p>
                    </div>
                </div>

                {/* Flight detail Container Right */}

                <div>
                    <div className='flex items-center gap-x-[11px]'>
                        <div>
                            <img srcSet='/src/assets/img/logo-bamboo.png 2x' alt='' />
                        </div>
                        <div className=''>
                            <h2 className='uppercase font-semibold leading-[21px]'>
                                Bamboo Airways
                            </h2>
                            <div className='flex items-center gap-x-[5px]'>
                                <span className='text-xs font-normal leading-[18px]'>QH-183</span>
                                <div>
                                    <img src='/src/assets/img/circle.png' alt='' />
                                </div>
                                <span className='text-xs font-normal leading-[18px]'>Economy</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-[65px] bg-grayColor min-w-[500px] min-h-[101px] rounded-xl mt-[10px] p-[15px]'>
                        <div className='flex flex-col gap-y-1'>
                            {flightDetailData1.map((item, i) => (
                                <p key={i} className='font-normal leading-[21px]'>
                                    {item.text}{' '}
                                    <span className='text-primaryColor'>{item.subText}</span>
                                </p>
                            ))}
                        </div>

                        <div className='flex flex-col gap-y-1'>
                            {flightDetailData2.map((item, i) => (
                                <p key={i} className='font-normal leading-[21px]'>
                                    {item.text}{' '}
                                    <span className='text-primaryColor'>{item.subText}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Flight>
    )
}

export default FlightDetail
