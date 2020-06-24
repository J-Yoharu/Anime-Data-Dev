import {loaderCarousel,createCarousel,setSearchArea} from "./carousel.js";
import {anime} from "./search.js";

async function loadHome(){
  // SEMPRE CHAMAR O CREATE LOADER ANTES DE CHAMAR O CAROUSEL, PARA CRIAR O CONTAINER PARA O CAROUSEL
  loaderCarousel('loader1',"carouselContainer");
  loaderCarousel('loader2',"carouselContainer");

  let x = await anime.week();
  createCarousel(x,"loader1","Animes da semana");

  setTimeout(async () => {
    let y = await anime.top();
    createCarousel(y,"loader2","Animes mais assistidos");
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
    toggleSearchBar("");
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
