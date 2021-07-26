var drawing;
var con;
var adashima;
CANV_WIDTH = 200;
CANV_HEIGHT = 200;
SPR_WIDTH = 63.25;
SPR_HEIGHT = 50;

var x = 0;
var y = 100;
var dx = 5;
var dy = 3;

function init()
{
  drawing = document.getElementById("surface");
  con = drawing.getContext("2d");
  adashima = document.getElementById("adashima");
  setInterval(draw, 50);
}

function draw()
{
  //clear background
  con.clearRect(0, 0, CANV_WIDTH, CANV_HEIGHT);

  //move the element
  x += dx;
  y += dy;

  //check for boundaries
  bounce();

  //draw the image
  con.drawImage(adashima, x, y, SPR_WIDTH, SPR_HEIGHT);

  //draw a rectangle
  con.strokeStyle = "red";
  con.lineWidth = "5";
  con.strokeRect(0, 0, CANV_WIDTH, CANV_HEIGHT);
}

function bounce()
{
  if (x > CANV_WIDTH - SPR_WIDTH)
    dx *= -1;
  if (x < 0)
    dx *= -1;
  if (y > CANV_HEIGHT - SPR_HEIGHT)
    dy *= -1;
  if (y < 0)
    dy *= -1;
}