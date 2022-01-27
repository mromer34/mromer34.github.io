//declare variables 
//source text: first 2 verses of It called: Freefall by Rainbow Kitten Surprise
let source_text = `Called to the Devil and the Devil did come I said to the Devil, " Devil do you like drums? Do you like cigarettes, dominoes, rum?"He said only "sundown, Sundays, Christmas" Some day's end when I need a few friends Now and again I could never hope to keep them Thought to give friends what I thought that they wanted Never had they needed a good friend as I've been
Don't get me venting on friends who resent you 'Cause all you've ever done is been a noose to hang on to They thought was a necklace and reckless they fell into hell Where you both hang with nothing to do but` ;
let search_word = 'Devil';
let replace_word = "Stranger";
let altered_text;


function setup() {
  createCanvas(500, 500);
  //replace sub word in string
  altered_text = source_text.replaceAll(search_word,replace_word);
}

function draw() {
  background(173,216,230);
  
  //text(source_text,10,10,400);
  
  textFont('Brush Script MT');
  textSize(26);
  let show_text;
  if(mouseIsPressed){
    show_text = source_text;
    //Change text to reflect change change in text   
    background("Red");
    textFont('Fantasy');
  }else{
    show_text =altered_text;
    
  }
  text(show_text,10,10, width*0.9);
  
  //The choice of replacing 'devil' with 'stranger' was an interesting choice for me because the song suddenly goes from a more innocuous conversation with a stranger on a normal day, to a more agressive tone both visually and in context of the conversation. It goes from a normal conversation with an airy, light blue aura to a bolded, agressive font and a more demanding red color.
  
}