//let x;
//let y;
//let direction;

//let img;

let ball = {
    x: 0,
    y: 800,
    // xspeed and yspeed are named value pairs witin let ball variable which becomes a container
    xspeed: 8,
    yspeed: -6
};

let w;
let apollox;

let trash = [];

let fly = 0;

let garfield;
let garfieldImg;

let garfieldBounce;

let apolloImg;

let value = 0;

let xpos = 0;
let ypos = 0;

let txt;
let mic;

function preload() {
    garfieldImg = loadImage('garfield/garfield000.png');
    apolloImg = loadImage('apollo/earthapollo003.png');

        for (let t = 0; t < 68; t++) {
            trash[t] = loadImage("plastics/plastic" + t + ".png")
        }

}
 

function windowResized() {
    // centerCanvas();
    resizeCanvas(windowWidth, windowHeight);
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    
    // Mic Start
    txt = select(".text")
    mic = new p5.AudioIn()
    mic.start()

    pixelDensity(1);

    imageMode(CENTER);

    // trash[r].resize(width, height);

    // background(0);
    frameRate(60);

    w = 100;
    apollox - 300;

    drawGrid();

    // image(apolloImg,w);
    push();
    translate(width / 2, height / 2);
    image(apolloImg,xpos, ypos, 100,100);
    // xpos += random(-2, 2);
    // ypos += random(-2, 2);
    pop();
    // w = w - 0.25;
    // apollox = apollox - 1;

    garfieldImg.resize(220, 120);
    // garfieldBounce = createGraphics(window.innerWidth, window.innerHeight);
      
}

function draw(){
    move();
    bounce();
    display();

    // let level = mic.getLevel()
    // console.log(level);
  
    // let wght = map(level, 0, 0.1, 200, 900)
    // let slnt = 0
  
    // txt.style("font-variation-settings", `'wght' ${wght}, 'slnt' ${slnt}`)
    
    // drawGarfieldBounce();
    
    cursor(HAND);

    let level = mic.getLevel()
    // console.log(level);
  
    let wght = map(level*2, 0, 1, 300, 900)
    let slnt = 0
  
    txt.style("font-variation-settings", `'wght' ${wght}, 'slnt' ${slnt}`)

    // image(garfieldBounce, 0, 0);

}


function mouseMoved() {
    imageMode(CENTER);
    let r = floor(random(68));
    image(trash[r], mouseX, mouseY);
}

// function mouseMoved() {
//     imageMode(CENTER);
//     let r = floor(random(68));
//         image(trash[r], mouseX, mouseY, scale*trash[r].height*width/trash[r].width);
// }


// function mouseMoved() {
//     imageMode(CENTER);
//     let r = floor(random(68));
//         image(trash[r], mouseX, mouseY, scale*width, scale*trash[r].height*width/trash[r].width);
// }

function drawGrid() {
    strokeWeight(3);
	stroke(255, 240, 245);
	for (let x=-width; x < width; x+=120) {
		line(x, -height, x, height);
	}
	for (let y=-height; y < height; y+=120) {
		line(-width, y, width, y);
	}

}

// function drawGarfieldBounce(){

    function move(){
        ball.x = ball.x + ball.xspeed;
        ball.y = ball.y + ball.yspeed;
    }
    
    function bounce(){
        if (ball.x > width || ball.x < 0){
            ball.xspeed = ball.xspeed * -1;
        }
    
        if (ball.y > height || ball.y < 0){
            ball.yspeed = ball.yspeed * -1;
        }
    }

    function display(){
        push();
        translate(width / 2, height / 2);
        rotate(radians(fly));
        image(garfieldImg, ball.x, ball.y);
        fly -= 1;
        pop();
    }

// }


// function move(){
//     ball.x = ball.x + ball.xspeed;
//     ball.y = ball.y + ball.yspeed;
// }

// function bounce(){
//     if (ball.x > width || ball.x < 0){
//         ball.xspeed = ball.xspeed * -1;
//     }

//     if (ball.y > height || ball.y < 0){
//         ball.yspeed = ball.yspeed * -1;
//     }
// }


// function display(){
//     // for (let i = 0; i < width; i += 140){
//     //     line(i, 0, i, height);
//     //     for (let l = 0; l < height; l += 140){
//     //         line(width, l, 0, l);
//     //     }
//     // }
    
    
//     // image(garfieldImg, ball.x, ball.y);
//     // garfieldImg.resize(300, 200);
// }

// class Trash {
//     constructor(x, y, img) {
//       this.x = x;
//       this.y = y;
//       this.plastic = random(plastics);
//     }

// function mousePressed(){
//     garfieldImg.attractionPoint(2, mouseX, mouseY);
//   }







// function windowResized() {
//     resizeCanvas(window.innerWidth, window.innerHeight);
// }

  