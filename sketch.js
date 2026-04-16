let flap;
let wingclip;
let wingbottomclip;

// let wingarrayUL = [-197,30, -163, -158, -90, -151];
// let wingarrayUR = [217,30, 183, -158, 110, -151];
// let wingarrayLL = [-197,30, -163, -158, -90, -151];
// let wingarrayLR = [217,30, 183, -158, 110, -151];

var wingPatternImg;
var wingPatternDarkImg;

let moth = new Moth();

let screenWidth = 600;
let screenHeight = 400;

function preload(){
  wingPatternImg = loadImage("wing_pattern.png");
  wingPatternDarkImg = loadImage("dark_moth_wing_pattern.png");
}

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES)
  rectMode(CENTER)
  moth.position = createVector(screenHeight * 0.5, screenWidth * 0.5 - 50)
}

function draw() {
  flap = sin(frameCount * 8)*15;
  flapUL = -flap-90
  flapUR = flap+90
  flapLL = -flap*2-200
  flapLR = flap*2+100
  
  background("rgb(180,214,214)");
  // flap = sin(frameCount * 8)*15; 
  // 8 is the flap speed, 5 controls the flap range extremes

  moth.update();
  //drawBody()


  
  //drawRightWing(flap)
  
  //wingtestLL= new Wings2(287, 160, flapLL, false, -200, -180, wingarrayLL)
  // wingtestLL= new Wings2(-80, -100, flapLL, false, -200, -180, wingarrayLL, wingPatternImg, wingPatternDarkImg)
  // //console.log(wingtestLL, 'is working')
  // wingtestLL.update()

  // wingtestLR = new Wings2(309, 160, flapLR, false, 0, -200, wingarrayLR, wingPatternImg, wingPatternDarkImg)
  // wingtestLR.update()


  // wingtestUL = new Wings2(287, 150, flapUL , true, -200, -180, wingarrayUL, wingPatternImg, wingPatternDarkImg);
  // wingtestUL.update()

  // wingtestUR = new Wings2(307, 150, flapUR, true, 0, -200, wingarrayUR, wingPatternImg, wingPatternDarkImg)
  // wingtestUR.update() 
}

