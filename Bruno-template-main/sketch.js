var Rei
var rainha 
var população
var inimigos
var território
var tropas
var canhões
var servos
var castelos
var castelosIMG
var reiIMG
var rainhaIMG
var tropasIMG
function preload() {
castelosIMG = loadImage("castillo-.jpg");
reiIMG = loadImage("rei.jpg");
rainhaIMG = loadImage("rainha.jpg");
tropasIMG = loadImage("tropas.jpg");



}

function setup() {
createCanvas(1920,1080);

}

function draw() {
    background(51);
image(castelosIMG,0,0,1920,1080);
    drawSprites();
}

