const nota = 81.30;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(a)!!")
} else if (nota < 80 && nota >= 60) {
    console.log("Você esta na lista de espera!")
} else {
    console.log("Você foi reprovada(o)")
}


const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

const currentHour = 15;
var mensagem;
if (currentHour == 22) {
    mensagem = "Não deveríamos comer nada, é hora de dormir"
} else if (currentHour >= 18 && currentHour < 22) {
    mensagem = "Rango da noite, vamos jantar :D"
} else if (currentHour >= 14 && currentHour < 18) {
    mensagem = "Vamos fazer um bolo pro café da tarde?" 
} else {
    mensagem = "Hmmm, cheiro de café recém passado"
}

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

const weekDay = "quarta-feira";
if (weekDay ==="segunda-feira" || "terça-feira" || "quarta-feira" || "quinta-feira" || "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
    console.log("FINALMENTE, descanso merecido UwU")
}


let mes = 'trybe';
let estacaoDoAno = '?';

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
    default:
        estacaoDoAno = "hahah";
}

console.log(estacaoDoAno);
let  pessoaCandidata = "aprovada"
let emoção = "?"

switch (pessoaCandidata) {
    case "aprovada":
        emoção = "Muito Feliz";
        break;
    case "reprovada":
        emoção = "Muito Triste";
        break;
    case "lista":
        emoção = "um pouco satisfeita";
        break
    default:
        emoção = "?"
}
console.log(emoção);