window.onload = function() {

  function disable (selector){
    document.getElementById(selector).className += "pepe";
}

function anable (selector){
  document.getElementById(selector).removeAttribute("class");
}



document.getElementById("figuras").onclick = function () { 
  disable("options")
  anable("canvas")
  Game.start("canvas",figuras)
};
document.getElementById("notas").onclick = function() { 
  disable("options")
  anable("canvas")
  Game.start("canvas",notas)
}


// SERIA EL CODIGO PARA CARGAR LA PAGINA HTML CON DOM
//function addTitle(textContent){
//  
//  var element = document.querySelector("title")
//      element.innerHTML = textContent;
//      element.style.fontFamily = "arial";
//}

//function addLogo(src){
//  
//  var newImage = document.createElement("img");
//  document.querySelector("body").appendChild(newImage);
//  
//  newImage.setAttribute("src",src);
//  newImage.setAttribute("width","15%");
//  console.log(newImage);
//}
//
//function addMainTitle(textContent){
//  
//  var newTitle = document.createElement("h1");
//  document.querySelector("body").appendChild(newTitle);
//  
//  newTitle.innerHTML = textContent;
//  newTitle.style.color = "red";
//  
//  newTitle.align.textContent = "center";
// console.log(newTitle);
//}
//
//function addButton(){
//  
//  var newButton = document.createElement("button");
//  newButton.type = "button"
//  document.querySelector("body").appendChild(newButton);
//  newButton.setAttribute("name", "StartGame");
//  newButton.setAttribute("id", "start-button");
//    console.log (newButton);
//}
////buttom.onclick = function(){
////  Game.start("canvas");
////}
//    addTitle("DaniMusic");
//    addLogo("img/logo.jpg");
//    addMainTitle ("DaniMusic");
//    addButton();
//
//    document.getElementById("start-button").onclick = function() {
//        
        
//Game.start("canvas",notas);
//    }



}