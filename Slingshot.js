class Slingshot{
    constructor(bodyA, pointB){        
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
        }
        this.pointB = pointB,
        this.Naruto = Constraint.create(options);
        World.add(world, this.Naruto);
    }display(){
        if(this.Naruto.body){
            var pointA = this.Naruto.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);   
        }
    }
    fly(){
        this.Naruto.bodyA = null;
    }
}
