/* eslint-disable @next/next/no-img-element */
'use client'
/* Libraries Imports */
import React from "react"
import { makeStyles } from "tss-react/mui"
import { Variants, motion } from "framer-motion"
/* Var Declarations & Types Imports */
import { ProjectCardData } from "../_types/ProjectCardTypes"
const defaultPath = "projects/"



function getVariants(isFirst: boolean): Variants {
	const modifier = isFirst ? -1 : 1
	return {
		rest: {
			translateX: `${30*modifier}px`
		},
		hover: {
			translateX: `${-60*modifier}px`
		}
	}
}



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			display: "flex",
			flexDirection: "column",
			
			boxSizing: "border-box",

			width: "300px",
			margin: theme.spacing(4),
			borderRadius: theme.spacing(1),

			backgroundColor: "rgba(240, 240, 240, 1)",

			
			[theme.breakpoints.down('sm')]: {
			},
			[theme.breakpoints.up('sm')]: {	
			},
			[theme.breakpoints.up('md')]: {
			}
        },



		imageRoot: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",

			boxSizing: "border-box",
			overflow: "hidden",
			
			height: "300px",
			width: "300px",

			borderRadius: theme.spacing(1),
			borderBottomLeftRadius: "0",
			borderBottomRightRadius: "0",
		},
		image: {
			scale: "0.6",
			rotate: "45deg",
			objectFit: "cover",
		},



		title: {
			boxSizing: "border-box",

			width: "100%",
			padding: "10px 10px",
			
			color: "#1D0128",
			textAlign: "center",
			fontSize: theme.typography.pxToRem(24),
		}
	}
})



export default function ProjectCard({ img, title, description, tags, link }: ProjectCardData) {
	const { classes } = useStyles()


	return (
		<motion.article className={ classes.root }
						initial="rest"
						whileHover="hover"
		>
			<motion.div className={ classes.imageRoot }>
				<motion.img src={ `${defaultPath}${img}` } alt={ `${title}, ${description}` } className={ classes.image }
							variants={ getVariants(true) }
				/>
				<motion.img src={ `${defaultPath}${img}` } alt={ `${title}, ${description}` } className={ classes.image }
							variants={ getVariants(false) }
				/>
			</motion.div>

			<h3 className={ classes.title }>{ title }</h3>
        </motion.article>
	)
}