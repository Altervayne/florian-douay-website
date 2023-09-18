/* Assets Imports */
import './globals.css'
import { Quicksand } from 'next/font/google'
/* Library Imports */
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir"



const quicksand = Quicksand({ subsets: ['latin'] })



export const metadata = {
    title: `Florian Douay | Développeur-intégrateur Fullstack`,
    description: `Développeur Fullstack (Frontend / Backend) Junior`,
    openGraph: {
        url: `https://www.florian-douay.fr`,
        siteName: `Florian Douay`,
        title: `Florian Douay, développeur web fullstack`,
        description: `Florian Douay est un développeur web fullstack spécialisé en React, NextJS, MongoDB...`
    }    
}



export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
                <html lang="fr">
                    <body className={ quicksand.className }>
                        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
                            { children }
                        </NextAppDirEmotionCacheProvider>
                    </body>
                </html>
    )
}
