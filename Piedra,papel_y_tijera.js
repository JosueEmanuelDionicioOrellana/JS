process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

var resultado = ["papel","tijera","piedra"]

    
var valor = Math.random()*3;
var jugador1 = Math.floor(valor);
var valor2 = Math.random()*3;
var jugador2 = Math.floor(valor2);

console.log("+--------------------------+")

if(jugador1==jugador2){
    console.log("|El jugador 1 saco: " + resultado[jugador1]);
    console.log("|El jugador 2 saco: " + resultado[jugador2]);

    console.log("|Es empate");
}

if(jugador1>jugador2){
    console.log("|El jugador 1 saco: " + resultado[jugador1]);
    console.log("|El jugador 2 saco: " + resultado[jugador2]);
    console.log("|gano el Jugador 1");
}
if(jugador1<jugador2){
    console.log("|El jugador 1 saco: " + resultado[jugador1]);
    console.log("|El jugador 2 saco: " + resultado[jugador2]);
    console.log("|gano el jugador 2");
}
console.log("+--------------------------+")


