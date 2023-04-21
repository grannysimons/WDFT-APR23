const canvasObj = {
    canvas: null,
    ctx: null,
    intervalId: null,
    clear: function() {
        this.ctx.clearRect(0, 0, 600, 400);
    },
    start: function() {
       this.canvas =  document.getElementById("myCanvas");
       this.ctx = this.canvas.getContext("2d");
       this.intervalId = setInterval(update, 60);
    },
    stop: function() {
        clearInterval(this.intervalId);
    }
}

class Rectangle {
    constructor (x, y, w, h, color, imgElement) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.color = color;
    }
    recalculatePosition(incX, incY) {
        this.x += incX;
        this.y += incY;
    }
    print() {
        canvasObj.ctx.fillStyle = this.color;
        canvasObj.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// let playerWithImage = null;
// let playerImage = document.createElement("img");
// playerImage.src = "images/player.jpg";
// playerImage.onload = ()=>{
//     playerWithImage = new Rectangle(275, 175, 50, 50, "red", playerImage);
// }


let player = new Rectangle(275, 175, 50, 50, "red");
// let obst1 = new Rectangle(601, 0, 30, 100, "green");
// let obst2 = new Rectangle(800, 0, 30, 100, "green");
let obstacles = [];
let i = 0;

const update = () => {
    i++;

    //clear canvas
    canvasObj.clear();

    //recalculate positions
    // obst1.recalculatePosition( -10, 0);
    // obst2.recalculatePosition( -10, 0);

    if(i%20 == 0) {
        let topObst_height = Math.floor(Math.random()*300);

        let bottomObst_max_height = 400 - 50 - 20 - topObst_height;
        let bottomObst_height = Math.floor(Math.random() * bottomObst_max_height);
        let newObst_TOP = new Rectangle(601, 0, 30, topObst_height, "green"); 
        let newObst_BOTTOM = new Rectangle(601, (400 - bottomObst_height), 30, bottomObst_height, "green"); 
        obstacles.push(newObst_TOP);
        obstacles.push(newObst_BOTTOM);
    }
    obstacles.forEach((obstacle)=>{
        obstacle.recalculatePosition(-10, 0);

        //is there a collision between obstacle and the player?
        if(!((player.y > (obstacle.y + obstacle.height)) || (player.x > (obstacle.x + obstacle.width)) || ((player.x + player.width) < obstacle.x) || (player.y + player.height < obstacle.y)) ) {
            //COLLISION!!!!!
            console.log("COLLISION!!!!!!!");
            canvasObj.stop();
        }

        obstacle.print();
    })


    //reprint elements
    player.print();
    // obst1.print();
    // obst2.print();
}

canvasObj.start();

let increase = 20;
document.body.addEventListener("keydown", (e)=>{
    if(e.key == "ArrowUp") {
        player.recalculatePosition(0,-increase);
    }
    if(e.key == "ArrowDown") {
        player.recalculatePosition(0,increase);
    }
    if(e.key == "ArrowLeft") {
        player.recalculatePosition(-increase, 0);
    }
    if(e.key == "ArrowRight") {
        player.recalculatePosition(increase, 0);
    }

})
