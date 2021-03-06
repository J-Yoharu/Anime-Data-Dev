export var anime = {
  async search(){
    try{
      let data = await connectionApi(animeSearch());
      return data.data.results;
    }
    catch(error){
      console.log(error)
    }
  },
  async top(){
    try{
      let data = await connectionApi(animeTop());
      return data.data.top;
    }
    catch(error){
      console.log(error)
    }
  },
  async week(){
    try{
      let week = dayOfTheWeek();
      week = week.toLowerCase();
      let data = await connectionApi(animeWeek(dayOfTheWeek()));
      return data.data[week];
    }
    catch(error){
      console.log(error);
    }
  },
  async data(id){
    try{
      let data = await connectionApi(animeData(id));
      return data.data;
    }
    catch(error){
      console.log(error)
    }
  },
  async gender(){
    try{
    let config = {
      mode : 'no-cors'
    };
    let data = await connectionApi(animeGender(), config);
    return data.data;
    }
    catch(error){
      console.log(error)
    }
  },
}

function animeSearch(){ return `https://api.jikan.moe/v3/search/anime?q=${ document.getElementById("inputAnime").value}`;}

function animeTop(){ return `https://api.jikan.moe/v3/top/anime/1/tv`;}

function animeWeek(week){ return `https://api.jikan.moe/v3/schedule/${week}`;}

function animeGender(){ return `https://api.jikan.moe/v3/genre/anime/1/`;}

function animeData(mal_id){ return `https://api.jikan.moe/v3/anime/${mal_id}`;}

async function connectionApi(animeQuery, config ={}){
    return axios.get(animeQuery, config);
}

function dayOfTheWeek(){
  var dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var day = [1,2,3,4,5,6,0];
  var date = new Date();
  date = date.getDay();
  day.filter((item, index) => {
    if(date == item){
      dayOfTheWeek = dayOfTheWeek[index];
    }
  });
  return dayOfTheWeek;
}
