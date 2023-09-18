'use client'
/* Libraries Imports */
import React from "react"
import { makeStyles } from "tss-react/mui"
/* Components Imports */
import { SocialButton } from "./Button"
/* Icons Imports */
import { FaGithubSquare, FaLinkedin } from "react-icons/fa"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			alignItems: "center",

			position: "relative",

			width: "100%",
            zIndex: 4,

			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
            background: "linear-gradient(275deg, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.3))",
            backdropFilter: "blur(2px)",

			[theme.breakpoints.down('sm')]: {
				padding: "0 10vw",

				height: theme.spacing(14),	
			},
			[theme.breakpoints.up('sm')]: {
				padding: "0 5vw",

				height: theme.spacing(12),	
			},
			[theme.breakpoints.up('md')]: {
				padding: "0 13vw",

				height: theme.spacing(16),
			}
		},
		socialsRoot: {
			display: "flex",
			justifyContent: "space-between",

			minWidth: theme.spacing(10),
			width: "10%",
			maxWidth: theme.spacing(12)
		},
		socialsButton: {
			height: theme.spacing(3.5),
			width: theme.spacing(3.5),

			background: "none",
			outline: "none",
			border: "none",
			padding: "0",
			margin: "0",

			cursor: "pointer",

			color: "rgba(255, 255, 255, 1)"
		},
		socialsIcon: {
			height: "100%",
			width: "100%",
		},
		copyright: {
			color: "white",

			padding: "0",
			margin: "0",
		},
	}
})



export default function Footer() {
	const { classes } = useStyles()


	return (
		<footer className={ classes.root }>
			<div className={ classes.socialsRoot }>
                <SocialButton link={ "https://github.com/Altervayne/" } description={ "Page Github de Florian Douay" }>
                    <FaGithubSquare/>
                </SocialButton>
                <SocialButton link={ "https://www.linkedin.com/in/florian-douay/" } description={ "Page LinkedIn de Florian Douay" }>
                    <FaLinkedin/>
                </SocialButton>
			</div>

			<p className={ classes.copyright }>{ "Copyright © 2023 Florian Douay. Tous droits réservés." }</p>
		</footer>
	)
}