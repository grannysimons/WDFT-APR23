// let canvas = document.createElement("canvas")
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = 40;

setInterval(()=>{
    ctx.clearRect(0, 0, 600, 400);

    x += 10;
    
    ctx.strokeRect(x, 150, 50, 50);
},1000);
