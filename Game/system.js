var canvas = document.getElementById("Viska_Canvas");
var ctx = canvas.getContext("2d");
ctx.fillRect(11, 11, 1, 1);
ctx.beginPath(); 
ctx.moveTo(30, 10); 
ctx.lineTo(80, 50); 
ctx.stroke(); 
ctx.strokeRect(100, 10, 70, 70)
ctx.fillRect(180, 10, 50, 50);
ctx.beginPath();
ctx.arc(50, 140, 30, 0, 50);
ctx.stroke();
ctx.beginPath();
ctx.arc(50, 140, 30, 0, 50);
ctx.stroke();
ctx.closePath();
ctx.moveTo(130, 130); 
ctx.lineTo(130, 200); 
ctx.lineTo(210, 200); 
ctx.closePath(); 
ctx.stroke(); 
ctx.fill(); 
ctx.fillStyle = 'blue';
ctx.fillStyle = '#0000FF';
ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.fillStyle = 'rgba(0, 0, 255, 255)';
ctx.fillStyle = '#0000FF';

ctx.strokeRect(10, 10, 70, 70);
ctx.fillStyle = "#0000ff";
ctx.fillRect(90, 10, 70, 70); 
ctx.clearRect(110, 35, 20, 20);
var radGradient = ctx.createRadialGradient(x0, y0, rad0, x1, y1, rad1)

