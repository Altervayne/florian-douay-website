'use client'
/* Library Imports */
import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: "flex",
            alignItems: "center",

            width: "100%",

            marginTop: theme.spacing(7),
            marginBottom: theme.spacing(7),
        },
        dividerLine: {
            flexGrow: 1,

            height: "1px",
            width: "auto",

            backgroundColor: "rgba(29, 1, 40, 1)",
        },
        titleText: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),

            color: "hsla(284, 95%, 8%, 1)",

            fontSize: theme.typography.pxToRem(36),
            fontWeight: 600,

            [theme.breakpoints.down('sm')]: {
                textAlign: "center",
                fontSize: theme.typography.pxToRem(28),
            }
        },
        titleImage: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),

            [theme.breakpoints.down('sm')]: {
                maxWidth: "70vw",
            },
            [theme.breakpoints.up('sm')]: {
                maxWidth: "450px",
            }
        }
    }
})

interface SectionTitleProps {
    text: string;
}



export default function SectionTitle({ text }: SectionTitleProps) {
    const { classes } = useStyles()

    return (      
        <h2 className={ classes.root }>
            <span className={ classes.dividerLine }></span>
            
            <span className={ classes.titleText }>
                { text }
            </span>

            <span className={ classes.dividerLine }></span>
        </h2>
    )
}