/* eslint-disable @next/next/no-img-element */
'use client'
/* Libraries Imports */
import React from "react"
import { makeStyles } from "tss-react/mui"
import { Variants, motion } from "framer-motion"
/* Var Declarations & Types Imports */
import { ProjectCardData } from "../_types/ProjectCardTypes"
const defaultPath = "projects/"
/* Components Imports */
import Tag from "./Tag"



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
			position: "relative",
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

			backgroundColor: "rgba(45, 45, 45, 1)"
		},
		image: {
			scale: "0.6",
			rotate: "45deg",
			objectFit: "cover",
		},
		glow: {
			position: "absolute",
			right: "-50px",
			top: "-50px",

			height: "80%",
			width: "80%",

			rotate: "27deg",
			filter: "blur(50px)"
		},
		link: {
			position: "absolute",
			top: "0",
			left: "0",
			margin: "0",
			padding: "0",

			width: "100%",
			height: "100%",

			cursor: "pointer",

			borderRadius: theme.spacing(1),
			borderBottomLeftRadius: "0",
			borderBottomRightRadius: "0",
		},



		title: {
			boxSizing: "border-box",

			width: "100%",
			padding: "10px",
			
			color: "#1D0128",
			textAlign: "center",
			fontSize: theme.typography.pxToRem(24),
		},
		description: {
			boxSizing: "border-box",

			width: "100%",
			padding: "0px 20px",
		},
		


		tagsRoot: {
			display: "flex",
			flexWrap: "wrap",

			padding: "20px",
			paddingBottom: "10px",
		}
	}
})



export default function ProjectCard({ img, title, description, tags, link, color }: ProjectCardData) {
	const { classes } = useStyles()


	return (
		<motion.article className={ classes.root }
						initial="rest"
						whileHover="hover"
		>
			<motion.div className={ classes.imageRoot }>
				<div className={ classes.glow } style={{ backgroundColor: `${color}` }} />

				<motion.img src={ `${defaultPath}${img}` } alt={ `${title}, ${description}` } className={ classes.image }
							variants={ getVariants(true) }
				/>
				<motion.img src={ `${defaultPath}${img}` } alt={ `${title}, ${description}` } className={ classes.image }
							variants={ getVariants(false) }
				/>
				
				<a href={ link }className={ classes.link } target="_blank" />
			</motion.div>

			<h3 className={ classes.title }>
				{ title }
			</h3>

			<p className={ classes.description }>
				{ description }
			</p>

			<div className={ classes.tagsRoot }>
				{ 
					tags.map((tag, index) => {
						return (
							<Tag key={ index } label={ tag } />
						)
					})
				}
			</div>
        </motion.article>
	)
}