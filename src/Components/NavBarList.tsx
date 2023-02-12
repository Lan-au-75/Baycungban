import clsx from 'clsx'

interface Props {
    className?: string
    children: React.ReactNode
}

function NavBarList({ children, className }: Props) {
    return (
        <>
            <nav className={clsx('md:flex items-center gap-x-5 lg:gap-x-[30px]', className)}>
                {children}
            </nav>
        </>
    )
}

export default NavBarList
