let flap;
let wingclip;
let wingbottomclip;

let wingarrayUL = [-197,30, -163, -158, -90, -151];
let wingarrayUR = [217,30, 183, -158, 110, -151];
let wingarrayLL = [-197,30, -163, -158, -90, -151];
let wingarrayLR = [217,30, 183, -158, 110, -151];

var wingPatternImg;
var wingPatternDarkImg;

function preload(){
  wingPatternImg = loadImage("wing_pattern.png");
  wingPatternDarkImg = loadImage("dark_moth_wing_pattern.png");

  antennaeImg = loadImage("antennae.png")
  bodyImg = loadImage("moth_body_texture.png")
}

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES)
  rectMode(CENTER)
  moth.position = createVector(screenHeight * 0.5, screenWidth * 0.5 - 50)
}

function draw() {
  flap = sin(frameCount * 10)*15;
  flapUL = -flap-90
  flapUR = flap+90
  flapLL = -flap*2-100
  flapLR = flap*2+100

  antennaeMove = sin(frameCount * 5)*8;
  antennaeMoveL = -antennaeMove;
  antennaeMoveR = antennaeMove;
  
  background("rgb(180,214,214)");
  // flap = sin(frameCount * 8)*15; 
  // 8 is the flap speed, 5 controls the flap range extremes
  

  push()
  clip(drawBody)
  image(bodyImg, width/2-20, height/2-70, 40, 140)
  pop()
  


  
  //drawRightWing(flap)
  
  wingtestLL= new Wings2(285, 160, flapLL, false, false, -200, -180, wingarrayLL, wingPatternImg, wingPatternDarkImg)
  //wingtestLL= new Wings2(-80, -100, flapLL, false, -200, -180, wingarrayLL, wingPatternImg, wingPatternDarkImg)
  //console.log(wingtestLL, 'is working')
  wingtestLL.update()


  wingtestLR = new Wings2(309, 160, flapLR, false, true, 0, -200, wingarrayLR, wingPatternImg, wingPatternDarkImg)
  wingtestLR.update()
  
  wingtestUL = new Wings2(288, 150, flapUL , true, false, -200, -180, wingarrayUL, wingPatternImg, wingPatternDarkImg);
  wingtestUL.update()

  wingtestUR = new Wings2(307, 150, flapUR, true, true, 0, -200, wingarrayUR, wingPatternImg, wingPatternDarkImg)
  wingtestUR.update() 
  
  
  //drawAntennaeLeft()
  //drawAntennaeRight()
  drawAntennaeTest()
  drawAntennaeTestL()
  

  // wingtestUR = new Wings2(307, 150, flapUR, true, 0, -200, wingarrayUR, wingPatternImg, wingPatternDarkImg)
  // wingtestUR.update() 
}

function drawBody(){
  push()
  fill("rgb(180,135,104)")
  ellipse(width/2-3,height/2-5,30,120,220) // 5 args
  pop()
}
