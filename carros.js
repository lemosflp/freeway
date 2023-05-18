//carros
let wCarros = 50;
let hCarros = 30;
let yCarros = [45, 100, 155, 215, 270, 325];
let xCarros = [600, 600, 600, 600, 600, 600];
let velocidadeCarros = [8, 4.5, 4.2, 5, 3.5, 3];


function mostraCarro() {
  for (let i = 0; i < imagemCarros.length;i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], wCarros, hCarros);
  }
}
function movimentaCarro () {
  for (let i = 0; i < imagemCarros.length;i++) {
  xCarros[i] -= velocidadeCarros[i];
    }
}

function loopCarros() {
  for (let i = 0; i < imagemCarros.length;i++) {
    if (passouTela(xCarros[i])){
    xCarros[i] = 600;
  }
 }
}

function passouTela(xCarro) {
  return xCarro < - 50;
}