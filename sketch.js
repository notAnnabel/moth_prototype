let flap;
let wingclip;
let wingbottomclip;

let wingimgtop;
let wingimgbottom;

let wingPatternImg;
let wingPatternDarkImg;
let bg;
let grass1;
let grass2;

let wingtestLL;


///////////////////
const videoElement = document.getElementsByClassName('input_video')[0];

var g_landmarks = [];


var video;
var cam;
//////////////////

function preload() {
  wingPatternImg = loadImage("assets/moth-assets/wing_pattern.png");
  wingPatternDarkImg = loadImage("assets/moth-assets/dark_moth_wing_pattern.png");

  // testing
  wingTrimTop = loadImage("assets/moth-assets/moth_trimmed_wing_top_R.png")
  wingTrimBottom = loadImage("assets/moth-assets/moth_trimmed_wing_bottom_R.png")
  ////////

  /// testing again -- future varibles just incase///
  wingTrimTopL = loadImage("assets/moth-assets/moth_trimmed_wing_top_L.png")
  wingTrimBottomL = loadImage("assets/moth-assets/moth_trimmed_wing_bottom_L.png")


  antennaeImg = loadImage("assets/moth-assets/antennae.png")
  bodyImg = loadImage("assets/moth-assets/moth_body_texture.png")
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

  // pre calculate sines
  for (let i = 0; i < flapLength; i++) {
    let angle = i * 360 / flapLength;
    flapArray.push(sin(angle) * 15);
  }

  var mycanvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  rectMode(CENTER)


  ///////////
  mycanvas.parent('#p5canvas');
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  // video.hide();

  // create wing objects
  wingtestLL = new Wing(windowWidth / 5 - 9, height / 3 - 55, false, false, -200, 0, wingTrimTopL, wingTrimBottomL);
  wingtestLR = new Wing(windowWidth / 5 + 5, height / 3 - 55, false, true, 0, 0, wingTrimTop, wingTrimBottom);
  wingtestUL = new Wing(windowWidth / 5 - 9, height / 3 - 55, true, false, -200, 0, wingTrimTopL, wingTrimBottomL);
  wingtestUR = new Wing(windowWidth / 5 + 5, height / 3 - 55, true, true, 0, 0, wingTrimTop, wingTrimBottom);
  setupUI();
}

let flapArray = [];
let flapLength = 1000;


function draw() {

  // let startTime = performance.now();
  flap = sin(frameCount * 10) * 15;
  // let endTime = performance.now();

  // console.log(endTime - startTime);

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

  // 8 is the flap speed, 5 controls the flap range extremes


  // let startTime = performance.now();
  push()
  clip(drawBody)
  image(bodyImg, width / 5 - 20, height / 3 - 70, 40, 140)
  pop()
  // let endTime = performance.now();
  // console.log(endTime - startTime);

  wingtestLL.update(flapLL);
  wingtestLR.update(flapLR);
  wingtestUL.update(flapUL);
  wingtestUR.update(flapUR);



  //TO DO -> remove constructors & use update function
  drawAntennaeTest()
  drawAntennaeTestL()

  // Draw UI in front at normal scale
  push();
  resetMatrix();
  drawUI();
  pop();





  /////////// camera 


  //pointerFinger = g_landmark[8];
  if (g_landmarks[8]) {
    push();
    // resetMatrix();
    scale(.5, .5);
    beginShape(POINTS);
    let count = 0;
    for (landmark of g_landmarks) {
      vertex(
        X_LANDMARK_MULTIPLIER * landmark.x,
        Y_LANDMARK_MULTIPLIER * landmark.y
      );
      push()
      fill("white")
      text(count, windowWidth * landmark.x, windowHeight * landmark.y);
      count++;
      pop()
    }
    endShape();
    pop();
  }

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
      g_landmarks = landmarks.map((value) => {
        return { x: 1 - value.x, y: value.y, z: value.z };
      });
    }

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
  minDetectionConfidence: 0.2,
  minTrackingConfidence: 0.2
});
hands.onResults(onResults);

let cameraFrame = 0;

const camera = new Camera(videoElement, {
  onFrame: async () => {
    cameraFrame++;
    if (cameraFrame % 5 === 0)
      await hands.send({ image: videoElement });
  },
  width: 1280,
  height: 720
});
camera.start();


// function keyPressed() {
//   console.log(g_landmarks);
// }




