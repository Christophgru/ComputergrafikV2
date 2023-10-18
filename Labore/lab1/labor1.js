var canvas = document.getElementById('DemoCanvas');
//Always check for properties and methods, to make sure your code doesn't break in other browsers.
var context = canvas.getContext('2d');
context.beginPath();
context.lineWidth=3;
context.strokeStyle="black";
context.fillStyle="white";
context.moveTo(0,0);
context.lineTo(0,300);
context.lineTo(500,300);
context.lineTo(500,0);
context.lineTo(0,0);
context.fill();
context.stroke();

context.beginPath(); // Haus
context.strokeStyle="000000"
context.lineWidth=3;
context.moveTo(50,250);
context.lineTo(50,150);
context.lineTo(30,150);
context.lineTo(125,50);
context.lineTo(220,150);
context.lineTo(30,150);
context.lineTo(50,150);
context.moveTo(200,150);
context.lineTo(200,250);
context.lineTo(50,250);
context.stroke();

context.beginPath();//Fenster
context.lineWidth=1;
context.moveTo(180, 170);
context.lineTo(160,170);
context.lineTo(160,180);
context.lineTo(180,180);
context.lineTo(180,170);
context.stroke();

context.beginPath();//Tür
context.strokeStyle="black";
context.fillStyle="red";
context.moveTo(100,250);
context.lineTo(100,200);
context.lineTo(140,200);
context.lineTo(140,250);
context.fill();
context.stroke();

context.beginPath();//Fenster Tür
context.fillStyle="white";
context.rect(115,215,10,20);
context.fill();

context.beginPath();//Baumstamm
context.fillStyle="brown";
context.rect(300,80,10,60);
context.fill();

context.beginPath();//Baumkrone
context.fillStyle="green";
context.arc(305,70,20,0,2*Math.PI);
context.arc(290,65,20,0,2*Math.PI);
context.arc(320,65,20,0,2*Math.PI);
context.arc(305,50,20,0,2*Math.PI);
context.fill();

context.beginPath();
context.fillStyle="lightblue";
context.strokeStyle="blue";
context.lineWidth=2;
context.moveTo(230,250);
context.lineTo(230, 220);
context.lineTo(260, 220);
context.lineTo(270, 200);
context.lineTo(350, 205);
context.arc(350,235,30,1.5*Math.PI,0);
context.lineTo(380,250);
context.lineTo(350,250);
context.arc(340,250,10,0,Math.PI);
context.lineTo(290,250);
context.arc(280,250,10,0,Math.PI);
context.lineTo(230,250);
context.fill();
context.stroke();