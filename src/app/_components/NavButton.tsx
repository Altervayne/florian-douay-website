/* Libraries Imports */
import React from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"
/* Components Imports */
import Link from "next/link"



const textVariants = {
	rest: {
		color: "rgba(255, 255, 255, 1)",
		transition: { duration: 0.1 }
	},
	hover: {
		color: "rgba(245, 176, 65, 1)",
		transition: { duration: 0.1 }
	}
}

const underlineVariants = {
	rest: {
		opacity: 0,
		width: "0px",
		transition: { duration: 0.1 }
	},
	hover: {
		opacity: 1,
		width: "100%",
		transition: { duration: 0.1 }
	}
}



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			position: "relative",

			margin: theme.spacing(3),
			padding: 0,

			fontWeight: 600,
			fontSize: theme.typography.pxToRem(18),

			backgroundColor: "transparent",
			color: "white",
			outline: "none",
			border: "none",

			cursor: "pointer",
		},
		text: {
			margin: 0,
			padding: 0,
		},
		underline: {
			position: "absolute",
			left: 0,
			bottom: 0,

			height: "2px",
			width: "100%",
			backgroundColor: "#F5B041",
		}
	}
})



interface NavButtonProps {
    label: string;
    link: string;
}



export default function NavButton({ label, link }: NavButtonProps) {
	const { classes } = useStyles()


	return (
		<motion.div className={ classes.root } initial="rest" animate="rest" whileHover="hover">
            <Link href={ link }>
                <motion.span className={ classes.text } variants={ textVariants }>{ label }</motion.span>
                <motion.span className={ classes.underline } variants={ underlineVariants }></motion.span>
            </Link>
		</motion.div>
	)
}