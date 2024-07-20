const el = document.getElementById("myCanvas");
const context = el.getContext("2d");

//   дом
context.beginPath();
context.moveTo(100, 300); // позиция на canvase
context.lineTo(300, 300); // линия
context.lineTo(300, 100);
context.lineTo(200, 50);
context.lineTo(100, 100);
context.lineTo(100, 300);
context.strokeStyle = "#DA0000";




context.stroke(); //

context.beginPath();
context.arc(200, 200, 50, 0, 2 * Math.PI);
context.stroke();

context.beginPath();
context.rect(100, 300, 200, 20);
context.stroke();

// тело птицы
context.beginPath();
context.arc(265, 270, 18, 0, 2 * Math.PI);
context.fillStyle = "green";
context.fill();


// крыло птицы
context.beginPath();
context.moveTo(264, 265);
context.lineTo(268, 275);
context.lineTo(295, 265);
context.closePath();
context.fillStyle = "red";
context.fill();


// голова птицы
context.beginPath();
context.arc(250, 250, 15, 0, 2 * Math.PI);
context.fillStyle = "red";
context.fill();


// глаз птицы
context.beginPath();
context.arc(245, 247, 3, 0, 2 * Math.PI);
context.fillStyle = "black";
context.fill();

// клюв птицы
context.beginPath();
context.moveTo(235, 250);
context.lineTo(225, 255);
context.lineTo(239, 260);
context.fillStyle = "yellow";
context.fill();

// первая нога птицы
context.beginPath();
context.moveTo(260, 288);
context.lineTo(260, 300);
context.strokeStyle = "black";
context.stroke();

// вторая нога птицы
context.beginPath();
context.moveTo(270, 288);
context.lineTo(270, 300);
context.strokeStyle = "black";
context.stroke();
