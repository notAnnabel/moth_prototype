let dots = [
  { x: 70, y: 90, r: 100, label: "Did you know that..." },
  { x: 500, y: 200, r: 100, label: "The sesond dot" },
  { x: 900, y: 80, r: 100, label: "3 Why do I have to suffer?!" }
];
let maxWidth = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign("CENTER");
}

function preload(){

};

function drawUI() {

  for (let dot of dots) {
    let isHovered = dist(mouseX, mouseY, dot.x, dot.y) < dot.r / 2;

    // dots
    noStroke();
    fill(isHovered ? 10 : 255,255,255,100);
    circle(dot.x, dot.y, dot.r);

    // when hover over, show a text
    if (isHovered) {
      drawLabel(dot);
    }
  }
}

// function drawLabel(dot) {
//   let margin = 6;
//   let padding = 4;

//   let textW = textWidth(dot.label);
//   let textH = 50;

//   let boxX = dot.x + dot.r / 2 + margin;
//   let boxY = dot.y - textH / 2 - padding / 2;

//   // text frame
//   fill(255);
//   noStroke();
//   strokeWeight(1);
//   rect(boxX, boxY, textW + padding * 2, textH + padding, 8);

//   // tekst
//   noStroke();
//   fill(0);
//   text(dot.label, boxX, boxY, padding/2);
// }


function drawLabel(dot) {


let div = createDiv(dot.label);
  div.addClass('p5div');
  div.position(dot.x, dot.r);

  setTimeout(() => {
    div.remove();
  }, 2000);
  
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }
