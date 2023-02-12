import { ArrowDowIcon } from './icons/icons'

const filterData = [
    {
        title: 'Transit',
    },
    {
        title: 'Time',
    },
    {
        title: 'Airline',
    },
    {
        title: 'Low Price',
    },
]

function Filter() {
    return (
        <div className='flex items-center justify-end text-xs leading-[18px] gap-x-[14px] '>
            <h3 className='font-semibold opacity-50'>Filter</h3>
            <ul className='flex font-normal gap-[5px]'>
                {filterData.map((item) => (
                    <li
                        key={item.title}
                        className='flex items-center justify-between bg-white rounded-xl min-w-[120px] h-[34px] px-[15px] py-2
                        hover:opacity-80 cursor-pointer '
                    >
                        {item.title}
                        <ArrowDowIcon />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Filter
