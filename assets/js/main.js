const projetos = document.querySelector(".a__nav2");
const projeto = document.querySelector("#projetos")
const quemSou = document.querySelector(".a__nav");
const quemSous = document.querySelector("#quemsou")
const contato = document.querySelector(".a__nav3");
const contatos = document.querySelector("#contato");

  projetos.addEventListener("click", function(a){
    a.preventDefault();
    projeto.scrollIntoView(true);
  });
  
  quemSou.addEventListener("click", function(b){
    b.preventDefault();
    quemSous.scrollIntoView(true);
  });
  
  contato.addEventListener("click", function(c){
    c.preventDefault();
    contatos.scrollIntoView(true);
  });
