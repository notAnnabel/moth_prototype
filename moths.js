class Moth {
    constructor() {
        // Initialize properties for the Moth class
        this.position; // make all properties relative to this position!
        let wingarrayUL = [-197,30, -163, -158, -90, -151];
        let wingarrayUR = [217,30, 183, -158, 110, -151];
        let wingarrayLL = [-197,30, -163, -158, -90, -151];
        let wingarrayLR = [217,30, 183, -158, 110, -151];

    }

    preload() {
        
    }
    

    update() {
        this.drawBody();
        this.drawantennaeLeft();
        this.drawantennaeRight();
    }

    drawantennaeLeft() {
        push()
        beginShape()
        strokeWeight(2)
        stroke("rgb(139,95,95)")
        fill("rgba(255,255,255,0)") // transparent fill
        this.antennae = vertex(width / 3 - 30, height / 2 - 110)

        // wingrshape = bezierVertex(342, 314, 408, -143,236, 149)
        this.antenneashape = bezierVertex(190, 110, 181, 53, 290, 139)
        // (80, 100, 101, 43,190, 139)
        endShape()
        pop()
    }
    drawantennaeRight() {
        push()
        beginShape()
        strokeWeight(2)
        stroke("rgb(139,95,95)")
        fill("rgba(255,255,255,0)") // transparent fill
        this.antenneaR = vertex(width / 3 + 190, height / 2 - 100)

        //antenneashapeR = bezierVertex(80, 100, 101, 43,190, 139)
        this.antenneashapeR = bezierVertex(390, 100, 401, 73, 304, 139)
        // (270, 100, 321, 43,204, 139)
        endShape()
        pop()
    }
    drawBody() {
        fill("rgb(180,135,104)")
        ellipse(width/2-3,height/2-5, 30, 120,220) // 5 args
    }
  
}