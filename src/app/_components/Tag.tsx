/* Libraries Imports */
import { makeStyles } from "tss-react/mui"



const useStyles = makeStyles()((theme) => {
	return {
		root: {
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

        </p>
	)
}