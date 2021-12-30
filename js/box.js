class Box {
  constructor(parentElm, height, width, x, y) {
    this.height = height;
    this.width = width;
    this.parentElm = parentElm;
    this.x = x;
    this.y = y;
    this.velX=getRandomInt(-8, 8);
    this.velY=getRandomInt(-8, 8)


  }
  init() {
    this.box = document.createElement("div");
    //console.log(this.box)

    const boxStyle = {
      height: `${this.height}px`,
      width: `${this.width}px`,
      position: "absolute",
      top: this.x + "px",
      left: this.y + "px",
      backgroundColor: "red",
      // velx:`${this.velx}px`,
      // vely:`${this.vely}px`,

    };
  

    mapStyle(this.box, boxStyle);

    this.parentElm && this.parentElm.appendChild(this.box);

  
    console.log(this.box)
    
  }
  update(){
    if(this.x + (this.width,this.height) >= window.innerWidth || this.x-(this.height,this.width)<=0){
      this.velX = -this.velX

    }
    if(this.y + (this.width,this.height) >= window.innerHeight || this.y-(this.height,this.width)<=0){
      this.velY = -this.velY

    }
    this.x += this.velX
    this.y +=this.velY

  }

  colllision(boxes){
    console.log(boxes)
    let i =0
    while(i<boxes.length){
      if((this !== boxes[i])){
        const rect1 =  this.box.getBoundingClientRect()
        const rect2 = boxes[i].box.getBoundingClientRect()


        if(isCollision(rect1,rect2)){
          // boxes[i].box.style.backgroundColor ="#fff"
          // this.box.style.backgroundColor ="#fff"

          this.velX = -this.velX;
          this.velY = -this.vely;

          this.x += this.velX
          this.y += this.velY

        
        }
      }
      i++;
    }

  }
  
}
