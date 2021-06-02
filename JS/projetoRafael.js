//Ativar os tooltips que são derivados do bootstrap 3
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

//Animar ao utilizar o scroll na página

//Primeiro retornamos uma nodeList relacionada a classe "aparecerJS" que estará vinculada a variavel sections
var sections = document.querySelectorAll('.aparecerJS');

//Agora criamos uma variavel chamada sectionTop que será o valor da altura da tela do usuário * 0.85
//o valor é de 0.85, pois pegamos 85% do tamanho da tela do usuário para poder fazer essa animação
var sectionTop = window.innerHeight*0.85;

//Definimos aqui que o primeiro elemento da nodeList asism que abrir a página ira estar ativo com o css
sections[0].classList.add('ativo');

//Criamos então a função para assim podermos estar aplicando o efeito de animação enquanto o usuário
//Desce a página

function animarScroll(){

  //Primeiro é aplicado um forEach, ou seja, iremos aplicar um looping em todos os elementos da nodeList
  sections.forEach((i) => {

    //const é uma variavel criada em Ecmascript 6
    //criamos então a variavel ToTop, que é nada mais nada menos que pegar em cada um dos elementos do looping
    //um getBoundClientRect().top, ou seja, estamos pegando dinamicamente qual a altura de cada elemento
    //na tela do usuário
    const toTop = i.getBoundingClientRect().top;

    //Aqui criamos então a variavel sectionToTop, ela segue a mesma lógica matematica em que primeiro é
    //calculado o valor entre parenteses para depois ser executado o que está fora, ou seja
    //primeiro vemos o valor de toTop-sectionTop para após isso retornar se é true ou false ela ser
    //menor que 0
    const sectionToTop = (toTop - sectionTop) < 0;

    //if basico, se sectionToTop for true, iremos adcionar a classe ativa criada via CSS no elemento 
    //da nodeList que criamos com a variavel sections la em cima    
    if(sectionToTop){
      i.classList.add('ativo');
    }
  })
};

//fotos dos personagens

//primeiro criamos duas nodeLists, uma relacionada as fotos e outra relacionada ao conteúdo
var tabMenu = document.querySelectorAll('.lista-personagens li');
var tabContent = document.querySelectorAll('.tab-content section');

//Lógicamente queremos que assim que a página seja carregada, o primeiro conteúdo esteja ja aparecendo
tabContent[0].classList.add('ativo');

//Função básica para que apareça o conteúdo de cada personagem ao ser clicado em sua respectiva imagem
//o index que definimos como parametro será a foto que iremos clicar
function ativarTab(index){
  tabContent.forEach((e) => {
    e.classList.remove('ativo');
  })
  tabContent[index].classList.add('ativo');
};
tabMenu.forEach((i, index) => {
  i.addEventListener('click', () => {
    ativarTab(index);
  })
});

//Hover nos Personagens

//Aqui foi criado um efeito de hover em cada uma das fotos utilizando javascript
var personagens = document.querySelectorAll('.lista-personagens li');
function hoverPersonagens(index){
     personagens.forEach((i) => {
          i.classList.remove('personagem')
     });
     personagens[index].classList.add('personagem');
};
function removerHover(index){
     personagens.forEach((i) => {
          i.classList.remove('personagem')
     })
};
personagens.forEach((e, index) => {
     e.addEventListener('mouseover', () => {
          hoverPersonagens(index)
     });
     e.addEventListener('mouseout', () =>{
          removerHover(index)
     });
});

//Scroll suave em Links Internos

//lembrar, toda vez que utilizamos querySelectorAll significa que estamos retornando uma nodeList relacionada
//ao elemento mencionado
var linksInternos = document.querySelectorAll('a[href^="#"]');
function scrollSuave(e){

  //preventDefault() previne o padrão ja estiplado para a página, bem feijão com arroz
  e.preventDefault();
  var href = e.currentTarget.getAttribute('href');
  var irPara = document.querySelector(href);

  //Aqui ocorre a mágica, o métido scrollIntoView faz com que consigamos aplicar sem a necessidade da 
  //utilização de css um efeito smooth ao irmos para um ponto da página via link interno
  irPara.scrollIntoView({
    behavior:'smooth',
    block: 'start',
  })
};
linksInternos.forEach((i) => {
  i.addEventListener('click', scrollSuave)
});

//Accordion list, as listas expansiveis referente aos filmes

var listaAccordion = document.querySelectorAll('.accordionFilmes dt');
var conteudoAccordion = document.querySelectorAll('.accordionFilmes dd')
function abrirAccordion(){

  //Aqui removemos a classe ativa referente aos elementos da nodeList que retornamos com a variavel
  //listaAccordion
  listaAccordion.forEach((t) => {
    t.classList.remove('ativo')
  });
  //Ídem, só que agora para a variavel do conteúdo dessa lista
  conteudoAccordion.forEach((c) => {
    c.classList.remove('ativo')
  })

  //sempre que utilizamos o this, ele vai estar ligado diretamente ao local que estamos executando a função
  //this em inglês é "isto"
  this.classList.add('ativo');
  //nextElementSibling é uma propriedade que retorna imediatamente o elemento seguido do elemento chamado
  //No caso desse projeto, estamos retornando o dd que vem posterior ao dt clicado
  this.nextElementSibling.classList.add('ativo');
};
listaAccordion.forEach((i) => {
  i.addEventListener('click',abrirAccordion)
})

//Volar ao Topo

//Aqui foi utilizado jquery pq porra, uma biblioteca que facilita pra caralho nossa vida kkkkkkkk
function scrollTop(){
    if($(this).scrollTop()>200){
      $('.irParaTopo').fadeIn();
    } else {
      $('.irParaTopo').fadeOut();
    }
};
$('.irParaTopo').click(function(){
  $('html,body').animate({scrollTop: 0})
});

//ativar funções que utilizam o scroll da página
window.onscroll = function(){
  animarScroll();
  scrollTop();
};