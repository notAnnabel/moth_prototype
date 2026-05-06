let dots = [
  { x: 70, y: 90, r: 200, label: "Did you know that... " },
  { x: 500, y: 200, r: 200, label: "The sesond dot" },
  { x: 900, y: 80, r: 200, label: "3 Why do I have to suffer?!" }
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
    rect(dot.x, dot.y, dot.r, dot.r, 10);

    // when hover over, show a text
    if (isHovered) {
      drawLabel(dot);
    }
  }
}


function drawLabel(dot) {


let div = createDiv(dot.label);
  div.addClass('p5div');
  div.position(dot.x, dot.r);

  setTimeout(() => {
    div.remove();
  }, 2000);
  
}