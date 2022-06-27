const projetos = document.querySelector(".a__nav2");
const quemSou = document.querySelector(".a__nav");
const contato = document.querySelector(".a__nav3");

projetos.addEventListener("click", function(a){
  a.preventDefault();
  window.scrollTo(0, 1000);
});

quemSou.addEventListener("click", function(b){
  b.preventDefault();
  window.scrollTo(0, 0);
});

contato.addEventListener("click", function(c){
  c.preventDefault();
  window.scrollTo(0, 1850);
});


