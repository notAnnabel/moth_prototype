class wing {
    constructor(transX, transY, imageShiftX, imageShiftY, isTopWing, isWingLeft, wingPatternTop, wingPatternBottom) {
        
            // Initialize properties for the wing class
            this.transX = transX;
            this.transY = transY;
            this.imageShiftX = imageShiftX;
            this.imageShiftY = imageShiftY;
            this.isTopWing = isTopWing;
            this.isWingLeft = isWingLeft;
            this.wingPatternTop = wingPatternTop;
            this.wingPatternBottom = wingPatternBottom;


            this.isFlipped;
            // this.flapAmount = 16;
            // this.flapMultiplier = 26;
            this.isTopWing = true;
            //this.wingSize = 200;
        };


        preload(){
            this.wingPatternTop = loadImage('wing_pattern.png');
            this.wingPatternBottom = loadImage('dark_moth_wing_pattern.png');
        }

        wingType(){
            if (this.isTopWing === true) {
                imgSrc = this.wingPatternTop;
            } else {
                imgSrc = this.wingPatternBottom;
            }
        }



        // flapping(){
        //     let flap = sin(frameCount * this.flapMultiplier) * this.flapAmount;}
}
