const color="#0000000"
const tamanio=3;
var pintura=false;

function pintar(event){
    var canvas=document.getElementById('canvas');
    var ctx=canvas.getContext('2d');
    var x=event.clientX-13;
    var y=event.clientY+30;
    if(pintura){
        ctx.fillStyle=color;
        ctx.fillRect(x,y,tamanio,tamanio);
    }
}

function activar(){
    pintura=true;
}
function desactivar(){
    pintura=false;
}

function borrar(){
    document.getElementById('contentCanvas').innerHTML=`<canvas width="500" height="500" id="canvas" onmousemove="pintar(event)" onmousedown="activar()" onmouseup="desactivar()"></canvas>`;
}

function GetImage(){
    var canvas=document.getElementById('canvas');
    var image=canvas.toDataURL('image/png')
    this.href=image
}