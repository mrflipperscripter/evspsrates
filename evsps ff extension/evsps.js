if($(location).attr('host') == "www.ebay.com" && window.location.pathname.split('/')[1] == "ship"){
  if(localStorage.getItem('First Install') == null){
        alert('huh')
        if (confirm("Thanks for installing!\n\nFor feature requests and support head on over to my Ko-fi! - (click OK...)\n\nI hope to keep this script FREE as well as anything else I craft up and with YOUR help I can!") == true) {
            localStorage.setItem('First Install','Done');
            window.open('https://ko-fi.com/mrflipperscripter')
          }else{
            localStorage.setItem('First Install','Done');
          };
    } 
    // storedvalues = GM_listValues();
    // for (var i=0; i < storedvalues.length; i++) {
    //   if(storedvalues[i] != 'First Install' && storedvalues[i] != 'Count'){
    //     GM_deleteValue(storedvalues[i]);
    //   };
    // };
    waitForElement('div.VcATc8PWzJARboErV91K').then(function(){
      waitForElement('div.VcATc8PWzJARboErV91K').then(function(){
        $('div.VcATc8PWzJARboErV91K').append('<input id="poly" type="checkbox" name="poly">Polymailer?</input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        $('div.VcATc8PWzJARboErV91K').append('<button class="btn btn--primary" type="button" name="pirateship"><span>Check Pirate Ship</span></button>');
        $('button.btn.mpfxe2clYY6eHPGahJzK.btn--borderless').click();
        $('button[name="pirateship"]').click(function(){
          localStorage.removeItem('price')
          pounds = $('input[aria-label="Package weight in pounds"]').attr('value');
          ounces = $('input[aria-label="Package weight in ounces"]').attr('value');
          length2 = $('input[aria-label="Package length in inches"]').attr('value');
          width = $('input[aria-label="Package width in inches"]').attr('value');
          height = $('input[aria-label="Package height in inches"]').attr('value');
          hrefs = $('a[aria-label="Print packing slips"]').attr('href');
          hrefs2 = hrefs.substr(hrefs.indexOf("=") + 1);
          ordernm = hrefs2.substr(hrefs2.indexOf("=") + 1);
          polyied = $("input#poly").is(':checked');
          // GM_setValue('Step',1);
          $('tr.EF0EY05UTsdb5PdKZvNQ').each(function(){
            shiptype = $(this).find('label.nfImMHAKbqSIEcDk7YLL').text();
            if(shiptype != "USPS Media Mail" && shiptype != "USPS Priority Mail Flat Rate Envelope" && shiptype != "USPS Priority Mail Flat Rate Legal Envelope" && shiptype != "USPS Priority Mail Flat Rate Small Box" && shiptype != "USPS Priority Mail Flat Rate Padded Envelope" && shiptype != "USPS Priority Mail Flat Rate Medium Box" && shiptype != "USPS Priority Mail Flat Rate Large Box" && shiptype != "USPS Priority Mail Express Flat Rate Envelope" && shiptype != "USPS Priority Mail Express Flat Rate Legal Envelope"){
              price = Number($(this).find('span._tUYyj7YjruQjNEZHSZ5').text().split('$')[1]);
              if(localStorage.getItem('price') == undefined){
                localStorage.setItem('price', price);
                localStorage.setItem('method', shiptype);
              // steps = {
              //   step: 1
              // }
            
              // browser.storage.local.set({steps}).then(setItem, onError);
              }else if(localStorage.getItem('price') >= price){
                localStorage.setItem('price',price);
                localStorage.setItem('method',shiptype);
                
              // steps = {
              //   step: 1
              // }
             
              };
            };
          });
        //   GM_setValue("Pounds",pounds);
        //   GM_setValue("Ounces",ounces);
        //   GM_setValue("Length",length2);
        //   GM_setValue("Width",width);
        //   GM_setValue("Height",height);
        //   GM_setValue("Order",ordernm);
        //   GM_setValue("Poly",polyied);
        //   GM_openInTab ('https://ship.pirateship.com/import');
        
          details = {
            pounds: pounds,
            ounces: ounces,
            length: length2,
            width: width,
            height: height,
            order: ordernm,
            poly: polyied,
            price: localStorage.getItem('price'),
            method: localStorage.getItem('method')
            
        };
        browser.storage.local.set({details}).then(setItem, onError);
        browser.storage.local.get('details').then(gotdetails, onError);
        steps = {
          step: 1
        };
      browser.storage.local.set({steps}).then(setItem, onError);
      browser.storage.local.get('steps').then(gotsteps, onError);
        setTimeout(() => {
          window.open('https://ship.pirateship.com/import')
        },200);
        });
      });
    });
  }