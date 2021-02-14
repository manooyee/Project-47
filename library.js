function isTouching(object1,object2){
    console.log("test")
    if (object1.position.x - object2.position.x <= object1.width/2 + object2.width/2 &&  
      object2.position.x - object1.position.x <= object1.width/2 + object2.width/2 &&
      object1.position.y - object2.position.y <= object1.height/2 + object2.height/2 &&  
      object2.position.y - object1.position.y <= object1.height/2 + object2.height/2 ){
      return true

    }
    else{
      return false
    } 
  
  }