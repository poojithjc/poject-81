canvas = document.getElementById("my canvas");
ctx = canvas.getContext ("2d");

color = "red";

ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.arc(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250,210,40,0,2*MathPI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 6;
ctx.arc(300,40,20,0,2*MathPI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 7;
ctx.arc(330,210,40,0,2*MathPI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 8;
ctx.arc(400,40,20,0,2*MathPI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 8;
ctx.arc(130,210,40,0,2*MathPI);
ctx.stroke();
