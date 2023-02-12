import { Link } from 'react-router-dom'
import { ArrowDowIcon, ArrowLefAndRight, ArrowRightLight, CalendarIcon } from './icons/icons'

function Banner() {
    return (
        <div>
            <div className="bg-[url('../../src/assets/img/banner.png')] pt-[50%] bg-no-repeat bg-center bg-cover"></div>

            <div className='wrapper flex flex-col gap-y-[80px] lg:gap-y-[127px] max-w-[1230px] -mt-[40%] lg:-mt-[44%] xl:-mt-[40%] '>
                {/* Title */}
                <div className='px-2 md:px-4'>
                    <h1 className='text-3xl leading-[43px] md:text-5xl md:leading-[63px] lg:text-7xl font-normal lg:leading-[105px] '>
                        Hello! <br /> Where are <br /> you{' '}
                        <span className='text-primaryColor'>flying</span> to ...
                    </h1>
                </div>

                {/* Flight */}
                <div className='relative z-10 p-[30px] bg-white shadow-shadow1 rounded-xl max-w-[1230px] w-full min-h-[224px] h-full space-y-5 isolate'>
                    <header className='flex flex-col gap-y-3 items-center gap-x-[50px] md:flex-row md:justify-center lg:justify-start'>
                        <div className='flex items-center gap-[20px]'>
                            <div className='flex items-center space-x-1.5'>
                                <div className='bg-grayColor w-6 h-6 rounded-full'></div>
                                <span className='font-semibold leading-[21px]'>
                                    One way / Round-trip
                                </span>
                            </div>

                            <div className='flex items-center space-x-1.5'>
                                <div className='flex items-center justify-center bg-primaryColor w-6 h-6 rounded-full'>
                                    <div className='bg-white w-3 h-3 rounded-full'></div>
                                </div>
                                <span className='font-semibold leading-[21px]'>Multi-city</span>
                            </div>
                        </div>

                        <div>
                            <div className='flex items-center gap-[50px]'>
                                <div className='flex items-center justify-center space-x-[5px]'>
                                    <span className='font-semibold leading-[21px]'>
                                        <span className='text-primaryColor'>02</span> Adult,{' '}
                                        <span className='text-primaryColor'>01</span> children
                                    </span>
                                    <ArrowDowIcon />
                                </div>

                                <div className='flex items-center justify-center space-x-[5px]'>
                                    <span className='font-semibold leading-[21px]'>
                                        Business Class
                                    </span>
                                    <ArrowDowIcon />
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* From -> to */}
                    <div className='relative flex flex-col items-center gap-[20px] lg:flex-row'>
                        <div className='flex items-center'>
                            <div className='relative'>
                                <img
                                    src='/src/assets/img/banner-rectangle1.png'
                                    alt=''
                                    className=''
                                />
                                <div className='absolute top-0 left-0 px-5 py-[15px] font-semibold'>
                                    <h3 className='text-xs leading-[18px]'>From</h3>
                                    <h2 className='text-lg md:text-2xl leading-8 md:leading-9 text-primaryColor'>
                                        Da Nang
                                    </h2>
                                    <span className='leading-4 md:leading-[21px]'>
                                        Quang Nam, Viet Nam
                                    </span>
                                </div>
                            </div>

                            <div>
                                <ArrowLefAndRight />
                            </div>

                            <div className='relative'>
                                <img src='/src/assets/img/banner-rectangle2.png' alt='' />
                                <div className='absolute top-0 left-[20px] px-5 py-[15px] font-semibold'>
                                    <h3 className='text-xs leading-[18px]'>TO</h3>
                                    <h2 className='text-lg md:text-2xl leading-8 md:leading-9 text-primaryColor'>
                                        Ho Chi Minh
                                    </h2>
                                    <span className='leading-4 md:leading-[21px]'>Viet Nam</span>
                                </div>
                            </div>
                        </div>

                        <div className='relative'>
                            <img src='/src/assets/img/banner-rectangle3.png' alt='' />
                            <div className='absolute top-0 left-0 px-5 py-[15px] font-semibold'>
                                <h3 className='text-xs leading-[18px] uppercase'>Departure</h3>
                                <h2 className='flex items-center gap-[10px] text-2xl leading-9 text-primaryColor'>
                                    Fri, 22 Mar, 2022
                                    <CalendarIcon />
                                </h2>
                                <div className='space-x-[20px]'>
                                    <span className='leading-[21px] border-b border-solid border-black'>
                                        Prev
                                    </span>
                                    <span className='leading-[21px] opacity-40'>Next</span>
                                </div>
                            </div>

                            <div className='absolute top-0 right-0 px-5 py-[15px] font-semibold'>
                                <h3 className='text-xs leading-[18px] uppercase'>return</h3>
                                <h2 className='flex items-center gap-[10px] text-2xl leading-9 text-primaryColor'>
                                    Fri, 22 Mar, 2022
                                    <CalendarIcon />
                                </h2>
                                <div className='space-x-[20px]'>
                                    <span className='leading-[21px] opacity-40'>Prev</span>
                                    <span className='leading-[21px] opacity-40'>Next</span>
                                </div>
                            </div>
                        </div>
                        {/* Btn Search Flights */}

                        <Link
                            to='list'
                            className='btn absolute -bottom-[30%] lg:-bottom-[80%] right-0 bg-primaryColor min-w-[145px] min-h-[40px]
                            md:px-[20px] md:py-[17px] md:min-w-[245px] md:min-h-[60px] justify-between'
                        >
                            <span className='text-lg font-semibold   md:leading-[21px] transition-all duration-200 hover:text-gray-100'>
                                Search Flights
                            </span>
                            <ArrowRightLight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
