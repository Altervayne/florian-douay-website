/* Assets Imports */
import './globals.css'
/* Components Imports */
import Header from './_components/Header'
import Footer from './_components/Footer'
import AnimationCanvas from './_components/AnimationCanvas'
/* Page Components Imports */
import HomeTitle from './_pageComponents/HomeTitle'



export default function Home() {
    return (
        <>
            <Header />
            <main>
                <AnimationCanvas />
                <HomeTitle />
            </main>
            <Footer />
        </>
    )
}
