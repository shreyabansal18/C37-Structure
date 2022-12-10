class Form {
  constructor() {
    this.input=  createInput("");
    this.playbutton= createButton("Play");
    this.titleimage= createImg("assets/title.png");
    this.greeting= createElement("h4");
  }
    setElementPosition() {
    this.titleimage.position(0,100);
    this.titleimage.scale= 0.5;
    this.input.position(width/2-100,height/2-80);
    this.playbutton.position(width/2-100,height/2-20);
    this.greeting.position(width/2-100,height/2-100);
    }
    hide() {
      this.input.hide();
      this.playbutton.hide();
    }
    handleMousePressed() {
      this.playbutton.mousePressed(()=>{
        this.input.hide();
        this.playbutton.hide();
        var message= `Hello ${this.input.value()} Wait for another player to join`
        this.greeting.html(message)
      });
    }
    display() {
      this.setElementPosition();
      this.handleMousePressed();
    }
}
