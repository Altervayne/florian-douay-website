import getRandomInRange from './mathHelpers'



const addCircle = (canvas: any, circles: any, x: any, y: any) => {
    const radius = Math.random() * 5 + 2

    if(x + radius >= canvas.width) {
        x -= radius
    } else if(x - radius <= 0) {
        x += radius
    }

    if(y + radius >= canvas.height) {
        y -= radius
    } else if(y - radius <= 0) {
        y += radius
    }

    const circle = {
        x: x,
        y: y,
        radius: radius,
        dx: Math.random() * 1 - .5,
        dy: Math.random() * 1 - .5,
        color: `rgba(255, 255, 255, ${getRandomInRange(0.1, 0.5)})`,
        deleted: false
    }

    circles.push(circle)
}



const borderWarp = (canvas: any, circle: any) => {
    if(circle.x - circle.radius > canvas.width) {
        circle.x = -circle.radius
    } else if(circle.x + circle.radius < 0) {
        circle.x = canvas.width + circle.radius
    }

    if(circle.y - circle.radius > canvas.height) {
        circle.y = -circle.radius
    } else if(circle.y + circle.radius < 0) {
        circle.y = canvas.height + circle.radius
    }
}



const drawCircles = (ctx: any, canvas: any, circles: any) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for(let circle of circles) {
        circle.x += circle.dx
        circle.y += circle.dy

        borderWarp(canvas, circle)

        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fillStyle = circle.color
        ctx.fill()
    }
}




export { addCircle, drawCircles }