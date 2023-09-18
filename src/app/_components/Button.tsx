'use client'
/* Library Imports */
import { Variants, motion, TapInfo } from 'framer-motion'
import { makeStyles } from 'tss-react/mui'
/* Type Imports */
import { MouseEventHandler, ReactNode } from 'react'
/* Components Imports */
import Link from 'next/link'
/* Icons Imports */
import { FaArrowRight } from "react-icons/fa"



const iconVariants: Variants = {
    rest: {
        opacity: 0,
        width: "0px",
        marginRight: "0px",
        transform: 'translateX(100%)',
    },
    hover: {
        opacity: 1,
        width: "auto",
        marginRight: "5px",
        transform: 'translateX(0%)',
    },
}

const arrowVariants: Variants = {
    rest: {
        opacity: 0,
        width: "0px",
        marginLeft: "0px",
        transform: 'translateX(-100%)',
    },
    hover: {
        opacity: 1,
        width: "auto",
        marginLeft: "5px",
        transform: 'translateX(0%)',
    },
}

const textVariants: Variants = {
    rest: {
        color: "rgba(41, 41, 41, 1)",
    },
    hover: {
        color: "rgba(29, 1, 40, 1)",
    },
}

const linkVariants: Variants = {
    rest: {
        borderColor: "rgba(245, 176, 65, 0)",
    },
    hover: {
        borderColor: "rgba(245, 176, 65, 1)",
    },
}

const socialButtonVariants: Variants = {
    rest: {
        color: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(29, 1, 40, 0)",
        transition: { duration: 0.1 }
    },
    hover: {
        color: "rgba(245, 176, 65, 1)",
        backgroundColor: "rgba(29, 1, 40, 1)",
        transition: { duration: 0.1 }
    },
}



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            justifyContent: "space-between",

            height: "auto",
            width: "auto",
            padding: theme.spacing(1.2),

            borderRadius: theme.spacing(0.75),
            border: "2px solid",

            backgroundColor: "rgba(245, 245, 245, 1)",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",

            fontWeight: 500,

            cursor: "pointer",
        },
        rootDisabled: {
            display: "flex",
            justifyContent: "space-between",

            height: "auto",
            width: "auto",
            padding: theme.spacing(1.2),

            borderRadius: theme.spacing(0.75),
            border: "2px solid",

            backgroundColor: "rgba(170, 170, 170, 1)",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",

            fontWeight: 500,
        },
        socialRoot: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            fontSize: theme.typography.pxToRem(36),

            borderRadius: theme.spacing(.75),
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        },
        icon: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            color: "rgba(29, 1, 40, 1)",
        },
        text: {
            alignSelf: "center",
        }
    }
})



interface ButtonProps {
    children: ReactNode;
    text: string;
    link: string;
    description: string;
}

interface IconlessButtonProps {
    text: string;
    link: string;
    description: string;
}

interface TextlessButtonProps {
    children: ReactNode;
    link: string;
    description: string;
}

interface FunctionButtonProps {
    text: string;
    description: string;
    handler: MouseEventHandler<HTMLButtonElement>;
}

interface SubmitButtonProps {
    text: string;
    description: string;
    enabled: boolean;
}



function IconButton({ children, text, link, description }: ButtonProps) {
    const { classes } = useStyles()

    return (      
        <Link href={ link }>
            <motion.span    
                className={ classes.root }

                variants={ linkVariants }
                initial="rest"
                animate="rest"
                whileHover="hover"
                
                aria-label={ description }
                role="button"
            >

                <motion.span className={ classes.icon } variants={ iconVariants }>
                    { children }
                </motion.span>
                <motion.span className={ classes.text } variants={ textVariants }>
                    { text }
                </motion.span>

            </motion.span>
        </Link>
    )
}

function GoToButton({ text, link, description }: IconlessButtonProps) {
    const { classes } = useStyles()

    return (      
        <Link href={ link }>
            <motion.span
                className={ classes.root }

                variants={ linkVariants }
                initial="rest"
                animate="rest"
                whileHover="hover"

                aria-label={ description }
                role="button"
            >

                <motion.span className={ classes.text } variants={ textVariants }>
                    { text }
                </motion.span>
                <motion.span className={ classes.icon } variants={ arrowVariants }>
                    <FaArrowRight />
                </motion.span>

            </motion.span>
        </Link>
    )
}

function SocialButton({ children, link, description }: TextlessButtonProps) {
    const { classes } = useStyles()

    return (      
        <motion.a   className={ classes.socialRoot }
                    href={ link }
                    
                    role="button"
                    aria-label={ description }

                    variants={ socialButtonVariants }
                    initial="rest"
                    whileHover="hover"
        >
            { children }
        </motion.a>
    )
}

function FunctionButton({ text, description, handler }: FunctionButtonProps) {
    const { classes } = useStyles()

    return (
        <motion.button className={ classes.root } onClick={ handler }

                variants={ linkVariants }
                initial="rest"
                animate="rest"
                whileHover="hover"

                aria-label={ description }
                role="button"
        >

                <motion.span className={ classes.text } variants={ textVariants }>
                    { text }
                </motion.span>

        </motion.button>
    )
}

function SubmitButton({ text, description, enabled }: SubmitButtonProps) {
    const { classes } = useStyles()

    return (
        <motion.button className={ enabled ? classes.root : classes.rootDisabled } type="submit"

                variants={ linkVariants }
                initial="rest"
                animate="rest"
                whileHover={ enabled ? "hover" : "rest" }

                aria-label={ description }
                aria-disabled={ !enabled }
                role="button"
        >

                <motion.span className={ classes.text } variants={ textVariants }>
                    { text }
                </motion.span>

        </motion.button>
    )
}



export { IconButton, GoToButton, SocialButton, FunctionButton, SubmitButton }