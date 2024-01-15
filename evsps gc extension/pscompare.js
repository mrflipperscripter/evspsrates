if($(location).attr('href').split('=')[0] == "https://ship.pirateship.com/ship/batch?id"){
//   if(GM_getValue('Step') == 3){
chrome.storage.local.get("details").then(gotdetails, onError);
chrome.storage.local.get('steps').then(gotsteps, onError);
  waitForElement('span[class="css-53q5a2"]').then(function(){
    if(step == 3){
        if(localStorage.getItem('Count') != 0){
            if(localStorage.getItem('Count') % 25 === 0){
              if (confirm("You've compared shipping costs "+localStorage.getItem('Count')+" times since installing!\n\nRemove these alerts and request new features by becoming a member of my Ko-fi for as little as $1!\n\nFree Cross Listing tool coming soon!\n\nClick \'OK\' for details.") == true) {
                  window.open('https://ko-fi.com/mrflipperscripter')
              };
            };
          };
    // count = GM_getValue('Count');
    // GM_setValue('Count',count+1)
    cheapestchecker = document.querySelectorAll('span[class="css-53q5a2"]')
    for(var i = 0; i < cheapestchecker.length; i++){
      if(cheapestchecker[i].innerText == 'Cheapest'){
        cheapestchecker[i].click();
      };
    };
    waitForElement('div[class="css-ioh4yk eor3tp322"]').then(function(){
      if(Number($('div[class="css-ioh4yk eor3tp322"]').text().split('$')[1]) >= price){
        if (confirm('Ebay is cheaper at $'+(Math.round(price * 100) / 100).toFixed(2)+' using '+method+'!\n\nClick \'OK\' to head back to Ebay or \'Cancel\' to stay here.')){
            steps = {
                step: 4
              };
            chrome.storage.local.set({steps}).then(setItem, onError);
            chrome.storage.local.get('steps').then(gotsteps, onError);
            document.querySelector('button[class="e1wqgspp0 css-10gu5zq e149rjs01"]').click()
          waitForElement('button[class="css-1hpecs5 e1e91t1o0"]').then(function(){
            document.querySelector('button[class="css-1hpecs5 e1e91t1o0"]').click()
            // GM_setValue('Step',4)
          })
      };
      }else{
        alert('Pirate Ship is cheaper at $'+(Math.round(Number($('div[class="css-ioh4yk eor3tp322"]').text().split('$')[1]) * 100) / 100).toFixed(2)+' using '+$('div[class="css-1te52u5 e1rpzt3n1"]').text()+'!')
      };
    });
};
  });
};