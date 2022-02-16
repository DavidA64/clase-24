class ClaseBarcos{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.ImB=loadImage("assets/boat.png");
        this.body=Bodies.rectangle(x,y,w,h);
        World.add(world,this.body);
    }

    MostrarBarco(){
        var pos = this.body.position
        push()
        imageMode(CENTER)
        image(this.ImB,pos.x,pos.y,this.w,this.h)
        pop()
    }
}