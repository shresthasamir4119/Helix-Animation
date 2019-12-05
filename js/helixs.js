var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 800;
var phase = 0;
var speed = 0.03;
var maxCircleRadius = 10;
var frameCount = 0;
var numRows = 10;
var numCols = 20;
var numStrands = 2;
var colDifference = 20;
var y;
var strandPhase = 0;

function make(){
	clearRect(0,0,canvas.height,canvas.width);
}