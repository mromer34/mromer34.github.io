//setting up
let bgmirror;
let blank;
let eyes1;
let eyes2;
let eyes3;
let hair1;
let hair2;
let hair3;
let blanker;
let skin = [];
let nose = [];
let lips = [];
let hairchoices = [];
let eyechoices = [];

//loading images and using a for-loop for objects that use more than 3 images

function preload(){
  bgmirror = loadImage('bgmirror.png')
  blank = loadImage('blank.png');
  blanker = loadImage('blanker.png');

  eyes1 = loadImage('eyes1.png');
  eyes2 = loadImage('eyes2.png');
  eyes3 = loadImage('eyes3.png');
  
  hair1 = loadImage('hair1.png');
  hair2 = loadImage('hair2.png');
  hair3 = loadImage('hair3.png');
  
  for (let i = 0; i< 4; i++){
    lips[i] = loadImage('lips'+ i + '.png');
  }
  
  for (let i = 0; i< 4; i++){
    skin[i] = loadImage('skin'+ i + '.png');
  }
  
  for (let i = 0; i< 4; i++){
    nose[i] = loadImage('nose'+ i + '.png');
  }
  
  eyechoices = [eyes1, eyes2, eyes3];
  hairchoices = [hair1, hair2, hair3];
  
}
  
//creating buttons for each function

function setup() {
  createCanvas(450, 500);
  rectMode(CENTER);
  noLoop();
  

  button = createButton('face');
  button.position(30, 150);
  button.style('white');
  button.mousePressed(face);

  button = createButton('eyes');
  button.position(30, 200);
  button.mousePressed(eyes);

  button = createButton('nose');
  button.position(30, 250);
  button.mousePressed(noses);
  
  button = createButton('smile');
  button.position(30, 300);
  button.mousePressed(mouth);
  
  button = createButton('hair');
  button.position(30, 350);
  button.mousePressed(hair);
  
  button = createButton('restart');
  button.position(20, 460);
  button.mousePressed(reset);
    
  button = createButton('random');
  button.position(370, 460);
  button.mousePressed(randomize);
  
  display = {
    skin: blanker,
    eyes: blanker,
    nose: blanker,
    lip: blanker,
    hair: blanker
  }
}

//messages for the console
var messages = ["Can you make her beautiful?","What can you change about her?","Why does she need to be changed in the first place?","Are you happy yet?","Is she not enough?"];
var counter = 0;

const input = prompt("What is your name, creator?");
alert(`Hello ${input}! Welcome to the beautiful woman maker.`);

function myMessages() {  
  var interval = setInterval(function(){ 
  console.log(messages[counter++]); 
}, 3000);
setTimeout(function() { 
  clearInterval(interval); 
}, 15000);
}

myMessages();

//different functions for the buttons for the face features
function face() {
   noLoop();
   display.skin = random(skin);
   draw();
}

function eyes() {
  noLoop();
  display.eyes = random(eyechoices);
  draw();
}

function noses() {
  noLoop();
  display.nose = random(nose);
  draw();
}

function mouth() {
  noLoop(); 
  display.lip = random(lips);
  draw();
}

function hair() {
  noLoop();
  display.hair = random(hairchoices);
  draw();
} 

function draw() {
  background(bgmirror);
  image(blank,100,105,260,390);
  image(display.skin,100,105,260,390);
  image(display.eyes,120,215,225,60);
  image(display.nose,150,200,170,190);
  image(display.lip,185,315,90,70);
  image(display.hair,15,65,445,525);
}

function randomize() {
    face();
    eyes();
    noses();
    mouth();
    hair();
}

function reset(){
  display.skin = blanker;
  display.eyes = blanker;
  display.nose = blanker;
  display.lip = blanker;
  display.hair = blanker;
  draw();
}