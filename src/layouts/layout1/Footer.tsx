import { EmailIcon, FacebookIcon, InstagramIcon, PhoneIcon } from '@/Components/icons/icons'

import clsx from 'clsx'

interface Props {
    bg?: string
    subBg?: string
}

function Footer({ bg, subBg }: Props) {
    return (
        <div className={clsx('overflow-hidden relative bottom-0 inset-x-0', bg)}>
            <div className='wrapper relative flex items-end justify-between min-h-[80px]'>
                <div
                    className={clsx(
                        'absolute left-[8.3%] md:left-[6.3%] lg:left-[4.3%] bottom-0  w-full min-h-[80px]',
                        subBg
                    )}
                ></div>

                <div className='relative flex items-center justify-between leading-[21px] font-normal z-20'>
                    <div className='flex items-center space-x-[30px]'>
                        <div className='flex items-center gap-x-[5px]'>
                            <PhoneIcon />
                            <span className=''>Call us: +84 908 02 02 58</span>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            <EmailIcon />
                            <span className=''>Email: chucinog@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className='relative flex items-center space-x-[10px] z-20'>
                    <span className='leading-[21px] font-normal'>Follow us</span>
                    <FacebookIcon />
                    <div className='h-[1px] w-10 border-[1px] border-solid border-black'></div>
                    <InstagramIcon />
                </div>
            </div>
        </div>
    )
}

export default Footer
