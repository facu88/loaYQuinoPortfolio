const tituloClase= document.getElementById('title');


let scrolled = false;

window.onscroll=function(){
  scrolled = true;
}

setInterval(function(){
  if (scrolled) {
    scrolled = false;
    // scrollFunction()
  }
  else{
    tituloClase.classList.add("scroll")
  }
}, 1500);
