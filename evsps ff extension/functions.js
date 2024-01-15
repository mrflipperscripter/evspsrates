function gotdetails(item) {
  if(item.details.order == undefined){
    order = ""
  }else{
    order = item.details.order
  }
  if(item.details.pounds == undefined){
    pounds = ""
  }else{
    pounds = item.details.pounds
  }
  if(item.details.ounces == undefined){
    ounces = ""
  }else{
    ounces = item.details.ounces
  }
  if(item.details.length == undefined){
    length = ""
  }else{
    length = item.details.length
  }
  if(item.details.width == undefined){
    width = ""
  }else{
    width = item.details.width
  }
  if(item.details.height == undefined){
    height = ""
  }else{
    height = item.details.height
  }
  if(item.details.poly == undefined){
    poly = ""
  }else{
    poly = item.details.poly
  }
  if(item.details.price == undefined){
    price = ""
  }else{
    price = item.details.price
  }
  if(item.details.method == undefined){
    method = ""
  }else{
    method = item.details.method
  }
}
function gotsteps(item) {
  if(item.steps.step == undefined){
    step = ""
  }else{
    step = item.steps.step
  }
  if(item.steps.lister == undefined){
    lister = ""
  }else{
    lister = item.steps.lister
  }
}
function gotfirstinstall(item) {
  if(item.firstinstall == undefined){
    item.firstinstall.installed == "no"
  }else{
    installed = item.firstinstall.installed
  }
}

  
function onError(error) {
  console.log(error);
}

function setItem() {
  console.log("OK");
}