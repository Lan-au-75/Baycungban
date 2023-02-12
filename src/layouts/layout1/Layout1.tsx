import Banner from '@/Components/Banner'
import Footer from './Footer'
import Header from './Header'

function Layout1() {
    return (
        <div>
            <Header logo='BaycungbanDark.svg' btn='bg-primaryColor' />
            <section className='main'>
                {/* Banner */}
                <Banner />
            </section>
            <Footer bg='bg-white' subBg='bg-grayColor' />
        </div>
    )
}

export default Layout1
