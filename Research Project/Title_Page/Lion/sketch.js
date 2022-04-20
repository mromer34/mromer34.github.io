let lionbg;
let lion;
let zoosound;
let roar;

//background and lion images and zoo ambient sounds
//original sound from https://www.videvo.net/sound-effect/jungle-indoor-zoo-heavy-reverb-642/1019129/
//lionroar is from https://www.videvo.net/sound-effect/lion-growl-angry-gene-pe931904/249944/
//lion habitat and lion reference photos are here: https://wdmarchitects.com/wp-content/uploads/fly-images/2303/SCZ-Lions-005-crop-1000x560-c.jpg
//https://i.guim.co.uk/img/media/c6651b18826d09f5e7bc6a5e2bcf8535bcabbc32/527_393_2440_1464/master/2440.jpg?width=1200&quality=85&auto=format&fit=max&s=9c95ca98424774aa2a99b1d764a31289


function preload(){
  lionbg = loadImage('Finished_lion.jpg');
  lion = loadImage('Lion.png');
  song = loadSound('zooambientsound.mp3');
  roar = loadSound('LionRoar.mov');

}

function setup() {
//  create Canvas 
    createCanvas(600, 425);

}
//when mouse is clicked, lion roars
function keyPressed() {
  if (keyCode === LEFT_ARROW){
  roar.play();  
  roar.setVolume(0.2)
  }
}



//drawn lion moves around habitat
function draw() {
  background(lionbg);
  song.play()
  song.setVolume(0.1);
  
  noLoop()
  let r= random(30,250)
  image(lion,r,55,350,500);
}


  
  

