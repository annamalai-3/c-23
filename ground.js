class Ground {

constructor(x,y){
var prop = {
isStatic:true

}
this.body = Bodies.rectangle(x,y,200,5,prop);
World.add(world,this.body);

}

display(){
    var pos = this.body.position;
    rect(pos.x,pos.y,200,5)

}



}