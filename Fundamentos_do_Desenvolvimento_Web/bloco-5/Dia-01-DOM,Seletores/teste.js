document.getElementById("page-title").innerText = "Interestelar";

// const paragraph = document.getElementById("paragraph");
//      paragraph.style.color = "red";
//      paragraph.innerText = "Esse filme é bão"

// let paragraph2 = document.getElementById("second-paragraph");
//     paragraph2.innerText = "Interestelar é o melhor filme de todos os tempos";
//     paragraph2.style.color = "blue";

document.getElementById("subtitle").innerText = "Sobre interestelar:";

let paragraphs = document.getElementsByClassName("paragrafos");
for (index = 0; index <= paragraphs.length; index += 1) {
//    paragraphs[index].innerText = "eci filmi é bão"
    paragraphs[1].style.color = "purple"
    paragraphs[0].style.color = "red"
    paragraphs[0].innerText = "interestelar é um filme"
    paragraphs[1].innerText = "filmaço sobre viagem no tempo"
}

let tags = document.getElementsByTagName("h1");
for (i = 0; i <= paragraphs.length; i += 1) {
   tags[0].style.color = "green"
   tags[0].innerText = "Meu filme favorito"
}