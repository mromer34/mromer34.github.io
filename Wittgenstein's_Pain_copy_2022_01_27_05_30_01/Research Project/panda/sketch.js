let pandabg;
let panda;
let zoosound;

function preload(){
  pandabg = loadImage('Finished_panda.jpg');
  panda = loadImage('Panda.png');
  song = loadSound('zooambientsound.mp3');


}

function setup() {
//  createCanvas();
    createCanvas(600, 425);

    image(pandabg, 50,50); 
    image(panda, 0,0);
    
}


function draw() {
  background(pandabg);
  noLoop()
  song.play()
  song.setVolume(0.1);
  let r= random(50,250)
  image(panda,r,15,350,500);

  
}