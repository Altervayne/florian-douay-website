'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
/* Components Imports */
import { GoToButton } from '../_components/Button'



/* Animate the 404 Numbers */
const numberVariants: Variants = {
    hidden: {
        opacity: 0,
        y: -150,
        rotate: 180,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 1.2,
        }
    },
}

/* Defining the text to be animated */
const notFoundText = "La page que vous cherchez est introuvable"

/* Defining the Framer Motion Variant for the Sentence element */
const sentenceVariant = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.1,
            staggerChildren: 0.02,
        }
    }
}

const letterVariant = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "fixed",
            top: "0",
            right: "0",
            zIndex: "99999",

            height: "100vh",
            width: "100vw",

			display: "flex",
            flexDirection: "column",

            alignItems: "center",
            justifyContent: "center",
		},
        number: {
            fontSize: "10vw",
            marginTop: 0,
            marginBottom: 0,

            color: "rgba(245, 176, 65, 1)",
        },
        text: {
            marginBottom: theme.spacing(2),

            fontSize: "1.75vw",

            color: "rgba(240, 240, 240, 1)",
        },
    }
})



export default function NotFoundBody() {
    const { classes } = useStyles()



    return (      
        <div className={ classes.root }>
            <motion.h1
                className={ classes.number }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ numberVariants }
            >
                404
            </motion.h1>

            <motion.h2
                className={ classes.text }
                variants={ sentenceVariant }
                initial="hidden"
                animate="visible"
            >
                {notFoundText.split("").map((char, index) => {
                    return (
                        <motion.span key={ char + "-" + index } variants={ letterVariant }>
                            {char}
                        </motion.span>
                    )
                })}                    
            </motion.h2>

            <GoToButton text={"Accueil"} link={"/"} description={"Retournez à la page d'accueil"} />
        </div>
    )
}