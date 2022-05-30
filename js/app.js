

var amplitud = 20;
var frecuencia =0.01;

var fase =0;

/////////////////////////////////////////////////////////////////////////////////


var canvas = document.getElementById("senoidal");

var ctx = canvas.getContext("2d");





function showAxes(ctx,axes) {
  var width = ctx.canvas.width;

  var height = ctx.canvas.height;
  
  var xMin = 0;
  
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgb(255,255, 255)";
  
  // X-Axis
  ctx.moveTo(xMin, height/2);
  ctx.lineTo(width, height/2);
  
  // Starting line
 ctx.moveTo(10, 0);
 ctx.lineTo(10, height);
  
  ctx.stroke();
}
/* 

function drawPoint(ctx, y) {            
  var radius = 3;
  ctx.beginPath();

  // Hold x constant at 4 so the point only moves up and down.
  ctx.arc(4, y, radius, 0, 2 * Math.PI, false);

  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.stroke();
}
 */


function plotSine(ctx, xOffset, amp, freq) {
  var width = ctx.canvas.width;
  var height = ctx.canvas.height;
  var scale = 10;

  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgb(234,44,123)";

  // console.log("Drawing point...");
  // drawPoint(ctx, yOffset+step);
  
  var x = 10;
  var y = 0;
 // var amplitude = 15;
 // var periodo = 50;   //VER ESTO ES PERIODO
  ctx.moveTo(x, y);
  ctx.moveTo(x, height/2);    //antes de 0 50
  while (x < width) {
      y = height/2 + amp * Math.sin((2 * Math.PI * freq*x) - xOffset);
      ctx.lineTo(x, y);
      x++;
      ctx.stroke();   // console.log("x="+x+" y="+y);
  }
  ctx.stroke();
  ctx.save();
 
  console.log("Drawing point at y=" + y);
 // drawPoint(ctx, y);
  ctx.stroke();
  ctx.restore(); 
}






function draw() {
 // var canvas = document.getElementById("senoidal");
 /// var context = canvas.getContext("2d");

  ctx.clearRect(0, 0, 500, 500);
 showAxes(ctx);
  ctx.save();            
  
  plotSine(ctx, fase+10, amplitud, frecuencia);   //antes de 0 50
  ctx.restore();
  
 // step += 20;
  window.requestAnimationFrame(draw);
}



function spirograph() {            
  
  
  showAxes(ctx);
 ctx.save();
  // var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  var step = 4;
  for (var i = -4; i < canvas.height; i += step) {
      // context.putImageData(imageData, 0, 0);
      plotSine(ctx, i, 54 + i);
  }
}


function init() {
  window.requestAnimationFrame(draw);
  spirograph();
}


var step = -4;


init();


//////////////////////////////////////////////////////////////


function NuevaSenoidal(){
  amplitud = document.getElementById("amplitud").value;
  frecuencia = document.getElementById("frecuencia").value;
 fase = document.getElementById("fase").value;
  
  init();
}


function validar(){

  var nombre = document.getElementById('nombre').value;
  var correo = document.getElementById('mail').value;
  var mensaje = document.getElementById('msg').value;

  
  var nameError = document.getElementById('nombreError');
  var emailError = document.getElementById('emailError');
  var msgError = document.getElementById('msgError');

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(nombre.length == 0){
    //alert("completar nombre");
    nameError.innerHTML = 'Por favor agregue un nombre';
    return false;
  } 
  else if(correo.length==0){
    emailError.innerHTML = 'Por favor agregue un email ';
    return false;
  }
  else if(!correo.match(mailformat)){
    emailError.innerHTML = 'Por favor agregue un email válido';
    return false;
  }
  else if(mensaje.length==0){
    msgError.innerHTML = 'Recuerde agregar el mensaje';
    return false;
  }

  
  nameError.innerHTML = '';
  emailError.innerHTML = '';
  msgError.innerHTML ='';
  


  }





