function createCard(array,badgeStyle=""){
    var cards=[];
    try{
    array.forEach((item,i) => {
    var card = document.createElement("div");
    card.setAttribute("class","item card d-inline-flex m-2 rounded shadow-lg border");
    card.setAttribute("style","width:13rem;height:16rem;");

    //******CONDIÇÕES DO CARDS*******
    if(item.title=="Carregando..."){
      var divLoader = document.createElement("div");
      divLoader.setAttribute("class","card-img-top d-flex align-items-center");
      divLoader.setAttribute("style","height:13rem");

      var loader = document.createElement("div");
      loader.setAttribute("class","loader");
      divLoader.append(loader);
      card.append(divLoader);
    }else{

        var imageCard = document.createElement("img");
        imageCard.setAttribute("class","card-img-top");
        imageCard.setAttribute("src",item.image_url);
        imageCard.setAttribute("style","height:13rem");

        var linkImage = document.createElement("a");
        linkImage.setAttribute("id",item.mal_id);
        linkImage.setAttribute("target","_blank");
        linkImage.setAttribute("href","info.html");
        linkImage.setAttribute("onclick","releaseMal(this)");
        linkImage.append(imageCard);
        card.append(linkImage);
    }

    if(badgeStyle=="triangle"){
      var rank = document.createElement("span");
      rank.setAttribute("class","position-absolute");
      // rank.setAttribute("style","right:10px;top:-5px;border-radius:0 0px 20px 20px"); style de cartão
      rank.setAttribute("style","right:0px;top:0px; width: 0;height: 0;border-top: 30px solid #007bff;border-right: 30px solid #007bff;border-bottom:30px solid transparent;border-left: 30px solid transparent;");
      card.append(rank);

      var numberRANK = document.createElement("span");
      numberRANK.setAttribute("class","position-absolute text-white h1");
      numberRANK.setAttribute("style","right:5px;top:-10px;font-family: 'Tangerine', serif;");
      numberRANK.innerHTML=(i+1);
      card.append(numberRANK);
    }

    if(item.score !=null){
      if(badgeStyle!="triangle"){
        var badge = document.createElement("span");
        badge.setAttribute("class","badge badge-primary position-absolute p-1 rounded");
        badge.innerHTML="Score: "+item.score;
        card.append(badge);
      }
    }
    //******FIM DAS CONDIÇÕES DO CARDS*******

    var cardBody = document.createElement("div");
    cardBody.setAttribute("class","card-body p-0");
    cardBody.setAttribute("style","");


    var title = document.createElement("p");
    title.setAttribute("class","card-title mt-2 text-center m-0");
    title.setAttribute("data-toggle","tooltip");
    title.setAttribute("style","text-overflow:ellipsis;overflow:hidden;white-space:nowrap");
    title.setAttribute("data-placement","bottom");
    title.setAttribute("data-original-title","Clique para copiar o título");
    title.setAttribute("onclick","tooltipCopy(this)");
    title.setAttribute("id","t"+item.mal_id);
    title.setAttribute("data-clipboard-text",item.title);
    title.innerHTML=item.title;

    //ADICIONANDO A FUNÇÃO DE COPIAR NO TÍTULO AO CLICAR
    // new ClipboardJS('#t'+item.mal_id);

    cardBody.append(title);
    card.append(cardBody);
    cards[i] = card;
  });
}
catch(err){
  console.log("Provavelmente não foi passado o array como parâmetro, revise seu código com o erro: "+err);
}
  //RETORNO COM O HTML DE TODOS OS CARDS CRIADOS DENTRO DO FOREACH DO ARRAY DE INFORMAÇÕES
  //USADO COM O FOREACH. EX: CREATECARD(ARRAY,'TRIANGLE').FORAECH(FOO => DOCUMENT.BODY.APPEND(FOO));
  return cards;
}

//FUNÇÃO PARA MÚDAR O TÍTULO DO TOOLTIP PARA "COPIADO" QUANDO CLICAR ENCIMA
function tooltipCopy(component){
  //CRIA UM NOVO TÍTULO COM "COPIADO", MOSTRA ESSE TÍTULO E ALTERA DE VOLTA PARA O TÍTULO ORIGINAL.
  $('.card-title').attr("title", "Copiado!").tooltip('_fixTitle');
  $('#'+component.id).tooltip('show');
  $('.card-title').attr("title", "Clique para copiar o título").tooltip('_fixTitle');
}
window.tooltipCopy = tooltipCopy;
export default createCard;
