let dots = [
  { x: 60, y: 650, r: 50, label: "The first dot" },
  { x: 700, y: 770, r: 50, label: "The sesond dot" },
  { x: 1250, y: 670, r: 50, label: "3 Why do I have to suffer?!" }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(16);
  textFont("Arial");
}

function draw() {
  background(20);

  for (let dot of dots) {
    let isHovered = dist(mouseX, mouseY, dot.x, dot.y) < dot.r / 2;

    // rysowanie kropki
    noStroke();
    fill(isHovered ? 180 : 255);
    circle(dot.x, dot.y, dot.r);

    // jeśli mysz jest nad kropką, pokaż tekst obok
    if (isHovered) {
      drawLabel(dot);
    }
  }
}

function drawLabel(dot) {
  let margin = 5;
  let padding = 8;

  let textW = textWidth(dot.label);
  let textH = 20;

  let boxX = dot.x + dot.r / 2 + margin;
  let boxY = dot.y - textH / 2 - padding / 2;

  // ramka tekstu
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(boxX, boxY, textW + padding * 2, textH + padding, 6);

  // tekst
  noStroke();
  fill(0);
  text(dot.label, boxX + padding, boxY + textH);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}