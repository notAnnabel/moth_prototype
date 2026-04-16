function drawLeftWing(flap){
  push()
  beginShape()
  //translate(287, 150);
  //rotate(-flap-90)
  wingl = vertex(0, 0)

  fill("rgb(212,199,156)")
  

  
  //circle(287-197, 150+30, 10)



  // winglshape = bezierVertex(-237, -264, 3, -293,1, -101) og shape
  winglshape = bezierVertex(-197,30, -163, -158, -90, -151) //+ og
  endShape(CLOSE)
  pop()
}

function drawRightWing(flap){
  push()
  //translate(307, 150)
  //rotate(flap+90)
  beginShape()
  wingr = vertex(0,0)
  fill("rgb(212,199,156)")
  winglshape = bezierVertex(217,30, 183, -158, 110, -151)
  endShape(CLOSE)
  pop()
}

function drawLowerLeftWing(flap){
  push()
  beginShape()
  //translate(287, 160);
  //rotate(-flap*2-100)
  wingl = vertex(0, 0)
  
  fill("rgb(212,199,156)")
  
  // winglshape = bezierVertex(-237, -234, 3, -263,1, -71) + og

  winglshape = bezierVertex(-197,30, -163, -158, -90, -151) //+ og
  endShape(CLOSE)
  pop()

  /* code to add
    wingmaskL = loadImage('wing mask directory goes here')
    use clip(wingmaskL) to clip wing colour to moth wing
    the moth mask image needs to line up with the moth wing size!

    translate()
    rotate(-flap*2)
    wingmaskLVertex = vertex(0,0)

  */
}


function drawLowerRightWing(flap){
  push()
  beginShape()
  // translate(309, 160);
  // rotate(flap*2+100)
  wingl = vertex(0, 0)
  fill("rgb(212,199,156)")
  winglshape = bezierVertex(217,30, 183, -158, 110, -151) 
  endShape(CLOSE)
  pop()
}


function drawRWmask(){
  push()
  beginShape()
  translate(309,160);
  rotate(flap*2+100)
  pop()
}

