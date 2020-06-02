async function loadHome(){


  let x = await search("","animeWeek");
  createCarousel(x,"carouselContainer","Animes da semana");

  let y = await search("","animeTop");
  createCarousel(y,"carouselContainer","Animes mais assistidos");

}

function home(){
  console.log(this)
  document.getElementById("searchContainer").style.display="none";
  let content = document.getElementById("content");
  content.removeAttribute("style");
}

async function homeSearch(){
  let y = await search("","animeSearch");
  createCardSearch(y,"searchContainer","Sua pesquisa");
}

//Criação da barra de pesquisa
function createSearchBar(id){
  let idAppend = document.getElementById(id);

  //definindo elementos da barra de pesquisa
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "inputAnimeNav");
  input.setAttribute("class", "form-control");
  input.setAttribute("placeholder", "Pesquisar");

  let div = document.createElement("div");
  div.setAttribute("class", "input-group-prepend");

  let span = document.createElement("span");
  span.setAttribute("class", "input-group-text fa fa-search");
  span.setAttribute("onclick", "homeSearch()");

  //Anexando elementos
  div.append(span);
  idAppend.append(input);
  idAppend.append(div);
}

//Trocando input de pesquisa de local
function toggleSearchBar(obj){
  
  if(document.getElementById("searchDefault").children.length == 1){
    console.log("if");
    document.getElementById("searchDefault").innerHTML = "";
    document.getElementById("content").style.visibility = "hidden";
    createSearchBar("searchNav");
  }
  else if(obj.id == 'btnHome'){
    console.log("else");
    document.getElementById("searchNav").innerHTML = "";
    document.getElementById("content").style.visibility = "visible";
    createSearchBar("searchDefault");
  }
}
