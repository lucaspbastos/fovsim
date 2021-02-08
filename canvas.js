"use strict"    
const sizescale = 70;
const METER_X = 10;
const METER_Y = 10;
const INDEX = true;
let slider1, slider2, slider3;

function setup() {
    createCanvas(METER_X*sizescale+60, METER_Y*sizescale+60);
    angleMode(DEGREES);
    slider1 = createSlider(0,360,305,1);
    slider2 = createSlider(0,360,125,1);
    slider3 = createSlider(0,360,245,1);
}

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

    let deg1 = slider1.value();
    let deg2 = slider2.value();
    let deg3 = slider3.value();

    let b1 = new BaseStation2(35, 40, deg1);
    b1.drawAll();

    let b2 = new BaseStation2(240, 270, deg2);
    b2.drawAll();

    let b3 = new BaseStation2(390, 30, deg3);
    b3.drawAll();
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