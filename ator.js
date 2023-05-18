//ator jogo

let xAtor = 100;
let yAtor = 368;
let wAtor = 30;
let hAtor = 30;
let pontos = 0;

//colisao

let hit = false;

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, wAtor, hAtor);
}

function movimentaAtor() {
  if(keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += 2;
  }
}

function verificaColisao () {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    hit = collideRectCircle(xCarros[i], yCarros[i], wCarros, hCarros, xAtor, yAtor, 20);
    if (hit){
      colidiu();
      somColisao.play();
      pontos -= pontos;
    }
  }
}

function colidiu(){
  yAtor = 368;
}

function incluiPontos(){
  textSize(25)
  fill(color(255, 240, 60))
  text(pontos, 108, 26)
}

function marcaPontos(){
  if (yAtor < 15){
    pontos += 1;
    colidiu();
    somPonto.play();
  }
}