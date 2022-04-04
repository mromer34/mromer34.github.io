let lionbg;
let lion;
let zoosound;

function preload(){
  lionbg = loadImage('Finished_lion.jpg');
  lion = loadImage('Lion.png');
  song = loadSound('zooambientsound.mp3');

}

function setup() {
//  createCanvas();
    createCanvas(600, 425);
    image(lionbg, 50,50); 
    image(lion, 0,0);

    
}

function draw() {
  background(lionbg);
  song.play()
  song.setVolume(0.1);

  noLoop()
  let r= random(30,250)
  image(lion,r,55,350,500);
  
}
