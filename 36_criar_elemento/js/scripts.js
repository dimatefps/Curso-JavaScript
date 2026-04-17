// inserir elemento no body
var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteúdo do paragráfo.");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector("body");

console.log(body);

body.appendChild(novoParagrafo);

// inserir em um container

var container = document.getElementById("container");

var el = document.createElement("span");

texto = document.createTextNode("texto do span");

el.appendChild(texto);
console.log(el);

container.appendChild(el);