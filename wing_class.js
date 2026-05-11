
class Wing{
 
  constructor(transX, transY, wingTopBool, isRightBool, imageShiftX, imageShiftY, wingClip, wingBottomClip){
    this.transX = transX;
    this.transY = transY;
    this.wingTopBool = wingTopBool;
    this.isRightBool = isRightBool;
    this.imageShiftX = imageShiftX;
    this.imageShiftY = imageShiftY;
    this.startRotation = 0; 
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
    if (this.wingTopBool === true){
      imageSrc = this.wingclip;
    } else {
      imageSrc = this.wingbottomclip;
    }

    if (this.isRightBool === true){
      push()
      rotate(-100)
      image(imageSrc, this.imageShiftX, this.imageShiftY)
      pop()
    } else {
      push()
      rotate(100)
      image(imageSrc, this.imageShiftX, this.imageShiftY)
      pop()
    }
     pop()
   }

  drawing(){
    let wingvert;
    let wingshape;
    push()
    wingvert = vertex(0,0)
    pop()
  }
  
  update(flapValue){
    this.flapValue = flapValue;
    this.clipping();
    this.drawing();
  }
  
}


