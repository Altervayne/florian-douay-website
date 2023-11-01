/* eslint-disable @next/next/no-img-element */
'use client'
/* Data Imports */
const techList: techListEntry[] = require("../_data/usedTechs.json")
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
import { useMediaQuery, useTheme } from '@mui/material'
/* Variants Imports */
import { slideIn } from '../_utils/animationVariants'



interface techListEntry {
    link: string,
    alt: string,
    isWide: boolean
}



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "relative",
            width: "100%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            overflow: "hidden",

            backgroundColor: "rgba(255, 255, 250, 1)",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",
            maxWidth: "1200px",
            paddingTop: theme.spacing(4),

            color: "#333138",
        },



        sectionTitle: {
            textAlign: "center",

            marginBottom: theme.spacing(6),
            fontSize: theme.typography.pxToRem(52),
        },
        sectionTitleImportant: {
            color: "rgba(29, 1, 40, 1)",
        },



        techListRoot: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",

            width: "100%",
        },
        techListImage: {
            boxSizing: "border-box",

            objectFit: "cover",

            height: "100px",
            margin: theme.spacing(3)
        },
        techListImageWide: {
            boxSizing: "border-box",

            objectFit: "cover",

            width: "500px",
            maxWidth: "80vw",
            margin: theme.spacing(3)
        },
    }
})



export default function SecondSection() {
    const { classes } = useStyles()
    const theme = useTheme()
	
	const isPhone = useMediaQuery(theme.breakpoints.down('sm'))



    return (      
        <section className={ classes.root }>
            <motion.div
                className={ classes.subRoot }

                initial="rest"
                whileInView="loaded"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}

                variants={ slideIn }
            >
                <h2 className={ classes.sectionTitle }>
                    <strong className={ classes.sectionTitleImportant }>{ `Technologies` }</strong>
                </h2>

                <div className={ classes.techListRoot }>
                    {
                        techList.map((entry, index) => {
                            return (
                                <img className={ entry.isWide ? classes.techListImageWide : classes.techListImage } key={ index } src={ entry.link } alt={ entry.alt } />
                            )
                        })
                    }
                </div>
            </motion.div>
        </section>
    )
}
