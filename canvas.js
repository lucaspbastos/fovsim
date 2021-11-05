"use strict"    
const sizescale = 70;
const METER_X = 10;
const METER_Y = 10;
const INDEX = true;

const mainx = inchesToMeters(124);
const mainy = inchesToMeters(137);
const officex = inchesToMeters(98);
const officey = inchesToMeters(56);
let slider1, slider2, slider3, boxx1, boxy1, boxx2, boxy2, boxx3, boxy3;

function setup() {
    createCanvas(METER_X*sizescale, METER_Y*sizescale+60);
    angleMode(DEGREES);
    slider1 = createSlider(0,360,325,1);
    boxx1 = createInput(35, Number);
    boxy1 = createInput(35, Number);
    createElement('br');
    slider2 = createSlider(0,360,110,1);
    boxx2 = createInput(240, Number);
    boxy2 = createInput(270, Number);
    createElement('br');
    slider3 = createSlider(0,360,197,1);
    boxx3 = createInput(420, Number);
    boxy3 = createInput(50, Number);
}

function draw() {
    background(220);
    fill(color(255,255,255));
    room(mainx*sizescale, mainy*sizescale);
    //room((mainx+officex)*sizescale, officey*sizescale);

    let deg1 = slider1.value();
    let deg2 = slider2.value();
    let deg3 = slider3.value();

    let x1 = boxx1.value();
    let x2 = boxx2.value();
    let x3 = boxx3.value();
    let y1 = boxy1.value();
    let y2 = boxy2.value();
    let y3 = boxy3.value();

    let b1 = new BaseStation2(x1, y1, deg1);
    //b1.drawAll();

    let b2 = new BaseStation2(x2, y2, deg2);
    //b2.drawAll();

    let b3 = new BaseStation(x3, y3, deg3);
    b3.drawAll();
}

function inchesToMeters(inches) {
    return inches*0.0254;
}

function metersToInches(meters) {
    return meters/0.0254;
}
let Walls = [];
//TODO: set up auto room creation
function room(X, Y) {
    let offsetX = 30;
    let offsetY = 30;
    let pointA = createVector(offsetX, offsetY);
    let pointB = createVector(offsetX+(mainx+officex)*sizescale, offsetY);
    let pointC = createVector(offsetX+(mainx+officex)*sizescale, offsetY+officey*sizescale);
    let pointD = createVector(offsetX+(mainx)*sizescale, offsetY+(officey)*sizescale);
    let pointE = createVector(offsetX+(mainx)*sizescale, offsetY+(mainy)*sizescale);
    let pointF = createVector(offsetX, offsetY+(mainy)*sizescale);

    let Wall1 = new Wall(pointA, pointB, 1);
    let Wall2 = new Wall(pointB, pointC, 2);
    let Wall3 = new Wall(pointC, pointD, 3);
    let Wall4 = new Wall(pointD, pointE, 4);
    let Wall5 = new Wall(pointE, pointF, 5);
    let Wall6 = new Wall(pointF, pointA, 6);

    Walls.push(Wall1, Wall2, Wall3, Wall4, Wall5, Wall6);
}