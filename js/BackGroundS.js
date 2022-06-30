class BackGround{
    constructor(){
        this.back = createImg("./assets/Background.png");
        this.ground = createImg("./assets/ground.png");
        this.plataform1 = createImg("./assets/plataform.png");
        this.plataform2 = createImg("./assets/plataform.png");
        this.plataform3 = createImg("./assets/plataform.png");
        this.plataform4 = createImg("./assets/plataform.png");

    }
    setElementsPosition() {
        this.back.position(width / 2 - 800, height / 2 - 384);
        this.ground.position(width / 2 - 800, height / 2 - 383);
        this.plataform1.position(width / 2 - 945, height / 2 - 425);
        this.plataform2.position(width / 2 + 130, height / 2 - 425);
        this.plataform3.position(width / 2 - 447, height / 2 - 130);
        this.plataform4.position(width / 2 + 90, height / 2 - 130);
        
    }

    setElementsStyle() {      
        this.back.class("gameMenu");
        this.ground.class("gameGround");
        this.plataform1.class("gamePlataform");
        this.plataform2.class("gamePlataform");
        this.plataform3.class("gameSPlataform");
        this.plataform4.class("gameSPlataform");
    }



    display() {
          this.setElementsPosition();
          this.setElementsStyle();
    }

    hide(){
        this.setElementsPosition();
        this.setElementsStyle();
    }
    
}