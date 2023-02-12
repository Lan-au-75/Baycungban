import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

interface Props {
    className?: string
    title: string
    link: string
    navBarText?: string
}

function NavBarItem({ className, title, link, navBarText }: Props) {
    return (
        <>
            <NavLink
                to={link}
                className={(nav) =>
                    clsx(
                        'font-normal leading-[21px] px-2 py-2 lg:px-[15px] lg:py-[10px] hover:bg-white/10 rounded-full',
                        {
                            active: nav.isActive,
                        },
                        className,
                        navBarText
                    )
                }
            >
                {title}
            </NavLink>
        </>
    )
}

export default NavBarItem
