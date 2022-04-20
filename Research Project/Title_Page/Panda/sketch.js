let pandabg;
let panda;
let zoosound;
let munch;

//background and panda images and zoo ambient sounds
//original sound from https://www.videvo.net/sound-effect/jungle-indoor-zoo-heavy-reverb-642/1019129/
//original pandamunch sound is from https://www.videvo.net/sound-effect/panda-eating-breaths-at047401/252950/
//panda habitat and panda reference are here:
//https://ca-times.brightspotcdn.com/dims4/default/59df13d/2147483647/strip/true/crop/2048x1152+0+0/resize/840x473!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2a%2Fb3%2F0952d2af911f85896ec2d937de29%2Fsd-1553375117-bc1xhf1twl-snap-image
//https://bramanswanderings.files.wordpress.com/2014/11/panda-2.jpg

function preload(){
  pandabg = loadImage('Finished_panda.jpg');
  panda = loadImage('Panda.png');
  song = loadSound('zooambientsound.mp3');
  munch = loadSound('pandamunch.mov');

}

function setup() {
//  createCanvas();
    createCanvas(600, 425);
}

//when mouse is clicked, panda munches
function mouseClicked(){
  munch.play();  
  munch.setVolume(0.3)
}

//drawn panda moves around habitat
function draw() {
  background(pandabg);
  noLoop()
  song.play()
  song.setVolume(0.1);
  let r= random(50,250)
  image(panda,r,15,350,500);

  
}