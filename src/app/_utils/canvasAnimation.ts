import { addCircle, drawCircles } from './canvasAnimationLogic'



function canvasAnimation(canvas: any, ctx: any, circles: any) {

    /* Setting canvas dimensions */
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight


    /* Initializing the circles defined amount */
    const circleAmount = 30


    for(let i = 0; i < circleAmount; i++) {
        let x = Math.random() * canvas.width
        let y = Math.random() * canvas.height

        addCircle(canvas, circles, x, y)
    }

    
    /* Initializing animate function then starting animation */
    function animate() {
        requestAnimationFrame(animate)
        drawCircles(ctx, canvas, circles)
    }

    animate()
}



export default canvasAnimation