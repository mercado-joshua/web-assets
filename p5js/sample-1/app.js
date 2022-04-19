function setup() {
    print('Im starting');
    createCanvas(windowWidth, windowHeight); // width, height
    background('tomato');
    angleMode(DEGREES);
}

function draw() {
    print('Im running');
    print(frameCount);
    // human();
    // eye();

    // customShape();
    distance();
}

function human() {
    strokeWeight(30);
    fill('teal');
    ellipse(200, 200, 300, 300);

    // -------------------------------
    strokeWeight(5);
    fill('white');
    ellipse(100, 200, 30, 30);

    fill('white');
    ellipse(200, 200, 30, 30);

    // -------------------------------
    stroke('red');
    strokeWeight(20);
    strokeCap(ROUND);

    fill('red');
    noFill(); // turn off fill()


    arc(145, 260, 80, 80, 220, 320);

    // ------------------------------------
    strokeWeight(30);
    point(300, 200);

    // --------------------------------
    stroke('blue');
    strokeWeight(20);
    strokeJoin(BEVEL);
    rect(400, 100, 300, 300);

    //------------
    strokeWeight(25);
    line(350, 200, 395, 250);

    strokeWeight(25);
    strokeCap(SQUARE);
    line(500, 300, 600, 300);
}

function eye() {
    ellipseMode(CENTER);
    strokeWeight(5);
    fill('white');
    ellipse(300 , 400 , 50, 50);

    ellipseMode(CENTER);
    fill('black');
    circle(300, 400, 10);
}

function customShape() {
    stroke('green');
    strokeWeight(5);
    fill('brown');
    beginShape();
    vertex(500, 500);
    vertex(500, 550);
    vertex(550, 450);
    // vertex(40, 50);
    // vertex(50, 70);
    endShape(CLOSE);
}

function distance() {
    const weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(weight);
    stroke('teal');
    if (mouseIsPressed)  line(mouseX, mouseY, pmouseX, pmouseY);
}