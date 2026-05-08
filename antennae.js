function drawAntennaeTest(){
  push()
  antennaeImg.resize(100,100)
  translate(width/5+2, height/3-60)
  rotate(20)
  rotate(antennaeMoveL)
  antennae = image(antennaeImg, 0,-100) // shift rotate point
  pop()
}

function drawAntennaeTestL(){
  push()
  antennaeImg.resize(100,100)
  translate(width/5-6, height/3-60)
  rotate(-20)
  rotate(antennaeMoveR)
  scale(-1,1) // flip horizontally
  antennae = image(antennaeImg, 0,-100) // shift rotate point
  pop()
}