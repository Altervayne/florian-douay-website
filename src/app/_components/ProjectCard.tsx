'use client'
/* Libraries Imports */
import React from "react"
import { makeStyles } from "tss-react/mui"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			display: "flex",
			
			boxSizing: "border-box",

			
			[theme.breakpoints.down('sm')]: {
			},
			[theme.breakpoints.up('sm')]: {	
			},
			[theme.breakpoints.up('md')]: {
			}
        }
	}
})



export default function ProjectCard() {
	const { classes } = useStyles()


	return (
		<article>

        </article>
	)
}