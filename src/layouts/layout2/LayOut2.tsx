import { ArrowLefAndRight, SearchIcon } from '@/Components/icons/icons'
import Footer from '../layout1/Footer'
import Header from '../layout1/Header'
import Container from './Container'

function Layout2() {
    return (
        <div className='bg-bgColor h-screen overflow-y-auto'>
            <Header
                logo='BaycungbanLight.svg'
                bg='bg-primaryColor'
                navBarText='text-white'
                btn='text-primaryColor bg-white'
            >
                {/* sub header */}
                <div className='bg-white'>
                    <div className='wrapper flex items-center justify-between h-h80 gap-x-[58px] z-50'>
                        {/* sub header left */}
                        <div className='font-semibold'>
                            <h2 className='text-base leading-[21px] text-primaryColor'>
                                Da Nang (DAD)
                            </h2>
                            <span className='text-xs leading-[18px]'>Fri, 22 Mar, 2022</span>
                        </div>

                        <ArrowLefAndRight className='fill-gray-300' />

                        <div className='font-semibold'>
                            <h2 className='text-base leading-[21px] text-primaryColor'>
                                Da Nang (DAD)
                            </h2>
                            <span className='text-xs leading-[18px]'>Fri, 22 Mar, 2022</span>
                        </div>

                        {/* sub header center */}

                        <ul className='flex gap-x-[15px] divide-x font-semibold leading-[21px] items-center justify-center'>
                            <li>Round-trip</li>
                            <li>
                                <span className='text-primaryColor ml-[15px]'>02</span> Adult,{' '}
                                <span className='text-primaryColor'>01</span> children
                            </li>
                            <li>
                                <span className='ml-[15px]'>Business Class</span>
                            </li>
                        </ul>

                        {/*  sub header right  */}
                        <button className='btn bg-secondaryColor font-semibold leading-[21px] text-white px-4 py-[10px] gap-x-[10px]'>
                            Change Flights
                            <SearchIcon />
                        </button>
                    </div>
                </div>
            </Header>

            <section className='main'>
                {/* container */}
                <Container />
            </section>

            <Footer />
        </div>
    )
}

export default Layout2
