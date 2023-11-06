'use client'
/* Libraries Imports */
import React from "react"
import { makeStyles } from "tss-react/mui"
/* Var Declarations */
const defaultPath = "../../../public/projects/"



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
        },
		imageRoot: {
			
		}
	}
})



export default function ProjectCard() {
	const { classes } = useStyles()


	return (
		<article className={ classes.root }>
			<div className={ classes.imageRoot }>

			</div>
        </article>
	)
}