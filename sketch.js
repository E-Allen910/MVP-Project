let lives = 5
let playerXPos = 500;
let playerYPos = 900;
let ateroidXPos = random(0,1000);
let asteroidYPos = random(0,1000);
let asterHeight = random(50, 100);
let plrLeft,  plrRight, plrUp, plrDown;
let asterLeft, asterRight, asterUp, asterDown;
function setup(){
    createCanvas(1000,1000);
    noStroke();
    rectMode(CENTER);
}

//Player Functions and Asteroid Spawning
function draw(){
    fill(255);
    background(15, 24, 94);
    rect(playerXPos,playerYPos, 100,100);
    //Player Controlling Keys
    if (keyIsDown(LEFT_ARROW)){
        playerXPos -= 5
    }
    
    if (keyIsDown(RIGHT_ARROW)){
        playerXPos += 5
    }
    //Lives Key
    fill(255);
    textSize(50)
    text("Lives:", 40, 100);
    text(lives, 180, 100);    
}



