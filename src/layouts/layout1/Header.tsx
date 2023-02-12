import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { HiBars4 } from 'react-icons/hi2'
import { IoMdClose } from 'react-icons/io'

import NavBarItem from '@/Components/NavBarItem'
import NavBarList from '@/Components/NavBarList'

interface Props {
    children?: React.ReactNode
    logo?: string
    bg?: string
    navBarText?: string
    btn?: string
}

function Header({ children, logo, bg, navBarText, btn }: Props) {
    const [navBarScroll, setNavBarScroll] = useState<boolean>(false)
    const [openNavBar, setOpenNavBar] = useState<boolean>(false)

    // handle scroll navbar

    useEffect(() => {
        window.addEventListener('scroll', scrollChangeBackground)

        return () => window.removeEventListener('scroll', scrollChangeBackground)
    }, [])

    const scrollChangeBackground = () => {
        if (
            window.scrollY > 0 ||
            document.body.scrollTop > 0 ||
            document.documentElement.scrollTop > 0
        ) {
            setNavBarScroll(true)
        } else {
            setNavBarScroll(false)
        }
    }

    // handle navBar mobile

    const showNavBar = () => {
        setOpenNavBar(true)
    }

    const onCloseNavBar = () => {
        setOpenNavBar(false)
    }

    return (
        <>
            <header className='fixed top-0 inset-x-0 z-50'>
                <div
                    className={clsx(
                        'transition-all duration-200',
                        navBarScroll ? 'bg-primaryColor' : '',
                        bg
                    )}
                >
                    <div className='wrapper flex items-center justify-between  min-h-[80px]'>
                        {/* header left */}
                        <div className='flex items-center space-x-3.5'>
                            <Link to='/'>
                                {navBarScroll ? (
                                    <img src={`../../src/assets/img/BaycungbanLight.svg`} alt='' />
                                ) : (
                                    <img src={`../src/assets/img/${logo}`} alt='' />
                                )}
                            </Link>
                            <img src='./src/assets/img/vietnam-1.png' alt='' />
                            <img src='./src/assets/img/united-states-1.png' alt='' />
                            <HiBars4
                                className={clsx(
                                    'md:hidden cursor-pointer',
                                    navBarScroll ? 'text-white' : 'text-black'
                                )}
                                fontSize={24}
                                onClick={showNavBar}
                            />
                        </div>

                        {/* header center */}

                        {navBarScroll ? (
                            <NavBarList className='hidden'>
                                <NavBarItem
                                    className='text-white'
                                    title='Promotion'
                                    link='/promotion'
                                ></NavBarItem>
                                <NavBarItem
                                    className='text-white'
                                    title='Flight Schedule'
                                    link='/Flight Schedule'
                                ></NavBarItem>
                                <NavBarItem
                                    className='text-white'
                                    title='About us'
                                    link='/About us'
                                ></NavBarItem>
                                <NavBarItem
                                    className='text-white'
                                    title='Payment Guide'
                                    link='/Payment Guide'
                                ></NavBarItem>
                            </NavBarList>
                        ) : (
                            <NavBarList className='hidden'>
                                <NavBarItem
                                    navBarText={navBarText}
                                    title='Promotion'
                                    link='/promotion'
                                ></NavBarItem>
                                <NavBarItem
                                    navBarText={navBarText}
                                    title='Flight Schedule'
                                    link='/Flight Schedule'
                                ></NavBarItem>
                                <NavBarItem
                                    navBarText={navBarText}
                                    title='About us'
                                    link='/About us'
                                ></NavBarItem>
                                <NavBarItem
                                    navBarText={navBarText}
                                    title='Payment Guide'
                                    link='/Payment Guide'
                                ></NavBarItem>
                            </NavBarList>
                        )}

                        {/* header right */}
                        {navBarScroll ? (
                            <Link to='list' className={clsx('btn bg-white text-primaryColor')}>
                                Booking now
                            </Link>
                        ) : (
                            <Link to='list' className={clsx('btn', btn)}>
                                Booking now
                            </Link>
                        )}
                    </div>
                </div>

                {/* sub header */}
                {children}

                {/* navbar mobile */}
                <div>
                    {/* overplay */}
                    <div
                        className={clsx(
                            'fixed inset-0 bg-black/60 animate-fadeIn',
                            openNavBar ? 'block' : 'hidden'
                        )}
                        onClick={onCloseNavBar}
                    ></div>

                    {/* navbar mobile */}
                    <div
                        className={clsx(
                            'fixed left-0 inset-y-0 bg-primaryColor max-w-[300px] w-full -translate-x-full transition-transform ease-linear delay-200',
                            openNavBar ? 'translate-x-0' : ''
                        )}
                    >
                        <div
                            className='absolute top-0 right-0 p-3 cursor-pointer hover:opacity-75'
                            onClick={onCloseNavBar}
                        >
                            <IoMdClose className='text-white' fontSize={20} />
                        </div>
                        <NavBarList className='flex flex-col text-white gap-y-[20px] p-[30px] text-base'>
                            <NavBarItem
                                navBarText={navBarText}
                                title='Promotion'
                                link='/promotion'
                            ></NavBarItem>
                            <NavBarItem
                                navBarText={navBarText}
                                title='Flight Schedule'
                                link='/Flight Schedule'
                            ></NavBarItem>
                            <NavBarItem
                                navBarText={navBarText}
                                title='About us'
                                link='/About us'
                            ></NavBarItem>
                            <NavBarItem
                                navBarText={navBarText}
                                title='Payment Guide'
                                link='/Payment Guide'
                            ></NavBarItem>
                        </NavBarList>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
