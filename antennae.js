// function drawAntennaeLeft(){
//   push()
//   beginShape()
//   strokeWeight(2)
//   stroke("rgb(139,95,95)")
//   fill("rgba(255,255,255,0)") // transparent fill
//   antennea = vertex(width/3-30, height/2-110)
  
//   // wingrshape = bezierVertex(342, 314, 408, -143,236, 149)
//   antenneashape = bezierVertex(190, 110, 181, 53, 290, 139)
//   // (80, 100, 101, 43,190, 139)
//   endShape()
//   pop()

// }

// function drawAntennaeRight(){
//   push()
//   beginShape()
//   strokeWeight(2)
//   stroke("rgb(139,95,95)")
//   fill("rgba(255,255,255,0)") // transparent fill
//   antenneaR = vertex(width/3+190, height/2-100)
  
//   //antenneashapeR = bezierVertex(80, 100, 101, 43,190, 139)
//   antenneashapeR = bezierVertex(390, 100, 401, 73,304, 139)
//   // (270, 100, 321, 43,204, 139)
//   endShape()
//   pop()

// }


function drawAntennaeTest(){
  push()
  antennaeImg.resize(100,100)
  translate(width/2+2, height/2-60)
  rotate(20)
  rotate(antennaeMoveL)
  antennae = image(antennaeImg, 0,-100) // shift rotate point
  pop()
  
}



function drawAntennaeTestL(){
  push()
  antennaeImg.resize(100,100)
  translate(width/2-6, height/2-60)
  rotate(-20)
  rotate(antennaeMoveR)
  scale(-1,1) // flip horizontally
  antennae = image(antennaeImg, 0,-100) // shift rotate point
  pop()
  
  //console.log(antennaeMoveL)
  
}