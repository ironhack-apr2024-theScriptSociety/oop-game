
class Player {
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10;
        this.height = 10;

        this.playerElm = document.getElementById("player");
        this.playerElm.style.left = this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
        
    }
    moveLeft(){
        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
    }
}


const player = new Player();


document.addEventListener("keydown", (e) => {
    if(e.code === "ArrowLeft"){
        player.moveLeft();
    } else if(e.code === "ArrowRight"){
        player.moveRight();
    }
});



