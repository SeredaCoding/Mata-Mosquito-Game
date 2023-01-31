/*Descobrindo os limites de tela
   altura = window.innerHeight
   largura = window.innerWidth*/

/*Criando posições randômicas
  style.left
  style.top
 */

var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criaMosquitoTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'nenem'){
  //2500
  criaMosquitoTempo = 2500
}else if(nivel === 'normal'){
  //2000
  criaMosquitoTempo = 2000
}else if(nivel === 'dificil'){
  //1000
  criaMosquitoTempo = 1000
}else if(nivel === 'm_dificil'){
  //750
  criaMosquitoTempo = 750
}


function ajustaTamanho(){
	altura = window.innerHeight;
	largura = window.innerWidth;

	console.log(largura, altura);
}

ajustaTamanho();

/*Cronometro e Vitória*/
var cronometro = setInterval(function(){
  tempo -= 1

  if(tempo < 0){
    clearInterval(cronometro)
    clearInterval(criaMosquito)
    alert('Vitória!')
    window.location.href = 'vitoria.html'
  } else{
    document.getElementById('cronometro').innerHTML = tempo
  }

  
}, 1000);


function posicaoRandomica(){

  //remover mosquito anterior(caso exista)
  if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove();

    //console.log('elemento selecionado v' + vidas)
    if (vidas > 4) {
      window.location.href = 'game_over.html'
    }
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png";

    vidas++
  }
  

  var posicaoX= Math.floor(Math.random() * largura) - 90;
  var posicaoY= Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;/* operador ternário ( ? SE FOR ) , ( : SE NÃO ) */
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);

  //criar o elemento html
  /* O DOM é uma árvore de elementos, sendo que podemos adicionar
   ou remover elementos através da sua api, através do objeto document*/

  var mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosquito.png';
  mosquito.className = tamanhoAleatorio() + ladoAleatorio();
  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  mosquito.style.position = 'absolute';
  mosquito.id = 'mosquito';
  mosquito.onclick = function(){
    this.remove()
  }

  document.body.appendChild(mosquito);

  console.log(tamanhoAleatorio());

  console.log(ladoAleatorio());

}

function tamanhoAleatorio(){
  var classe = Math.floor(Math.random() * 4); /* Math.random gera um número de 0 até próximo de 1, ou seja,
   se multiplicado por 3, ele gera um número de 0 até muito próximo de 3 */

  switch(classe){
    case 0:
      return 'mosquito1 '

    case 1:
      return 'mosquito2 '

    case 2:
      return 'mosquito3 '

    case 3:
      return 'mosquito4 '
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2)

  switch(classe){
    case 0:
      return 'ladoA'

    case 1:
      return 'ladoB'
  }
}


