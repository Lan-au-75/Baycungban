import { BaggageIcon, InFlightMealIcon } from '@/Components/icons/icons'
import Flight from './Flight'

function FlightInfo() {
    return (
        <Flight
            minHeight='min-h-[331px]'
            logo='logo-bamboo.png'
            title='Bamboo Airways'
            divide='divide-solid flex-1'
            btn='bg-secondaryColor text-white'
            borderButtonDetail='opacity-40'
            borderButtonInfo='text-primaryColor border-b border-solid border-primaryColor'
            initialPrice='1,326,000 vnd'
            priceLater='1,322,000 vnd'
        >
            <div className='flex gap-x-[114px]'>
                {/* Flight info Container Left */}
                <div className='flex flex-col gap-y-[15px]'>
                    <div>
                        <p className='font-semibold leading-[21px] uppercase'>Conditions</p>
                    </div>

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

                    <div className='flex items-center gap-x-[5px]'>
                        <div>
                            <p className='font-normal leading-[21px]'>Da Nang</p>
                            <p className='font-normal leading-[18px] text-primaryColor text-xs'>
                                Economy
                            </p>
                        </div>

                        <div>
                            <img srcSet='/src/assets/img/line3.png 2x' alt='' />
                        </div>

                        <p className='font-normal leading-[21px]'>Ho Chi Minh City</p>
                    </div>

                    <p className='font-normal text-xs leading-[18px]'>Non - Refundable</p>
                </div>
                {/* Flight detail Container Right */}
                <div className='flex justify-start gap-[171px]'>
                    <div className='flex flex-col gap-y-[10px]'>
                        <p className='font-semibold leading-[21px] uppercase'>price details</p>
                        <div className='flex gap-x-[171px]'>
                            <p className='font-normal leading-6'>
                                Adult Basic Fare (x1) <br /> Tax <br /> Regular Total Price <br />{' '}
                                <span className='text-secondaryColor'>Save</span>
                            </p>

                            <p className='font-normal leading-6'>
                                <span className='font-semibold'>1,326,000 vnd</span> <br /> included{' '}
                                <br /> 1,326,000 vnd <br /> -4,000 vnd
                            </p>
                        </div>

                        <hr className='divide-solid flex-1' />
                        <div className='flex justify-start gap-x-[246px]'>
                            <p className='font-normal leading-6'>You pay</p>
                            <p className='font-normal leading-6 text-secondaryColor'>
                                1,322,000 vnd
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Flight>
    )
}

export default FlightInfo
