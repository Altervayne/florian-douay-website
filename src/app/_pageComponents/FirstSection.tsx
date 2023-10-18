'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
import AnimationCanvas from '../_components/AnimationCanvas'



function getVariants(index: number): Variants {
    return {
        hidden: {
            opacity: 0,
            scale: 0.8,
            translateY: "-100%"
        },
        visible: {
            opacity: 1,
            scale: 1,
            translateY: "0",
            transition: {
                type: "spring",
                duration: 1,
                delay: index*1,
            }
        }
    }
}



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "relative",
            height: "100vh",
            width: "100%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            height: "100%",
            width: "100%",
            maxWidth: "1200px",
        },
        titleRoot: {
            margin: theme.spacing(2),
            fontSize: theme.typography.pxToRem(52),
        },
        titleImportant: {
            color: "rgba(245, 176, 65, 1)",
        },
    }
})



export default function FirstSection() {
    const { classes } = useStyles()

    return (      
        <>
            <AnimationCanvas />
            <section className={ classes.root }>
                <motion.div
                            className={ classes.subRoot }
                            initial="hidden"
                            animate="visible"
                >
                    <motion.h2
                                className={ classes.titleRoot }
                                variants={ getVariants(0) }
                    >
                        { `Je m'appelle ` }
                        <strong className={ classes.titleImportant }>
                            { `Florian` }
                        </strong>
                    </motion.h2>

                    <motion.h2
                                className={ classes.titleRoot }
                                variants={ getVariants(1) }
                    >
                        { `Je suis dévelopeur ` }
                        <strong className={ classes.titleImportant }>
                            { `Fullstack` }
                        </strong>
                    </motion.h2>
                </motion.div>
            </section>
        </>
    )
}
