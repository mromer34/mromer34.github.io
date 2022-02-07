function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(mouseX,mouseY,234);
  
  //variables used
  //var x=0;
  // while (x<=width) {
  // fill(x*15,255-x,50);
  //   ellipse(x,y, 25,x+25)
  //   x=x+20
  //}
  
  for (var x=0; x<= width; x+=20){
    fill( x*15, 255-x, mouseY);
    rect( x, 0, 25, x+25);
    line( 0, x*1, x*40, x*10)
  }
}