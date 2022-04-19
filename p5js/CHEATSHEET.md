## preload()
loadFont('folder/font.ttf');
loadImage('folder/image.jpg');

textSize(number);
textFont('fontName');
text('Text', x, y, width, height)
textAlign(H-align, V-align)

keyIsPressed - any character pressed in the keyboard
key - returns current letter pressed in the keyboard

## setup()
createCanvas(width, height);
angleMode(DEGREES) - mandate the entire sketch to use degrees


## draw()
strokeWidth(Number);
strokeJoin(BEVEL || ROUND); - for shapes
strokeCap(SQUARE || ROUND); - for line endings

background(0-255 || r, g, b, a || 'white' || '#000' || 'rgb/rgba(100%, 0%, 10%)');
fill(0-255 || r, g, b, a || 'white' || 'rgb/rgba(255, 255, 255)');
stroke();

noFill();
noStroke();
noLoop();

point(x, y);
line(x1, y1, x2, y2);


ellipseMode(CENTER (default) || RADIUS || CORNER || CORNERS); - should be same shape and parameters /* works like pos:relative and absolute */
rectMode(CENTER || RADIUS || CORNER (default) || CORNERS); - should be same shape and parameters
rect(x, y, width, height);
ellipse(x, y, width, height);
arc(x, y, width, height, startArc, stopArc);

triangle(x1, y1, x2, y2, x3, y3);
quad(x1, y1, x2, y2, x3, y3, x4, y4);

PI - 180°
QUARTER_PI - 45°
HALF_PI - 90°
TWO_PI - 360°
radians(degreesInNumber) - convert degrees in radians

dist() - distance between two vectors

mouseIsPressed

windowWidth
windowHeight

mouseX
mouseY

pmouseX - store mouseX value at a previous frame
pmouseY - store mouseY value at a previous frame

frameRate
frameRate()
constrain()
millis()
random()

int()
map()



* draws basic shapes and lines
* fires event handlers
* variables stored with browser information
* loads texts, fonts, excel (csv), json, sound, and images
* contains libraries that extends functionalities