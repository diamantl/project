/*
	Conditionals - making decisions in code!

	Check out the p5 reference page: http://p5js.org/reference.

	New p5 variables and functions:
		mouseIsPressed
		mouseButton
		mouseX, mouseY
        keyPressed(...)
        key, keyCode

	See index.html for disabling the right click menu.
*/
var colorHue=0;
// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,0,0);
  colorMode(HSB,360,100,100,1); //highest values for hue, saturation, value, alpha
}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
  console.log(mouseIsPressed,mouseButton);

  colorHue+=5;
  if(colorHue>360){
    colorHue-=360;
  }

  fill(colorHue,100,100);
  stroke(0,0,100);

  if(mouseIsPressed){
    ellipse(mouseX,mouseY,10);
    if (mouseButton===LEFT) {
      ellipse(mouseX,mouseY,20);
      ellipse(width-mouseX,mouseY,20); //flipped horizontally
      ellipse(mouseX,height-mouseY,20); //flipped vertically
      ellipse(width-mouseX,height-mouseY,20); //flipped horizontally and vertically
    }else if (mouseButton===RIGHT) {
      background(0,0,0);
    }

  }
}

function keyPressed(){
  console.log(keyCode,key);

  if(key==="S"){
    saveCanvas("screenshot","png");
  }
}
