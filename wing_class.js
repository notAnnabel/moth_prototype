//wingshapeUL = bezierVertex(-197,30, -163, -158, -90, -151) //+ UL
//wingshapeUR = bezierVertex(217,30, 183, -158, 110, -151) // UR
//wingshapeLL = bezierVertex(-197,30, -163, -158, -90, -151) // LL
//wingshapeLR = bezierVertex(217,30, 183, -158, 110, -151)  // LR
let filling;

class Wings2{
 
  constructor(transX, transY, flapValue, wingTopBool, imageShiftX, imageShiftY, wingShape){
    this.transX = transX
    this.transY = transY
    this.flapValue = flapValue
    this.wingTopBool = wingTopBool
    this.imageShiftX = imageShiftX
    this.imageShiftY = imageShiftY
    this.wingscoordinatearray = wingShape;
    //winglshape = bezierVertex(217,30, 183, -158, 110, -151) 
    this.wingclip = loadImage('wing_pattern.png'); // testing wing clipping
    this.wingbottomclip = loadImage('dark_moth_wing_pattern.png')
    this.wingclip.resize(200,200)
    this.wingbottomclip.resize(200,200)
  }
  
  
   clipping(){
     let imageSrc;
     push()
     translate(this.transX, this.transY);
     rotate(this.flapValue)
     clip(this.drawing) // think abt this
     //clip()
     
    if (this.wingTopBool === true){
      imageSrc = this.wingclip;
    } else {
      imageSrc = this.wingbottomclip;
    }
     
     image(imageSrc, this.imageShiftX, this.imageShiftY)
     pop()
   }

  drawing(){
    let wingvert;
    let wingshape;
    push()
    beginShape()
    wingvert = vertex(0,0)
    // console.log(this.wingscoordinatearray[0])
    // bezierVertex(wings[0],wings[1],
    //                              wings[2],wings[3],
    //                              wings[4],wings[5])
    bezierVertex(wingarrayUL[0],wingarrayUL[1], wingarrayUL[2],wingarrayUL[3], wingarrayUL[4],wingarrayUL[5])
    //bezierVertex(wingShape[0],wingShape[1], wingShape[2],wingShape[3], wingShape[4],wingShape[5])
    //bezierVertex(this.wingscoordinatearray[0],this.wingscoordinatearray[1], this.wingscoordinatearray[2],this.wingscoordinatearray[3], this.wingscoordinatearray[4],this.wingscoordinatearray[5])
    filling = fill("rgb(212,199,156)")
    endShape(CLOSE)
    pop()
  }
  
  update(){
    this.clipping();
    this.drawing();
  }
  
}


// wingtestLL= new Wings2(287, 160, flapLL, false, -200, -180, wingsarray[2])
// wingtestLL.update()

// wingtestLR = new Wings2(309, 160, flapLR, false, 0, -200, wingsarray[1])
// wingtestLR.update()


// wingtestUL = new Wings2(287, 150, flapUL , true, -200, -180, wingsarray[0]);
// wingtestUL.update()

// wingtestUR = new Wings2(307, 150, flapUR, true, 0, -200, wingsarray[3])
// wingtestUR.update() 

////////////////////transX, transY, flapValue, imageSrc, imageShiftX, imageShiftY, wingShape


// bezierVertex(wingShape[0],wingShape[1],
//                                 wingShape[2],wingShape[3],
//                                 wingShape[4],wingShape[5]);