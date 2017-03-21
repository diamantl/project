/*
	Transformation - translate, rotate, scale

    Check out the p5 reference page: http://p5js.org/reference.

	New p5 variables and functions:
		push() & pop()
		translate(...)
		rotate(...)
		scale(...)
		angleMode(...)
		rectMode(...)
		dist(...)
		map(...)

	See index.html for disabling the right click menu.
*/

var angle=0;

// Any code that you put inside of setup runs ONCE at the start of the sketch
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0,0,0);

  colorMode(HSB,360,100,100,1);
  angleMode(DEGREES);
  rectMode(CENTER);

}

// After setup is run, any code that you put inside of draw runs REPEATEDLY at
// 60 frames per second
function draw() {
  if(mouseIsPressed){
    if(mouseButton===LEFT){
      var d=dist(pmouseX,pmouseY,mouseX,mouseY);
      var s=map(d,0,100,0.1,2);
      s=constrain(s,0.1,2);

      angle+=5;
      push();
        translate(mouseX,mouseY);
        scale(s);
        rotate(angle);
        //rect(0,0,200,200);

        stroke(0,0,100);
        strokeWeight(5);
        line(-70,0,70,0);

        noStroke();
        fill(20,100,100);
        ellipse(-70,0,20);
        ellipse(70,0,20);
        
      pop();
    }else{
      background(0,0,0);
    }
  }

}
