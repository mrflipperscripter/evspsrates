if($(location).attr('href') == "https://ship.pirateship.com/import"){
    chrome.storage.local.get("details").then(gotdetails, onError);
    chrome.storage.local.get('steps').then(gotsteps, onError);
    waitForElement('a[class="btn btn-sm dock-triggersync btn-primary"]').then(function(){
      // if(GM_getValue('Count') != 0){
      //   if(GM_getValue('Count') % 25 === 0){
      //     if (confirm("You've compared shipping costs "+GM_getValue('Count')+" times since installing!\n\nRemove these alerts and request new features by becoming a member of my Ko-fi for as little as $1!\n\nFree Cross Listing tool coming soon!\n\nClick \'OK\' for details.") == true) {
      //         GM_openInTab ('https://ko-fi.com/mrflipperscripter')
      //     };
      //   };
      // };
      document.querySelector('a[class="btn btn-sm dock-triggersync btn-primary"]').click();
      waitForElement('a[class="btn btn-sm dock-triggersync custom-progress-bar btn-primary"]').then(function(){
        if(step == 1){
          if(localStorage.getItem('Count') == null){
            localStorage.setItem('Count',0);
          };
        waitForElement('a[class="btn btn-sm dock-triggersync btn-primary"]').then(function(){
          columnspots = $('tr[role="row"] > th')
          for(var i = 0; i < columnspots.length; i++){
            if(columnspots.eq(i).attr('data-title') == 'Order ID'){
              localStorage.setItem('Column ID',i+1);
            }else if(columnspots.eq(i).attr('data-title') == 'Action'){
              localStorage.setItem('Column Action',i+1);
            }
          }
          $('tr.transaction-row').each(function(){
            z = localStorage.getItem('Column ID')
            x = localStorage.getItem('Column Action')
            orderdid = order
            orderids = $(this).find('td:nth-child('+z+')').text();
            if(orderids == orderdid){
              steps = {
                step: 2
              };
            chrome.storage.local.set({steps}).then(setItem, onError);
            chrome.storage.local.get('steps').then(gotsteps, onError);
              // GM_setValue("Step",2);
              $(this).find('td:nth-child('+x+') > span').click();
            };
          });
        });
      };
      });
    });
};