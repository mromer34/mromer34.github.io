let scaled_height;
function preload(){
  img = loadImage('https://64.media.tumblr.com/8d1756ae116d7584a5b98519492f2b9b/tumblr_nw605fAm8S1rvbf30o1_500.jpg');
}
//FACE Setup
//temporary sketch of face; “Gaze 324″, continuous line drawing by Boris Schmitz

//I really want to figure out how to make it so anyone who clicks on different parts of the face gets sent into text that changes when the mouse is clicked on that text. I want to utilize mouseposition for that, and maybe add a 'random' feature so that every time you click on the features, the word 'beautiful' is replaced with other positive words. I also want to figure out how to return back to this page when finished with the features text. 

function setup() {
  createCanvas(windowHeight, windowWidth);
  noLoop();
  fill('white');

  scaled_height = width * (img.height/img.width);
  image(img, 0, 0, width, scaled_height); 
  
//these ellipses are what the overall mouse positions should be to get to the 'features text'
  noFill()
  noStroke()
  ///eyes
  ellipse(215,260,80,50)
  ellipse(340,260,80,50)
  //nose
  ellipse(275,320,70,40)
  //lips
  ellipse(285,390,90,60)

}

// /EYES text.

// declare variables 
// source text: 
// let source_text = `My eyes are so ugly, they're the color of the dirt and darker than a ravens feathers. When I smile they scrunch up and I already have wrinkles at the ends of them. These are my eyes and my eyes are ugly.`;
// let search_word = 'ugly';
// let replace_word = 'beautiful';
// let altered_text;

// function setup() {
//   createCanvas(500, 500); 
  
// //replace sub word in string
//   altered_text = source_text.replaceAll(search_word, replace_word);
// }

// function draw() {
//   background('white');

//   textFont('Courier New');
//   textSize(26);
//   fill('black')
//   let show_text;
//   if(mouseIsPressed){
//     show_text = altered_text;
//     //Change text to reflect change change in text   
//     background(58,27,20);
//     fill('white')
//     textFont('Courier New');
//   }else{
//     show_text =source_text;
    
//   }
//   text(show_text,10,10, width*0.9);
// }



///NOSE text.
//   let source_text = `My nose is so ugly, its wide and upturned, some others have smaller petite noses. Some have it downturned or flared out. I always find them beautiful, and in the end, I find mine to be ugly.`;
// let search_word = 'ugly';
// let replace_word = 'beautiful';
// let altered_text;

// function setup() {
//   createCanvas(500, 500); 
  
// //replace sub word in string
//   altered_text = source_text.replaceAll(search_word, replace_word);
// }

// function draw() {
//   background('white');

//   textFont('Courier New');
//   textSize(26);
//   fill('black')
//   let show_text;
//   if(mouseIsPressed){
//     show_text = altered_text;
//     //Change text to reflect change change in text   
//     background(240,162,117);
//     fill('white')
//     textFont('Courier New');
//   }else{
//     show_text =source_text;
    
//   }
//   text(show_text,10,10, width*0.9);
  
// }



///LIPS text
//   let source_text = `My lips are ugly, they're not thin but they're not super pouty either. They get chapped easily when I wear masks and I bite them when I'm anxious. I use them to express myself with colorful, vibrant lipstick. I think they look ugly either way. `;
// let search_word = 'ugly';
// let replace_word = 'beautiful';
// let altered_text;

// function setup() {
//   createCanvas(500, 500); 
  
// //replace sub word in string
//   altered_text = source_text.replaceAll(search_word, replace_word);
// }

// function draw() {
//   background('white');

//   textFont('Courier New');
//   textSize(26);
//   fill('black')
//   let show_text;
//   if(mouseIsPressed){
//     show_text = altered_text;
//     //Change text to reflect change change in text   
//     background(221,141,140);
//     fill('white')
//     textFont('Courier New');
//   }else{
//     show_text =source_text;
    
//   }
//   text(show_text,10,10, width*0.9);
