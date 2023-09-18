'use client'
/* Libraries Imports */
import React, { useRef, useEffect } from 'react'
import { makeStyles } from "tss-react/mui"
/* Utils Imports */
import canvasAnimation from '../_utils/canvasAnimation'



const useStyles = makeStyles()((theme) => {
	return {
		root: {
			position: "fixed",
            zIndex: "0",
            top: "0",
            left: "0",

            width: "100vw",
            height: "100vh",

            backgroundColor: "black",
			background: "linear-gradient(235deg, hsla(284, 95%, 8%, 1) 0%, #0F131E 100%)"
		},
	}
})



const AnimationCanvas = () => {
    const { classes } = useStyles()
    const canvasRef = useRef<HTMLCanvasElement | null>(null)



    useEffect(() => {
        const canvas = canvasRef.current ?? { width: 0, height: 0, getContext(ctx: string) { return "" }};
        const context = canvas.getContext('2d')
        const circles: any[] = []

        canvasAnimation(canvas, context, circles)

        function windowResizeHandler() {
            console.log("window resize detected")
    
            const previousWidth = canvas.width
            const previousHeight = canvas.height
            const newWidth = window.innerWidth
            const newHeight = window.innerHeight
    
            const xRatio = previousWidth/newWidth
            const yRatio = previousHeight/newHeight
    
            canvas.width = newWidth
            canvas.height = newHeight
    
    
            for(let circle of circles) {
                circle.x /= xRatio
                circle.y /= yRatio
            }
        }

        window.addEventListener('resize', windowResizeHandler, true)

        return () => {
            window.removeEventListener('resize', windowResizeHandler, true)
        }
    }, [])



    return <canvas className={ classes.root } ref={ canvasRef } />
}



export default AnimationCanvas