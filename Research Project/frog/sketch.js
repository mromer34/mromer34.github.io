let frog;
let frogsound;

function preload(){
  frog = loadImage('Finished_Frog.jpg');
  song = loadSound('frogsound.mp3');

}

function setup() {
    createCanvas(450, 450);

}

function draw() {
  background(frog);
  noLoop()
  song.play()
  song.setVolume(0.1);
  
  
}