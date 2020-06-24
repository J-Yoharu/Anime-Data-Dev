import {loadVideo} from './info.js';
setTimeout(()=>{
  login();
}, 1000);

export var youtube = {
  async search(valor){
    var q = valor;
    try{
      var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet'
      });
      request.execute(function(response) {
        var str = JSON.stringify(response.result);
        var data = response.result;
        var id = response.result.items[0].id.videoId;
        loadVideo(id, data);
      });
    }
    catch(err){
      console.error('Erro API Youtube ' + err);
    }
  }
};

var OAUTH2_CLIENT_ID = '1098583120763-11iq7mlnh2thb8baijcm9is0arc4tb3m.apps.googleusercontent.com';
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

try{
  googleApiClientReady = function() {
      gapi.auth.init(function() {
        window.setTimeout(checkAuth, 1);
      });
  }
}
catch(err){
  console.error('Erro API Youtube: ' + err);
}

function checkAuth() {
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    $('.pre-auth').hide();
    $('.post-auth').show();
    loadAPIClientInterfaces();
  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    $('#login-link').click(function() {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
        }, handleAuthResult);
    });
  }
}

export function login() {
    try {
        gapi.client.setApiKey('AIzaSyCgP4-lfkaUghOpfbR4wTBIrtz_i0Z9TpY')
        gapi.client.load('youtube', 'v3');
    } catch (err) {
        console.error(`erro API Youtube ao fazer login: ${err}`);
    }
};

function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}
