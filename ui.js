
let maxWidth = 800;

function setupUI() {

  dots = [
  { x: windowWidth * 0.1, y: 650, r: 200, label: "Helping in local conservation efforts and raising awareness of moths, can have a big impact on moth conservation." },
  { x: windowWidth * 0.5, y: 200, r: 200, label: "Making your garden into a haven for moths will allow them to repopulate and feed, improving your local moth population." },
  { x: windowWidth * 0.7, y: 700, r: 200, label: "Monitor taking part in surveys to record the number of moths helps give a better understanding of moth's lifecycles, food-plants, flight times, and distributions of moths. " } 
]; // test text

}

function preload(){

};

function drawUI() {
  for (let dot of dots) {
    let isHovered = false;
    for(let landmark of g_landmarks){
      if(dist(windowWidth * landmark.x, windowHeight * landmark.y, dot.x, dot.y) < dot.r / 2) {
        isHovered = true;
      }
    }


    // dots
    noStroke();
    fill(isHovered ? 10 : 255,255,255,100);
    circle(dot.x, dot.y, dot.r, dot.r, 10);

    // when hover over, show a text
    if (isHovered) {
      drawLabel(dot);
    }
  }
}


function drawLabel(dot) {


let div = createDiv(dot.label);
  div.addClass('p5div');
  div.position(dot.x, dot.y);

  setTimeout(() => {
    div.remove();
  }, 2000);
  
}
