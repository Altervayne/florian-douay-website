/* Assets Imports */
import './globals.css'
/* Components Imports */
import Header from './_components/Header'
import Footer from './_components/Footer'
import AnimationCanvas from './_components/AnimationCanvas'
import FirstSection from './_pageComponents/FirstSection'
/* Page Components Imports */



export default function Home() {
    return (
        <>
            <Header />
            <main>
                <FirstSection />
            </main>
            <Footer />
        </>
    )
}
