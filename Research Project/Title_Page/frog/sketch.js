let frog;
let frogsound;

//background and panda images and zoo ambient sounds
//original sound from https://www.soundsnap.com/animals_frogs_toads_many_insects_reservoir_night_subtropical_australia_15303_wav
//frog terrarium reference and frog reference are here:
//https://preview.redd.it/pptwfv1qjg821.jpg?width=640&crop=smart&auto=webp&s=091cf2879b94b160bfc82f2af572a1efe3f09cfd
//https://i.natgeofe.com/k/e65322d1-407b-41aa-b4c9-b80543362536/red-eyed-tree-frog-on-leaves.jpg?w=1272&h=716 

function preload(){
  frog = loadImage('Finished_Frog.jpg');
  song = loadSound('frogsound.mp3');
  croak = loadSound('frogcroak.mov')

}

function setup() {
    createCanvas(470, 450);
}

//when mouse is clicked, panda munches
function mouseClicked(){
  croak.play();  
  croak.setVolume(0.3)
}

//drawn frog stays in place
function draw() {
  background(frog);
  noLoop()
  song.play()
  song.setVolume(0.1);
  
  
}