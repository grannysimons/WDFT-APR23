// let canvas = document.createElement("canvas")
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let vx = 0;
let vy = 0;

let x_obst = 601;
let x_obst2 = 650;

ctx.fillStyle = "green";

setInterval(()=>{
    //clear canvas
    ctx.clearRect(0, 0, 600, 400);

    //recalculate positions
    x += vx;
    y += vy;
    if(x < 0) x = 0;
    if(y < 0) y = 0;
    if(y > 400 - 50) y = 400 - 50;
    if(x > 600 - 50) x = 600 - 50;

    x_obst -= 3;
    x_obst2 -= 3;
    
    //reprint elements
    ctx.strokeRect(x, y, 50, 50);   //player
    ctx.fillRect(x_obst, 0, 20, 100);
    ctx.fillRect(x_obst2, 0, 20, 100);
},60);

document.body.addEventListener("keydown", (e)=>{
    console.log(e.key);
    if(e.key == "ArrowUp") {
        // ctx.clearRect(0, 0, 600, 400);
        // y -= 10;
        vy -= 10;
        // ctx.strokeRect(x, y, 50, 50);
    }
    if(e.key == "ArrowDown") {
        // ctx.clearRect(0, 0, 600, 400);
        // y += 10;
        vy += 10;
        // ctx.strokeRect(x, y, 50, 50);
    }
    if(e.key == "ArrowLeft") {
        // ctx.clearRect(0, 0, 600, 400);
        // x -= 10;
        vx -= 10;
        // ctx.strokeRect(x, y, 50, 50);
    }
    if(e.key == "ArrowRight") {
        // ctx.clearRect(0, 0, 600, 400);
        // x += 10;
        vx += 10;
        // ctx.strokeRect(x, y, 50, 50);
    }
    
});

document.body.addEventListener("keyup", (e)=>{
    vx = 0;
    vy = 0;
})