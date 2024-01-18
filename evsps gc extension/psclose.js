if(window.location.href == 'https://ship.pirateship.com/ship'){
chrome.storage.local.get('steps').then(gotsteps, onError);
setTimeout(function(){
if(step == 4){
    chrome.storage.local.remove('steps')
//   if(GM_getValue('Step') == 4){
    // storedvalues = GM_listValues();
    // for (var i=0; i < storedvalues.length; i++) {
    //   if(storedvalues[i] != 'First Install' && storedvalues[i] != 'Count'){
    //     GM_deleteValue(storedvalues[i]);
    //   };
    // };
    setTimeout(function(){
    window.close();
},200)
  };
},200)
}