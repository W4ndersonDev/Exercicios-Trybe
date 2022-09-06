// buscando elementos.
//1
let test1 = document.getElementById("elementoOndeVoceEsta");
test1.parentNode.style.color = "blue";
//2
let test2 = document.getElementById("primeiroFilhoDoFilho");
//3
test2.innerHTML = "trybe é muito foda";
//4
let test3 = document.getElementById("pai").firstElementChild;
//5
let test4 = document.getElementById("elementoOndeVoceEsta").previousElementSibling;
//6
let test5 = document.getElementById("elementoOndeVoceEsta").nextSibling
//7
let test6 = document.getElementById("elementoOndeVoceEsta").nextElementSibling;
//8
let test7 = document.getElementById("pai").childNodes;
let test8 = document.getElementById("pai").childNodes[5];
let test9 = document.getElementById("pai").children;
let test10 = document.getElementById("pai").children[3];

/* 
1 Acesse o elemento elementoOndeVoceEsta.
2 Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
3 Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
4 Acesse o primeiroFilho a partir de pai.
5 Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
6 Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
7 Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
8 Agora acesse o terceiroFilho a partir de pai.
*/
// Criando elementos.
//1
let test00 = document.getElementById("pai");
let test11 = document.createElement("section");
test00.appendChild(test11);
//2
let test21 = document.querySelector("#elementoOndeVoceEsta");
let test22 = document.createElement("p")
test22.innerText = "Estou aqui só pra te ver";
test21.appendChild(test22);
//3
let test33 = document.createElement('h3')
test33.innerText = "melhor curso de desenvolvimeno web do mundo";
test2.appendChild(test33);
//4
test33.parentNode.parentNode.nextElementSibling;
/*1 Crie um irmão para elementoOndeVoceEsta.
2 Crie um filho para elementoOndeVoceEsta.
3 Crie um filho para primeiroFilhoDoFilho.
4 A partir desse filho criado, acesse terceiroFilho.
*/
// Removendo Elementos.
let papai = document.getElementById("paiDoPai")
let elementos = document.getElementsByTagName("section");
for (i = 0; i < elementos.length; i += 1) {
    let removes = elementos[i];

    if (removes.innerText.includes("remove")) {
        papai.removeChild(removes);
    }
}
