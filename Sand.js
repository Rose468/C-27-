class Sand{
    constructor(x,y,r){
var options={
   
    resitution: 1.3,
    friction:5,
    density:1,
}
this.x =x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body);
    }

    display(){
        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paperpos.y)
        rectMode(CENTER)
        strokeWeight(3);
        fill("maroon")
        ellipse(0,0,this.r,this.r);
        pop();
    }
}