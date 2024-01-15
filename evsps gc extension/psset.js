if($(location).attr('href') == "https://ship.pirateship.com/ship/import"){
    chrome.storage.local.get("details").then(gotdetails, onError);
    chrome.storage.local.get('steps').then(gotsteps, onError);
    waitForElement('div.dd-select').then(function(){
        if(step == 2){
            count = localStorage.getItem('Count');
            localStorage.setItem('Count',count+1);
        steps = {
            step: 3
          };
        chrome.storage.local.set({steps}).then(setItem, onError);
        chrome.storage.local.get('steps').then(gotsteps, onError);
      ispoly = poly;
      if(ispoly == true){
        $('div.dd-select').click();
        $('img[src="/assets/skin/default/images/icons/packagetype-icons/SoftEnvelope.png"]').click();
        $('input#configuration-key-length').val(length);
        $('input#configuration-key-width').val(width);
        $('input#configuration-key-weight-pounds').val(pounds);
        $('input#configuration-key-weight-ounces').val(ounces);
        $('button#submit').click();
      }else if(ispoly == false){
        $('input#configuration-key-length').val(length);
        $('input#configuration-key-width').val(width);
        $('input#configuration-key-height').val(height);
        $('input#configuration-key-weight-pounds').val(pounds);
        $('input#configuration-key-weight-ounces').val(ounces);
        $('button#submit').click();
      }
    };
    });
}