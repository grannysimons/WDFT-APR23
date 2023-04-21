let canvasElement = document.getElementById("myCanvas");
let ctx = canvasElement.getContext("2d");

// let canvasElement2 = document.getElementById("myCanvas2");
// let ctx2 = canvasElement2.getContext("2d");
// ------------- SOLID RECTANGLE


ctx.fillStyle = "rgb(10,0,200)";
// ctx.fillRect(x, y, width, height);
ctx.fillRect(0, 0, 90, 40);
ctx.fillStyle = "#FF3377";
ctx.fillRect(50, 50, 100, 200);

// ctx2.fillStyle = "blue";
// ctx2.fillRect(0, 0, 400, 100);

// -------------- STROKE RECTANGLE
ctx.strokeStyle = "red";
ctx.lineWidth = 10;  //px
ctx.strokeRect(250, 300, 100, 50);

// -------------- CIRCLES

ctx.beginPath();
// ctx.arc(x, y, r, anguloIniRad, anguloFinRad, counterclockwise);
ctx.arc(400, 170, 100, 0, Math.PI*2, true);
// ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(250, 80, 40, 0, -Math.PI/2);
ctx.stroke();
// ctx.fill();
ctx.closePath();

// -------------- IMAGE
let image = document.createElement("img");  //<img src="" alt="" onload="clickFunction()">
// let image2 = new Image();   //<img>
image.src = "images/image.png";
image.onload = () => {
    ctx.drawImage(image, 380, 100, 60, 90);
    
    //------------- TEXTS:
    let textToShow = "HELLO!!!!";
    ctx.font = "62px Arial";
    ctx.fillStyle = "#0000FF";
    ctx.fillText(textToShow, 200, 200);

    // ctx.clearRect(0, 0, 300, 400);

}

//------------- TEXTS:
let textToShow = "SECOND HELLO";
ctx.font = "62px serif";
ctx.fillStyle = "#444";
ctx.fillText(textToShow, 200, 400);

//------------ CLEAR:
// ctx.clearRect(0, 0, 300, 400);

ctx.clearRect(0, 0, 600, 400);