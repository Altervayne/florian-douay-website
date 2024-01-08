/* eslint-disable @next/next/no-img-element */
'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'
import { motion, Variants } from 'framer-motion'
import { useMediaQuery, useTheme } from '@mui/material'
/* Types & Data Imports */
import { ProjectCardData } from '../_types/ProjectCardTypes'
const projectCards: ProjectCardData[] = require("../_data/projects.json")
/* Variants Imports */
import { slideIn } from '../_utils/animationVariants'
/* Components Imports */
import SectionTitle from '../_components/SectionTitle'
import ProjectCard from '../_components/ProjectCard'


/* Defining component styles */
const useStyles = makeStyles()((theme) => {
    return {
        root: {
            position: "relative",
            width: "100%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            overflow: "hidden",

            backgroundColor: "rgba(255, 255, 250, 1)",

            paddingBottom: theme.spacing(8),
        },
        subRoot: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            boxSizing: "border-box",

            width: "100%",
            maxWidth: "1200px",
            paddingTop: theme.spacing(4),

            color: "#333138",

            [theme.breakpoints.down('sm')]: {
				maxWidth: "90vw",
			},
        },



        projectListRoot: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            alignContent: "flex-start",

            width: "100%",
        },
    }
})


/* Defining component function */
export default function ThirdSection() {
    const { classes } = useStyles()
    const theme = useTheme()
	
	const isPhone = useMediaQuery(theme.breakpoints.down('sm'))



    return (      
        <section className={ classes.root }>
            <motion.div
                className={ classes.subRoot }

                initial="rest"
                whileInView="loaded"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}

                variants={ slideIn }
            >
                <SectionTitle text="Projets" />

                <div className={ classes.projectListRoot }>
                    {
                        projectCards.map((project, index) => {
                            return (
                                <ProjectCard key={ index } { ...project }/>
                            )
                        })
                    }
                </div>
            </motion.div>
        </section>
    )
}
