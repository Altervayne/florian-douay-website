/* Libraries Imports */
import React, { useState } from "react"
import { makeStyles } from "tss-react/mui"
import { motion } from "framer-motion"
/* Icons Imports */
import { BsLinkedin, BsGithub, BsEnvelopeAtFill } from "react-icons/bs"



const headerTextVariants = {
	rest: {
		color: "rgba(255, 255, 250, 1)",
		transition: { duration: 0.1 }
	},
	hover: {
		color: "rgba(245, 176, 65, 1)",
		transition: { duration: 0.1 }
	}
}

const textVariants = {
	rest: {
		color: "rgba(51, 49, 56, 1)",
		transition: { duration: 0.1 }
	},
	hover: {
		color: "rgba(213, 136, 11, 1)",
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
			color: "#FFFFFA",
			outline: "none",
			border: "none",

			cursor: "pointer",

			[theme.breakpoints.down('sm')]: {
				flexGrow: "3",
			},
		},
		text: {
			margin: 0,
			padding: 0,
		},
		underline: {
			position: "absolute",
			left: 0,
			bottom: 0,

			height: "1px",
			width: "100%",
			backgroundColor: "#D5880B",
		},
		contactWindow: {
			position: "fixed",
			right: theme.spacing(16),


			borderRadius: theme.spacing(1),
			boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.37)",
			backgroundColor: "#FFFFFA",


			[theme.breakpoints.down('sm')]: {
				top: theme.spacing(16),
				right: "50%",
				transform: "translateX(50%)",

				width: "270px",
				maxWidth: "90vw"
			},
			[theme.breakpoints.up('sm')]: {
				top: theme.spacing(14),	
			},
			[theme.breakpoints.up('md')]: {
				top: theme.spacing(18),
			}
		},
		contactItemRoot: {
			display: "flex",
			alignItems: "center",

			margin: theme.spacing(2),
			padding: 0,

			fontWeight: 600,

			backgroundColor: "transparent",
			color: "#333138",
			outline: "none",
			border: "none",
		},
		contactIcon: {
			marginRight: theme.spacing(1),

			fontSize: theme.typography.pxToRem(24),
		},
		contactText: {
			position: "relative",

			margin: 0,
			padding: 0,

			textDecoration: "none",
			color: "#333138",
		}
	}
})



interface ContactItemProps {
    isLink: boolean;
    link: string;
    text: string;
    icon: string;
}



const ContactItem = ({isLink, link, text, icon}: ContactItemProps) => {
	const { classes } = useStyles()



	let IconComponent
	switch (icon) {
		case "github":
			IconComponent = BsGithub
			break;
		case "linkedin":
			IconComponent = BsLinkedin
			break;
		case "email":
			IconComponent = BsEnvelopeAtFill
			break;
		default:
			break;
	}



	return (
		<motion.div className={ classes.contactItemRoot }>
			<IconComponent className={ classes.contactIcon } />

			{ isLink 	?	<>
								<motion.a className={ classes.contactText } href={ link }
									initial="rest" animate="rest" whileHover="hover"
									variants={ textVariants }					
								>
									{ text }
									<motion.span className={ classes.underline } variants={ underlineVariants }></motion.span>
								</motion.a>
								
							</>
						:	<p className={ classes.contactText }>{ text }</p>
			}


		</motion.div>
	)
}



export default function ContactButton() {
	const { classes } = useStyles()


    const [isOpen, setIsOpen] = useState(false)


	return (
		<>
			<motion.button className={ classes.root } initial="rest" animate="rest" whileHover="hover" onClick={() => setIsOpen(!isOpen)}>
				<motion.span className={ classes.text } variants={ headerTextVariants }>{ "Contactez-moi" }</motion.span>
				<motion.span className={ classes.underline } variants={ underlineVariants }></motion.span>
			</motion.button>
			<motion.div className={ classes.contactWindow }
						initial={{
							opacity: 0,
							visibility: "hidden",
						}}
						animate={{
							opacity: isOpen ? 1 : 0,
							visibility: isOpen ? "visible" : "hidden",
							transition: {
								duration: 0.3,
								visibility: {
									delay: isOpen ? 0 : 0.3
								}
							}
						}}
			>
				<ContactItem isLink={ true } link={ "https://github.com/Altervayne/" } text={ "GitHub" } icon={"github"}/>
				<ContactItem isLink={ true } link={ "https://www.linkedin.com/in/florian-douay/" } text={ "LinkedIn" } icon={"linkedin"}/>
				<ContactItem isLink={ true } link={ "mailto:contact@florian-douay.fr" } text={ "contact@florian-douay.fr" } icon={"email"}/>
			</motion.div>
		</>
	)
}