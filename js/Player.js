class Player{
    constructor(){
      this.ply = createImg("./assets/idle.gif");
    }

    setElementsPosition() {
        this.ply.position(width / 2 - 100, height /2 * 1.25);
         
     }
 
     setElementsStyle(){
         this.ply.class("gamePlayer");

    
     }
       

    display() {
        this.setElementsPosition();
        this.setElementsStyle();
     
    }
}