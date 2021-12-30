class CollisionDetection {
  constructor(data) {
    this.id = data.id;
    this.boxes=[]

  }

  init() {
    this.container = document.querySelector(`#${this.id}`);
    for(let i=0;i<100;i++){

       let box = new Box(this.container, getRandomInt(7,14), getRandomInt(7,21), getRandomInt(7,500), getRandomInt(7,500)).init();
    //this.box2 = new Box(this.container, 100, 100, 200, 300).init();
       
  
    this.boxes.push(box)

       

    
    }
  return 
  


  }
  addEvent(){
    const boxesLength = this.boxes.length

    console.log(this.boxes)
    function loop(){
      for(let i=0;i<boxesLength;i++){
        this.boxes[i].colllision(this.boxes)
        this.boxes[i].update()
        }
      requestAnimationFrame(loop())
    }
    loop()

  }

  

    // this.box1 = new Box(this.container, 200, 100, 20, 30).init();
    // this.box2 = new Box(this.container, 100, 100, 200, 300).init();
    // console.log(this.box1);
    // return this;
  

  
  
}
