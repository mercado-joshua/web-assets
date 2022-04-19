let narutoFont;
let kaoriImg;

const minHour = 0;
const maxHour = 24; // hours in a day

const minMinutes = 0;
const maxMinutes = 1440; // minutes in a day

function preload () {
    narutoFont = loadFont('./njnaruto.ttf');
    kaoriImg = loadImage('./kaori.jpg');
};

function setup() {
    print('Im starting');
    createCanvas(windowWidth, windowHeight);
    strokeWeight(2);
    background('tomato');
    textFont(narutoFont);
    noLoop();

}

function draw() {
    // textAndMap();
    // loadImages();
    // transformAndPushPop();
    frameRateExp();
}

function transformAndPushPop() {
    push(); // start a new position
    fill('goldenrod');
    translate( 50, 50 ); // affects the whole cartesian plane coordinates
    rect(30, 30, 100, 100);
    pop(); // end the position, stop translating

    // this will not be affected by the positioning
    translate( 10, 0 ); // moves relative to its position
    rotate( 0.3 );
    scale(2);
    fill('teal');
    rect(60, 60, 100, 100);
}

function textAndMap() {
    const sentence = ['J','o', 's', 'h', 'u', 'a'];
    let x = 20;
    let y = 30;

    sentence.forEach(letter => {
        text(letter, x += 50, y += 60);
    });

    const testHour = 5;

    let hourToMinute = map(testHour, minHour, maxHour, minMinutes, maxMinutes);

    let currentHour = hour();

    print(`current hour is : ${ currentHour }`);

    print(`${ testHour } hour is ${ hourToMinute } in minutes.`);
}

function loadImages() {
    if ( mouseIsPressed ) image(kaoriImg, mouseX, mouseY);
}

function frameRateExp() {
    const frame = frameRate();
    print( frame );
}