"use strict"    
const sizescale = 70;
const METER_X = 10;
const METER_Y = 10;
const INDEX = true;
let slider;

function setup() {
    createCanvas(METER_X*sizescale+60, METER_Y*sizescale+60);
    angleMode(DEGREES);
    slider = createSlider(0,360,0,1);

}

let load = false;
let lastdeg = 0;
function draw() {
    background(220);
    fill(color(255,255,255));

    const mainx = inchesToMeters(124);
    const mainy = inchesToMeters(137);
    room(mainx*sizescale, mainy*sizescale);
    //room(7*sizescale, 7*sizescale);
    const officex = inchesToMeters(98);
    const officey = inchesToMeters(56);
    room((mainx+officex)*sizescale, officey*sizescale);

    let deg = slider.value();
    let b1 = new BaseStation2(30, 30, deg);
    b1.drawAll();
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