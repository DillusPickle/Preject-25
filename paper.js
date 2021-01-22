class Paper {
    constructor(x,y,radius) {
        var options = {
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }

        this.image = loadImage('sprites/paper.png');
        this.radius = radius/2;
        this.x = x;
        this.y = y;

        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        World.add(world, this.body);
    }

    display(){
        var paperpos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(paperpos.x,paperpos.y);
        rotate(angle);

        image(this.image, 0, 0);

        pop();
    }
}