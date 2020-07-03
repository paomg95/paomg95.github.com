//console.log("Holaaaaaaaaaaaaa");
// DOM
// querySelector / querySelectorAll
/*
let links = document.querySelectorAll("a");
links.forEach(function(link){
  console.log(link);
});
*/
let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
  td.addEventListener('click', function(){
    console.log(this);
  })
});

let elementos = document.querySelectorAll(".close");
elementos.forEach(function(elemento){
    elemento.addEventListener('click', function(ev){
    ev.preventDefault(); //evita el comportamiento del evento

    let content = document.querySelector(".content")
    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");

    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function(){
      location.href="../index.html";
    }, 1000);  // Lo hace una vez
    //setInterval // lo hace constantemente
    return false;
  })
});
/*let iconos = document.querySelectorAll("i");
iconos.forEach(function(icono){
  icono.classList.remove("fa-star-o");
  icono.classList.add("fa-star");
}) */
