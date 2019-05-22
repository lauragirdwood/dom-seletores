// Seletores #01
let esconder = document.getElementById("titular");
esconder.style.display = "none";
// Essa tira o elemento e reajusta sem o espaço que ele preenchia na tela
//document.getElementById("titular").style.display = "none";
// Essa deixa o espaço que o elemento preenchia na tela
//document.getElementById("titular").style.visibility = "hidden"; 

// Seletores #02
let coruja = document.querySelector("#lechuza");
coruja.style.filter = "grayscale(100%)";
//document.querySelector("#lechuza").style.filter = "grayscale(100%)"

// Seletores #03
let campos = document.querySelectorAll("input");
for (let i = 0; i < campos.length; i++) {
    campos[i].style.background = "red";
}
let textArea = document.querySelector("textarea");
textArea.style.background = "red";
// document.querySelectorAll("input").forEach(function(item){
//     item.style.background = "red";
// });

// DOM - Seletores e Atributos #01
let copy = document.getElementById("copyright");
console.log(copy.attributes);

// DOM - Seletores e Atributos #02
let twitter = document.querySelector("a.fa-twitter");
console.log(twitter.getAttribute("href"));

// DOM - Seletores e Atributos #03
let facebook = document.querySelector("a.fa-facebook");
console.log(facebook.getAttribute("href"));

// DOM - Seletores e Atributos #04
let youtube = document.querySelector("a.fa-youtube");
youtube.setAttribute("href", "https://www.youtube.com/channel/UCRQdwmWMhTcqDFjPT4UPZYA");

// DOM - Seletores e Atributos #05
let form = document.querySelector("form");
console.log(form.hasAttribute("action"));

// DOM - Seletores e Atributos #06
form.setAttribute("action", "https://www.youtube.com/channel/UCRQdwmWMhTcqDFjPT4UPZYA")

// DOM - Seletores e Atributos #07
let vermelhou = document.querySelectorAll("h2");
for (let i = 0; i < vermelhou.length; i++){
    vermelhou[i].style.color = "red";
}

// DOM - Seletores e Atributos #08
let amarelou = document.querySelectorAll(".icon");
for (let i = 0; i < amarelou.length; i++){
    amarelou[i].style.color = "yellow";
}

// Elementos #01
let topo = document.querySelector("a#top");
topo.textContent = "Topo";
let trabalho = document.querySelector("a#work");
trabalho.textContent = "Trabalho";
let portfolio = document.querySelector("a#portfolio");
portfolio.textContent = "Portfólio";
let contato = document.querySelector("a#contact");
contato.textContent = "Contato";

// Elementos #02
let social = document.querySelector(".social");
let socialFilho = social.children.item(3);
social.removeChild(socialFilho);