"use strict"    
const sizescale = 100;
const METER_X = 10;
const METER_Y = 10;
const INDEX = true;

function setup() {
    createCanvas(METER_X*sizescale, METER_Y*sizescale);
    angleMode(DEGREES);
}

function draw() {
    background(220);
    fill(color(255,255,255));

    // main: x 124 in, y 137 in
    const mainx = inchesToMeters(124);
    const mainy = inchesToMeters(137);
    room(mainx*sizescale, mainy*sizescale);

    //office: x 98 in, y 56 in
    const officex = inchesToMeters(98);
    const officey = inchesToMeters(56);
    room((mainx+officex)*sizescale, officey*sizescale);

    noLoop();
}

function inchesToMeters(inches) {
    return inches*0.0254;
}

function metersToInches(meters) {
    return meters/0.0254;
}

function room(X, Y) {
    rect(30, 30, X, Y);
}