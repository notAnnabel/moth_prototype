let flap;
let wingclip;
let wingbottomclip;

let wingarrayUL = [-197,30, -163, -158, -90, -151];
//let wingarrayUL = [-394,60, -326, -316, -180, -302];

let wingarrayUR = [217,30, 183, -158, 110, -151];
let wingarrayLL = [-197,30, -163, -158, -90, -151];
let wingarrayLR = [217,30, 183, -158, 110, -151];

let wingPatternImg;
let wingPatternDarkImg;
let bg;

const videoElement = document.getElementsByClassName("input_video")[0];

function preload(){
  wingPatternImg = loadImage("wing_pattern.png");
  wingPatternDarkImg = loadImage("dark_moth_wing_pattern.png");

  antennaeImg = loadImage("antennae.png")
  bodyImg = loadImage("moth_body_texture.png")
  //bodyImg.resize(3000,3000)

  // ----------I'll delete "console.log" thing later----------
  bg = loadImage("assets/background-grass.png", 
    () => console.log("OK loaded"),
    () => console.log("FAILED")
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  rectMode(CENTER)
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

  /// divisionWidth = 
  /// divisionHeight = 
  background(0);
  scale(2,2)
  image(bg, 0, 0, width/2, height/2);
  
  
  // background(bg);
  // flap = sin(frameCount * 8)*15; 
  // 8 is the flap speed, 5 controls the flap range extremes
  

  push()
  clip(drawBody)
  image(bodyImg, width/5-20, height/3-70, 40, 140)
  pop()
  
  
  //drawRightWing(flap)
  
  wingtestLL= new Wings2(windowWidth/5-9, height/3 - 55, flapLL, false, false, -200, -180, wingarrayLL, wingPatternImg, wingPatternDarkImg)
  wingtestLL.update()


  wingtestLR = new Wings2(windowWidth/5+5, height/3 - 55, flapLR, false, true, 0, -200, wingarrayLR, wingPatternImg, wingPatternDarkImg)
 wingtestLR.update()
  
  wingtestUL = new Wings2(windowWidth/5-9, height/3 - 55, flapUL , true, false, -200, -180, wingarrayUL, wingPatternImg, wingPatternDarkImg);
  wingtestUL.update()

  wingtestUR = new Wings2(windowWidth/5+5, height/3 - 55, flapUR, true, true, 0, -200, wingarrayUR, wingPatternImg, wingPatternDarkImg)
  wingtestUR.update() 
  

  // transX, transY, flapValue, wingTopBool, isRightBool, imageShiftX, imageShiftY, wingShape, wingClip, wingBottomClip
  
  drawAntennaeTest()
  drawAntennaeTestL()
  
  // document.getElementById("camera_capture") = function(){
  //   //onResults(results)
  // }
  
}

function drawBody(){
  push()
  fill("rgb(180,135,104)")
  ellipse(windowWidth/5-3,height/3-5,30,120,220) // 5 args
  //ellipse(width/2-3,height/2-5,30,220) // 5 args
  pop()
}
