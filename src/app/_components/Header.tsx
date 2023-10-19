'use client'
/* Libraries Imports */
import React from "react"
import { makeStyles } from "tss-react/mui"
import { useMediaQuery, useTheme } from "@mui/material"
/* Components Imports */
import NavButton from "./NavButton"
import ContactButton from "./ContactButton"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			position: "absolute",
			top: "0",

			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",

			

			width: "100%",
            zIndex: 4,

			backgroundColor: "transparent",
            backdropFilter: "blur(2px)",

			[theme.breakpoints.down('sm')]: {
				padding: "0 5vw",

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
		name: {
			alignSelf: "center",
			textAlign: "center",
			color: "white",


			[theme.breakpoints.down('sm')]: {
				flexGrow: "1",
				width: "15%",

				fontSize: theme.typography.pxToRem(20),
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: theme.typography.pxToRem(24),
			},
		},
		nav: {
			display: "flex",
			alignItems: "center",
		},
	}
})



export default function Header() {
	const { classes } = useStyles()
	const theme = useTheme()
	

	const isPhoneScreen = useMediaQuery(theme.breakpoints.down('sm'))


	return (
		<header className={ classes.root }>
			<h1 className={ classes.name }>Florian DOUAY</h1>

			<nav className={ classes.nav }>
				<ContactButton />
			</nav>
		</header>
	)
}