// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":
let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for (index = 0 ; index < fruits.length; index +=1) {
    soma += fruits[index]
}
if (soma > 15) {
    console.log(soma)
} else {
    console.log("menor que 16")
}


let teste = [1, 2]
let teste2 = 0;

for (index = 0; index < teste.length; index += 1){
    teste2 += teste[index];
}
console.log(teste2)

// para somar todos os valores de um array declare uma variavel e aplique o += na var[index]
