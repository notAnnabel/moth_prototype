//wingshapeUL = bezierVertex(-197,30, -163, -158, -90, -151) //+ UL
//wingshapeUR = bezierVertex(217,30, 183, -158, 110, -151) // UR
//wingshapeLL = bezierVertex(-197,30, -163, -158, -90, -151) // LL
//wingshapeLR = bezierVertex(217,30, 183, -158, 110, -151)  // LR
let filling;

class Wings2{
 
  constructor(transX, transY, flapValue, wingTopBool, isRightBool, imageShiftX, imageShiftY, wingShape, wingClip, wingBottomClip){
    this.transX = transX;
    this.transY = transY;
    this.flapValue = flapValue;
    this.wingTopBool = wingTopBool;
    this.isRightBool = isRightBool;
    this.imageShiftX = imageShiftX;
    this.imageShiftY = imageShiftY;
    this.wingscoordinatearray = wingShape;
    //winglshape = bezierVertex(217,30, 183, -158, 110, -151) 
    this.wingclip = wingClip;
    this.wingbottomclip = wingBottomClip;
    this.wingclip.resize(200,200)*2
    this.wingbottomclip.resize(200,200)*2
  }
  
  
   clipping(){
     let imageSrc;
     push()
     translate(this.transX, this.transY);
     rotate(this.flapValue)
     clip(this.drawing.bind(this)) // bind is used since callback functions like clip() don't have access to the class's "this" context by default. By binding "this" to the drawing method, we ensure that when clip() calls it, it can access the class properties and methods correctly.
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
    noStroke()

    wingvert = vertex(0,0)
    if (this.isRightBool === true){
      wingshape = bezierVertex(wingarrayUR[0],wingarrayUR[1], wingarrayUR[2],wingarrayUR[3], wingarrayUR[4],wingarrayUR[5])
    } else {
      wingshape = bezierVertex(wingarrayUL[0],wingarrayUL[1], wingarrayUL[2],wingarrayUL[3], wingarrayUL[4],wingarrayUL[5])
    }
    //bezierVertex(wingarrayUL[0],wingarrayUL[1], wingarrayUL[2],wingarrayUL[3], wingarrayUL[4],wingarrayUL[5])

    filling = fill("rgb(212, 199, 156)")
    endShape(CLOSE)
    pop()
  }
  
  update(){
    this.clipping();
    this.drawing();
  }
  
}


