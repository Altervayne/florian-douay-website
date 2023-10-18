'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
import AnimationCanvas from '../_components/AnimationCanvas'



function getTextVariants(index: number): Variants {
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

function getArrowVariants(isLeft: boolean): Variants {
    const modifier = isLeft ? "5" : "-5"

    return {
        hidden: {
            transform: "rotateZ(0deg) translateY(0px)"
        },
        visible: {
            translateY: "5px",
            transform: `rotateZ(${modifier}deg) translateY(-10px)`,
            transition: {
                delay: 2
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

            overflow: "hidden",
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
            textAlign: "center",

            [theme.breakpoints.down('md')]: {
				fontSize: theme.typography.pxToRem(32),
			},
        },
        titleImportant: {
            color: "rgba(245, 176, 65, 1)",
        },



        arrowRoot: {
            position: "absolute",
            bottom: "-50%",

            height: "50vh",
            width: "200vw",

            backgroundColor: "rgba(255, 255, 250, 1)",
            backdropFilter: 'blur(5px)'
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
                        variants={ getTextVariants(0) }
                    >
                        { `Je m'appelle ` }
                        <strong className={ classes.titleImportant }>
                            { `Florian` }
                        </strong>
                    </motion.h2>

                    <motion.h2
                        className={ classes.titleRoot }
                        variants={ getTextVariants(1) }
                    >
                        { `Je suis dévelopeur ` }
                        <strong className={ classes.titleImportant }>
                            { `Fullstack` }
                        </strong>
                    </motion.h2>

                </motion.div>

                <motion.svg
                    className={ classes.arrowRoot }
                    initial="hidden"
                    animate="visible"
                    variants={ getArrowVariants(false) }
                    width="200%"
                    height="50%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="100%" height="100%" fill="rgba(255, 255, 250, 1)" />
                </motion.svg>

                <motion.svg
                    className={ classes.arrowRoot }
                    initial="hidden"
                    animate="visible"
                    variants={ getArrowVariants(true) }
                    width="200%"
                    height="50%"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect width="100%" height="100%" fill="rgba(255, 255, 250, 1)" />
                </motion.svg>

                
            </section>
        </>
    )
}
