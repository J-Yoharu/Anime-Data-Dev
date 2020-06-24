import createCard from "../createCard.js";
//ID ÚNICO PARA CADA CAROUSEL, USADO PARA A INTERATIVIDADE DOS BOTÕES DE NEXT E PREV.
var idCarousel = 0;

//CRIANDO UM CAROUSEL PASSANDO UM ARRAY (NORMALMENTE PASSANDO UM ARRAY TRABALHADO).
function createCarousel(idAppend,array="loader",titleParameter="Loader",badgeStyle){

  if(document.getElementById(idAppend)){
    document.getElementById(idAppend).innerHTML="";
  }

  if(array == "loader"){
    array = [{'score':'...','title':'Carregando...','mal_id':'','image_url':''},{'score':'...','title':'Carregando...','mal_id':'','image_url':''},{'score':'...','title':'Carregando...','mal_id':'','image_url':''},{'score':'...','title':'Carregando...','mal_id':'','image_url':''},{'score':'...','title':'Carregando...','mal_id':'','image_url':''},];
  }
  //FUNÇÃO DE INICIALIZAÇÃO DO TOOLTIP
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
idCarousel+=1;

//CRIANDO O TITULO DO CAROUSEL
var rowTitle = document.createElement("div");
rowTitle.setAttribute("class","row");
var colTitle = document.createElement("div");
colTitle.setAttribute("class","col");
colTitle.setAttribute("id","title"+idCarousel);
var titleCarousel = document.createElement("h3");
titleCarousel.setAttribute("class","p-0 mb-0");
titleCarousel.setAttribute("style","color:#001829;");
titleCarousel.innerHTML=titleParameter;
// dando append titulo > col > rol.
rowTitle.append(colTitle);
colTitle.append(titleCarousel);

document.getElementById(idAppend).append(colTitle);
//CRIANDO O CAROUSEL
var slider = document.createElement("div");
slider.setAttribute("class","carousel"+idCarousel+" owl-carousel owl-theme text-center");

//CRIAÇÃO DOS BOTÕES DO CAROUSEL
var divNext = document.createElement("div");
divNext.setAttribute("class","btnCarousel next position-absolute d-flex align-items-center mt-4");
divNext.setAttribute("style","right:0;top:0;height:16rem;width:3rem;");
divNext.setAttribute("id",'Next'+idCarousel);

var iconNext = document.createElement("span");
iconNext.setAttribute("class","fa fa-3x fa-arrow-circle-right p-1");
iconNext.setAttribute("style","opacity: 0.8;");
divNext.append(iconNext);

var divPrev = document.createElement("div");
divPrev.setAttribute("class","btnCarousel prev position-absolute d-flex align-items-center mt-4");
divPrev.setAttribute("style","left:0;top:0;height:16rem;width:3rem;");
divPrev.setAttribute("id",'Prev'+idCarousel);

var iconPrev = document.createElement("span");
iconPrev.setAttribute("class","fa fa-3x fa-arrow-circle-left p-1");
iconPrev.setAttribute("style","opacity: 0.8;");
divPrev.append(iconPrev);
//FIM DA CRIAÇÃO DOS BOTÕES

if(titleParameter=="Animes mais assistidos"){
  ranker=true;
}

document.getElementById("title"+idCarousel).append(slider);

  // Para cada card criado, dar um append na div do carousel
  try{
    createCard(array,badgeStyle).forEach((card, i) => {
      slider.append(card);
    });
  }
  catch(err){
    console.log("Parece que seu array está sem valor algum!");
  }


 var owl = $('.carousel'+idCarousel);
 owl.owlCarousel({
    loop:true,
    items:7,
    nav:false,
    dots:false,
    dotsEach:false,
    dotsData:false,
    animateIn:true,
    navElement:"span",
    itemElement:"span",
    responsive: {
      0: {
        items:1
      },
      600: {
        items:2
      },
      800:{
        items:3
      },
      1000: {
        items:4
      },
      1100:{
        items:4
      },
      1200:{
        items:5
      },
      1400:{
        items:5
      }
    }
  });

  slider.append(divPrev);
  slider.append(divNext);
  $('#Next'+idCarousel).click(function() {
      owl.trigger('next.owl.carousel');
  });
  $('#Prev'+idCarousel).click(function() {
      owl.trigger('prev.owl.carousel');
  });
}
window.createCarousel = createCarousel;
export default createCarousel;
