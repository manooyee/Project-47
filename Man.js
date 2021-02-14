class Man {
    constructor(x,y){
      var options = {
          isStatic:false
      }

      this.body = Bodies.rectangle(x,y,20,100,options);
      this.width = 20;
      this.height = 100;
      this.image1 = loadImage("images/man.png");
      this.image2 = loadImage("images/fallingman.png");
      World.add(world,this.body);

   }

   display(){
       push();
       camera.position.y = this.body.position.y;
       translate(this.body.position.x, this.body.position.y);
       imageMode(CENTER);
       image(this.image1,0,0,100,100);
       pop();

       
   }
}