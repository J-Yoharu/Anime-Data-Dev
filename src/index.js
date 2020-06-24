import {anime} from "./search.js";
import carousel from "./carousel/carousel.js";
import createCard from "./createCard";

//DEFINE O SCROLL MÍNIMO PARA ATUALIZAR A PESQUISA COM NOVOS CARDS
localStorage.sco = 10;
//ARRAY COM O RESTO DA PESQUISA DO ARRAY ORIGINAL PARA DAR SCROLL INFINITO
var arrayScroll = [];

async function loadHome(){
  //chamando o loader do carousel
    createCarousel("containerCarousel1","loader");
    createCarousel("containerCarousel2","loader");

    let x = await anime.week();
    createCarousel("containerCarousel1",x,"Animes da semana");

  setTimeout(async () => {
    let y = await anime.top();
    createCarousel("containerCarousel2",y,"Animes top");
  }, 4000);

}
window.loadHome = loadHome;

function home(){
  document.getElementById("searchContainer").style.display="none";
  let content = document.getElementById("content");
  content.removeAttribute("style");
}

async function homeSearch(){
  var key = event.key;
  if(key=='Enter'){

    if(document.getElementById("inputAnime").value.length <=2){
      alert("insira pelo menos 3 caracteres!");
    }
    else{
      let animeName = document.getElementById("inputAnime").value
      let y = await anime.search();
      setSearchArea(y,"searchContainer","Sua pesquisa: " + animeName);
    }
  }
}
window.homeSearch = homeSearch;

async function homeSearchClick(){
  if(document.getElementById("inputAnime").value.length <=2){
    alert("insira pelo menos 3 caracteres!");
  }
  else{
    let animeName = document.getElementById("inputAnime").value
    let y = await anime.search();
    setSearchArea(y,"searchContainer","Sua pesquisa: " + animeName);
  }
}
window.homeSearchClick = homeSearchClick;

//Criação da barra de pesquisa
function createSearchBar(id){
  let idAppend = document.getElementById(id);

  //definindo elementos da barra de pesquisa
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "inputAnime");
  input.setAttribute("class", "form-control");
  input.setAttribute("placeholder", "Pesquisar");
  input.setAttribute("onkeypress","homeSearch()");

  let div = document.createElement("div");
  div.setAttribute("class", "input-group-prepend");

  let span = document.createElement("span");
  span.setAttribute("class", "input-group-text fa fa-search");
  span.setAttribute("onclick", "homeSearchClick()");

  //Anexando elementos
  div.append(span);
  idAppend.append(input);
  idAppend.append(div);
}

//Trocando input de pesquisa de local
export function toggleSearchBar(obj){
  if(obj.id == 'btnHome'){
    localStorage.sco = 60;
    document.getElementById("searchNav").innerHTML = "";
    document.getElementById("content").style.display="block";
    if(!document.getElementById("searchDefault").children.length >=1){
      createSearchBar("searchDefault");
    }
    document.getElementById("searchContainer").innerHTML="";
  }

  else if(document.getElementById("searchDefault").children.length >=1){
    document.getElementById("searchDefault").innerHTML = "";
    document.getElementById("content").style.display="none";
    createSearchBar("searchNav");
  }
}

window.toggleSearchBar = toggleSearchBar;

function releaseMal(obj){
  localStorage.mal_id = obj.id;
}
window.releaseMal = releaseMal;


function updatePage(){
  //SE EXISTIR A DIV CARDAPPEND (DIV ONDE FICA O RESULTADO DA PESQUISA)
  if(document.getElementById("cardAppend")){

    //SE O SCROLL ROLADO FOI MAIOR QUE O MÍNIMO DETERMINADO NA VÁRIAVEL SCO.
    if(document.documentElement.scrollTop > localStorage.sco){

      //SE O ARRAY ESTIVER VAZIO / SE NÃO CRIAR 10 NOVOS CARDS COM O RESTO DA PESQUISA
      if(arrayScroll.length == 0){
        console.log("Fim do array da pesquisa!");
      }else{
        alert("Cards inseridos");
        createCard(arrayScroll.splice(0,10),false).forEach((card,i) => {document.getElementById("cardAppend").append(card)});
        localStorage.sco = document.getElementById("cardAppend").clientHeight - window.innerHeight;
      }
    }
  }
}
window.updatePage = updatePage;
//FUNÇÃO PARA A CRIAÇÃO DA ÁREA DE PESQUISA COM OS CARDS.
export function setSearchArea(array, idAppend, titleS){
  let qtdCard=15;

  window.scrollTo(0,0);
  //limpando o conteúdo da pesquisa anterior
  document.getElementById(idAppend).innerHTML="";

//CRIANDO O CONTAINER DOS CARDS E TÍTULO
  var rowTitle = document.createElement("div");
  rowTitle.setAttribute("class","row");
  var colTitle = document.createElement("div");
  colTitle.setAttribute("class","col");
  var titleSearch = document.createElement("h3");
  titleSearch.setAttribute("class","p-0 mb-0");
  titleSearch.innerHTML=titleS;
  colTitle.append(titleSearch);
  rowTitle.append(colTitle);
  document.getElementById(idAppend).append(rowTitle);

  var cardContainer = document.createElement("div");
  cardContainer.setAttribute("class","row mt-2 d-flex justify-content-center");
  cardContainer.setAttribute("id","cardAppend");
  document.getElementById(idAppend).append(cardContainer);
  //FIM DA CRIAÇÃO DO CONTAINER/TITULO

  // Para cada card criado a partir do array, dar um append na div da pesquisa
  createCard(array.splice(0,qtdCard),false).forEach((card, i) => {
    document.getElementById("cardAppend").append(card);
  });

  //após usar o método splice (recortar elementos do array, foi atribuido a variavel arrayScroll o resto do array da pesquisa para usar no scroll
  arrayScroll=array;

}
