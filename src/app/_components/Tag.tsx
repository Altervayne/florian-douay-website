/* Libraries Imports */
import { makeStyles } from "tss-react/mui"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
            height: "auto",
            width: "auto",
            padding: "4px",
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1),

            borderRadius: theme.spacing(0.5),

            boxSizing: "border-box",

            color: "#F0F0F0",
            backgroundColor: "#472156",

            fontWeight: "600",
            fontSize: theme.typography.pxToRem(12),
		},
	}
})



interface TagProps {
    label: string;
}



export default function Tag({ label }: TagProps) {
	const { classes } = useStyles()


	return (
		<p className={ classes.root }>
            { label }
        </p>
	)
}