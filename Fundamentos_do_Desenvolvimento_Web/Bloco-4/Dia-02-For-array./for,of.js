
let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado:
//1
//2
//3
//4
//5

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"
//somar um valor a cada elemento do array e retorná-los

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31
// É importante ressaltar que o for/of não irá alterar o array, e sim trazer os valores de dentro, e no caso, adicionando 1 à soma
// Exercício 1
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let name of names) {
   console.log("meu nome é " + name)
}

function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
let d2 = dice();
while (d1 === d2) {
    d2 = dice();
}