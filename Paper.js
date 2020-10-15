class Paper {

    constructor (x, y, r) {
    var options = {
       density:1.2,
       restitution:0.5,
       friction:0.5,
       isStatic:false
    }
     this.body = Bodies.circle(x, y, r/2, options);
     World.add(world, this.body);
      
        this.x = x;
        this.y = y;
        this.r = r;
        
        
    }

    display () {
        ellipseMode(CENTER);
        fill("pink");
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    }


}
