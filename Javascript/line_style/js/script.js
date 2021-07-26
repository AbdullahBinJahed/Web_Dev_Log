function draw()
{
  var drawing = document.getElementById("surface");
  var con = drawing.getContext("2d");

  //change line width and color
  con.strokeStyle = "red";
  con.lineWidth = 10;

  con.lineJoin = "round";
  con.beginPath();
  con.moveTo(10, 40);
  con.lineTo(20, 10);
  con.lineTo(30, 40);
  con.stroke();
  con.closePath();

  con.strokeStyle = "blue";
  con.lineJoin = "bevel";
  con.beginPath();
  con.moveTo(40, 40);
  con.lineTo(50, 10);
  con.lineTo(60, 40);
  con.stroke();
  con.closePath();

  con.strokeStyle = "green";
  con.lineJoin = "miter";
  con.beginPath();
  con.moveTo(70, 40);
  con.lineTo(80, 10);
  con.lineTo(90, 40);
  con.stroke();
  con.closePath();

  //line caps
  con.lineCap = "butt";
  con.strokeStyle = "red";
  con.beginPath();
  con.moveTo(10, 100);
  con.lineTo(90, 100);
  con.stroke();
  con.closePath();

  con.lineCap = "round";
  con.strokeStyle = "blue";
  con.beginPath();
  con.moveTo(10, 120);
  con.lineTo(90, 120);
  con.stroke();
  con.closePath();

  con.lineCap = "square";
  con.strokeStyle = "green";
  con.beginPath();
  con.moveTo(10, 140);
  con.lineTo(90, 140);
  con.stroke();
  con.closePath();
}