/* Assets Imports */
import './globals.css'
/* Components Imports */
import Header from './_components/Header'
import Footer from './_components/Footer'
import AnimationCanvas from './_components/AnimationCanvas'
import ScrollToTop from './_components/ScrollToTop'
/* Page Components Imports */
import FirstSection from './_pageComponents/FirstSection'
import SecondSection from './_pageComponents/SecondSection'
import ThirdSection from './_pageComponents/ThirdSection'



export default function Home() {
    return (
        <>
            <Header />
            <main>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <ScrollToTop />
            </main>
            <Footer />
        </>
    )
}
