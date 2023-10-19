import { Variants } from "framer-motion";



const slideIn: Variants = {
    rest: {
        opacity: 0,
        translateY: "20%"
    },
    loaded: {
        opacity: 1,
        translateY: "0%"
    }
}



export { slideIn }