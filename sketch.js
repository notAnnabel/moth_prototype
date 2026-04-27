let flap;
let wingclip;
let wingbottomclip;

let wingarrayUL = [-197, 30, -163, -158, -90, -151];
//let wingarrayUL = [-394,60, -326, -316, -180, -302];

let wingarrayUR = [217, 30, 183, -158, 110, -151];
let wingarrayLL = [-197, 30, -163, -158, -90, -151];
let wingarrayLR = [217, 30, 183, -158, 110, -151];

let wingPatternImg;
let wingPatternDarkImg;
let bg;
let grass1;
let grass2;


///////////////////
const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

var g_landmarks = [];


var video;
var cam;
//////////////////

function preload() {
  wingPatternImg = loadImage("wing_pattern.png");
  wingPatternDarkImg = loadImage("dark_moth_wing_pattern.png");

  antennaeImg = loadImage("antennae.png")
  bodyImg = loadImage("moth_body_texture.png")
  //bodyImg.resize(3000,3000)

  //Background grasses
  grass1 = loadImage("assets/grass1.gif");
  grass2 = loadImage("assets/grass2.gif");

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


  ///////////
  var mycanvas = createCanvas(640, 360);
  mycanvas.parent('#p5canvas');
  video = createCapture(VIDEO);
  video.size(640, 360);
  video.hide();
}

function draw() {
  flap = sin(frameCount * 10) * 15;
  flapUL = -flap - 90
  flapUR = flap + 90
  flapLL = -flap * 2 - 100
  flapLR = flap * 2 + 100

  antennaeMove = sin(frameCount * 5) * 8;
  antennaeMoveL = -antennaeMove;
  antennaeMoveR = antennaeMove;

  /// divisionWidth = 
  /// divisionHeight = 
  background(0);
  scale(2, 2)
  image(bg, 0, 0, width / 2, height / 2);

  //Grass images position and scale
  let grassHeight = (height / 2) / 2;  // 1/2 of background height
  let grass1Width = grassHeight * (grass1.width / grass1.height);  // Keep grass1 proportional
  let grass2Width = grassHeight * (grass2.width / grass2.height);  // Keep grass2 proportional
  let grassY = (height / 2) - grassHeight;  // Position at bottom of background
  let grass1Y = grassY + 25;  // Move grass1 lower by 25 pixels

  image(grass1, 0, grass1Y, grass1Width, grassHeight);  // Left side
  image(grass2, (width / 2) - grass2Width, grassY, grass2Width, grassHeight);  // Right side

  // background(bg);
  // flap = sin(frameCount * 8)*15; 
  // 8 is the flap speed, 5 controls the flap range extremes


  push()
  clip(drawBody)
  image(bodyImg, width / 5 - 20, height / 3 - 70, 40, 140)
  pop()


  //drawRightWing(flap)

  wingtestLL = new Wings2(windowWidth / 5 - 9, height / 3 - 55, flapLL, false, false, -200, -180, wingarrayLL, wingPatternImg, wingPatternDarkImg)
  wingtestLL.update()


  wingtestLR = new Wings2(windowWidth / 5 + 5, height / 3 - 55, flapLR, false, true, 0, -200, wingarrayLR, wingPatternImg, wingPatternDarkImg)
  wingtestLR.update()

  wingtestUL = new Wings2(windowWidth / 5 - 9, height / 3 - 55, flapUL, true, false, -200, -180, wingarrayUL, wingPatternImg, wingPatternDarkImg);
  wingtestUL.update()

  wingtestUR = new Wings2(windowWidth / 5 + 5, height / 3 - 55, flapUR, true, true, 0, -200, wingarrayUR, wingPatternImg, wingPatternDarkImg)
  wingtestUR.update()


  // transX, transY, flapValue, wingTopBool, isRightBool, imageShiftX, imageShiftY, wingShape, wingClip, wingBottomClip

  drawAntennaeTest()
  drawAntennaeTestL()

  // document.getElementById("camera_capture") = function(){
  //   //onResults(results)
  // }

  // Draw UI in front at normal scale
  push();
  resetMatrix();
  drawUI();
  pop();

}



  /////////// camera 
  if (g_landmarks.length > 0) {
    beginShape(POINTS);
    let count = 0;
    for (landmark of g_landmarks) {
      vertex(
        640 * landmark.x,
        360 * landmark.y
      );
      text(count, 640 * landmark.x, 360 * landmark.y);
      count++;
    }
    endShape();

  }

  function drawBody() {
    push()
    fill("rgb(180,135,104)")
    ellipse(windowWidth / 5 - 3, height / 3 - 5, 30, 120, 220) // 5 args
    //ellipse(width/2-3,height/2-5,30,220) // 5 args
    pop()
  }


  /////////////// added functions test
  function onResults(results) {
    if (results.multiHandLandmarks) {
      for (const landmarks of results.multiHandLandmarks) {
        g_landmarks = landmarks;
      }

      // 指文字認識をさせるタイミングはここでやるのがいいと思う．

    }
  }

const hands = new Hands({
    locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }
  });
  hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 1,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
hands.onResults(onResults);

const camera = new Camera(videoElement, {
    onFrame: async () => {
      await hands.send({ image: videoElement });
    },
    width: 1280,
    height: 720
});
  camera.start();


function keyPressed() {
  console.log(g_landmarks);
}




