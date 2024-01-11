// ==UserScript==
// @name        EvsPS Rates
// @include     https://www.ebay.com/ship/single/*
// @include     https://ship.pirateship.com/import
// @include     https://ship.pirateship.com/ship/import
// @include     https://ship.pirateship.com/ship/batch?id=*
// @include     https://ship.pirateship.com/ship
// @grant       GM_openInTab
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_listValues
// @grant       GM.xmlHttpRequest
// @grant       window.close
// @require     https://code.jquery.com/jquery-3.7.1.js
// @version     0.8.2
// @author      mrflipperscripter
// @namespace   https://ko-fi.com/mrflipperscripter
// @homepage    https://github.com/mrflipperscripter/evspsrates
// @updateURL   https://github.com/mrflipperscripter/evspsrates/raw/main/evsps.user.js
// @icon        https://raw.githubusercontent.com/mrebayscripter/ebayvspirateship/main/icon.png
// @license     MIT License
// @description This simple javascript userscript allows users to quickly compare shipping rates between Ebay and Pirate Ship.
// ==/UserScript==
if(GM_getValue('Count') == undefined){
  GM_setValue('Count',0);
};
if(GM_getValue('First Install') == undefined){
  if (confirm("Thanks for installing!\n\nFor feature requests and support head on over to my Ko-fi! - (click OK...)\n\nI hope to keep this script FREE as well as anything else I craft up and with YOUR help I can!") == true) {
    GM_setValue('First Install','Done');
    GM_openInTab ('https://ko-fi.com/mrflipperscripter')
  }else{
    GM_setValue('First Install','Done');
  };
};
// First install code above //
function waitForElement(querySelector, timeout=0){
    const startTime = new Date().getTime();
    return new Promise((resolve, reject)=>{
        const timer = setInterval(()=>{
            const now = new Date().getTime();
            if(document.querySelector(querySelector)){
                clearInterval(timer);
                resolve();
            }else if(timeout && now - startTime >= timeout){
                clearInterval(timer);
                reject();
            }
        }, 100);
    });
};
// Wait code above //
if($(location).attr('host') == "www.ebay.com" && window.location.pathname.split('/')[1] == "ship"){
  storedvalues = GM_listValues();
  for (var i=0; i < storedvalues.length; i++) {
    if(storedvalues[i] != 'First Install' && storedvalues[i] != 'Count'){
      GM_deleteValue(storedvalues[i]);
    };
  };
  waitForElement('div.VcATc8PWzJARboErV91K').then(function(){
    waitForElement('div.VcATc8PWzJARboErV91K').then(function(){
      $('div.VcATc8PWzJARboErV91K').append('<input id="poly" type="checkbox" name="poly">Polymailer?</input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
      $('div.VcATc8PWzJARboErV91K').append('<button class="btn btn--primary" type="button" name="pirateship"><span>Check Pirate Ship</span></button>');
      $('button.btn.mpfxe2clYY6eHPGahJzK.btn--borderless').click();
      $('button[name="pirateship"]').click(function(){
        GM_setValue('Step',1);
        $('tr.EF0EY05UTsdb5PdKZvNQ').each(function(){
          shiptype = $(this).find('label.nfImMHAKbqSIEcDk7YLL').text();
          if(shiptype != "USPS Media Mail" && shiptype != "USPS Priority Mail Flat Rate Envelope" && shiptype != "USPS Priority Mail Flat Rate Legal Envelope" && shiptype != "USPS Priority Mail Flat Rate Small Box" && shiptype != "USPS Priority Mail Flat Rate Padded Envelope" && shiptype != "USPS Priority Mail Flat Rate Medium Box" && shiptype != "USPS Priority Mail Flat Rate Large Box" && shiptype != "USPS Priority Mail Express Flat Rate Envelope" && shiptype != "USPS Priority Mail Express Flat Rate Legal Envelope"){
            price = Number($(this).find('span._tUYyj7YjruQjNEZHSZ5').text().split('$')[1]);
            if(GM_getValue('Price') == undefined){
              GM_setValue('Price',price);
              GM_setValue('Method',shiptype);
            }else if(GM_getValue('Price') >= price){
              GM_setValue('Price',price);
              GM_setValue('Method',shiptype);
            };
          };
        });
        pounds = $('input[aria-label="Package weight in pounds"]').attr('value');
        ounces = $('input[aria-label="Package weight in ounces"]').attr('value');
        length2 = $('input[aria-label="Package length in inches"]').attr('value');
        width = $('input[aria-label="Package width in inches"]').attr('value');
        height = $('input[aria-label="Package height in inches"]').attr('value');
        hrefs = $('a[aria-label="Print packing slips"]').attr('href');
        hrefs2 = hrefs.substr(hrefs.indexOf("=") + 1);
        ordernm = hrefs2.substr(hrefs2.indexOf("=") + 1);
        polyied = $("input#poly").is(':checked');
        GM_setValue("Pounds",pounds);
        GM_setValue("Ounces",ounces);
        GM_setValue("Length",length2);
        GM_setValue("Width",width);
        GM_setValue("Height",height);
        GM_setValue("Order",ordernm);
        GM_setValue("Poly",polyied);
        GM_openInTab ('https://ship.pirateship.com/import');
      });
    });
  });
}
// above code stores ebay shipping dimensions/weight and shipping prices
  if($(location).attr('href') == "https://ship.pirateship.com/import"){
    if(GM_getValue('Step') == 1){
    waitForElement('a[class="btn btn-sm dock-triggersync btn-primary"]').then(function(){
      if(GM_getValue('Count') != 0){
        if(GM_getValue('Count') % 25 === 0){
          if (confirm("You've compared shipping costs "+GM_getValue('Count')+" times since installing!\n\nRemove these alerts and request new features by becoming a member of my Ko-fi for as little as $1!\n\nFree Cross Listing tool coming soon!\n\nClick \'OK\' for details.") == true) {
              GM_openInTab ('https://ko-fi.com/mrflipperscripter')
          };
        };
      };
      document.querySelector('a[class="btn btn-sm dock-triggersync btn-primary"]').click();
      waitForElement('a[class="btn btn-sm dock-triggersync custom-progress-bar btn-primary"]').then(function(){
        waitForElement('a[class="btn btn-sm dock-triggersync btn-primary"]').then(function(){
          columnspots = $('tr[role="row"] > th')
          for(var i = 0; i < columnspots.length; i++){
            if(columnspots.eq(i).attr('data-title') == 'Order ID'){
              GM_setValue('Column ID',i+1);
            }else if(columnspots.eq(i).attr('data-title') == 'Action'){
              GM_setValue('Column Action',i+1);
            }
          }
          $('tr.transaction-row').each(function(){
            z = GM_getValue('Column ID')
            x = GM_getValue('Column Action')
            orderdid = GM_getValue("Order");
            orderids = $(this).find('td:nth-child('+z+')').text();
            if(orderids == orderdid){
              GM_setValue("Step",2);
              $(this).find('td:nth-child('+x+') > span').click();
            };
          });
        });
      });
    });
  };
};
// above code finds matching order by ebay order number
if($(location).attr('href') == "https://ship.pirateship.com/ship/import"){
  if(GM_getValue('Step') == 2){
    waitForElement('div.dd-select').then(function(){
      GM_setValue('Step',3)
      ispoly = GM_getValue("Poly");
      if(ispoly == true){
        $('div.dd-select').click();
        $('img[src="/assets/skin/default/images/icons/packagetype-icons/SoftEnvelope.png"]').click();
        $('input#configuration-key-length').val(GM_getValue("Length"));
        $('input#configuration-key-width').val(GM_getValue("Width"));
        $('input#configuration-key-weight-pounds').val(GM_getValue("Pounds"));
        $('input#configuration-key-weight-ounces').val(GM_getValue("Ounces"));
        $('button#submit').click();
      }else if(ispoly == false){
        $('input#configuration-key-length').val(GM_getValue("Length"));
        $('input#configuration-key-width').val(GM_getValue("Width"));
        $('input#configuration-key-height').val(GM_getValue("Height"));
        $('input#configuration-key-weight-pounds').val(GM_getValue("Pounds"));
        $('input#configuration-key-weight-ounces').val(GM_getValue("Ounces"));
        $('button#submit').click();
      }
    });
  };
}
// above code sets values based on stored data from ebay
if($(location).attr('href').split('=')[0] == "https://ship.pirateship.com/ship/batch?id"){
  if(GM_getValue('Step') == 3){
  waitForElement('span[class="css-53q5a2"]').then(function(){
    count = GM_getValue('Count');
    GM_setValue('Count',count+1)
    cheapestchecker = document.querySelectorAll('span[class="css-53q5a2"]')
    for(var i = 0; i < cheapestchecker.length; i++){
      if(cheapestchecker[i].innerText == 'Cheapest'){
        cheapestchecker[i].click();
      };
    };
    waitForElement('div[class="css-ioh4yk eor3tp322"]').then(function(){
      if(Number($('div[class="css-ioh4yk eor3tp322"]').text().split('$')[1]) >= GM_getValue('Price')){
        if (confirm('Ebay is cheaper at $'+(Math.round(GM_getValue('Price') * 100) / 100).toFixed(2)+' using '+GM_getValue('Method')+'!\n\nClick \'OK\' to head back to Ebay or \'Cancel\' to stay here.')){
          document.querySelector('button[class="e1wqgspp0 css-10gu5zq e149rjs01"]').click()
          waitForElement('button[class="css-1hpecs5 e1e91t1o0"]').then(function(){
            document.querySelector('button[class="css-1hpecs5 e1e91t1o0"]').click()
            GM_setValue('Step',4)
          })
      };
      }else{
        alert('Pirate Ship is cheaper at $'+(Math.round(Number($('div[class="css-ioh4yk eor3tp322"]').text().split('$')[1]) * 100) / 100).toFixed(2)+' using '+$('div[class="css-1te52u5 e1rpzt3n1"]').text()+'!')
      };
    });
  });
  };
};
// above code shows ebay prices to compare with pirateship
if(window.location.href == 'https://ship.pirateship.com/ship'){
  if(GM_getValue('Step') == 4){
    storedvalues = GM_listValues();
    for (var i=0; i < storedvalues.length; i++) {
      if(storedvalues[i] != 'First Install' && storedvalues[i] != 'Count'){
        GM_deleteValue(storedvalues[i]);
      };
    };
    window.close();
  };
}
// above code goes back to ebay page if ebay is cheaper
