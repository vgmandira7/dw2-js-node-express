//Variaveis

//var (pode mudar a qualquer momento)
//let (Pode reatribuido, mas não redeclarado)
//const (não muda)

// TIPOS DE FUNÇÕES

//FUNÇÃO SIMPLES
const message = "<h2>Olá, seja bem vindo. Essa é sua primeira funçãoo!</h2>";
function showMessage() {
  document.write(message);
}

// invocando a função
showMessage();

// Função com parametro
const user = "Vitor Gabriel";

function userMessage(user) {
  //esse user é parametro, não precisa ter o mesmo nome da variavel
  document.write(`<h3> o que deseja fazer hoje, ${user} ? </h3>`);
  //${} = template strings ou literal strings
  //É usado para inserir variaveis dentro de string, no caso aspas
}

userMessage(user); // Esse user é um argumento, uma coisa que estou enviando para funçaõ, por isso precisa
//ter o mesmo nome da variavel

const n1 = 10;
const n2 = 12;

//função com mais de um parametro
function mult(n1, n2) {
  //essa função recebe dois parametros
  let result = n1 * n2;
  document.write(`A multiplicação de ${n1} e ${n2} é igual a ${result}`);
}

mult(n1, n2);

const num1 = 1000;
const num2 = 5;

function div(num1, num2) {
  return num1 / num2;
}

document.write(
  `<p> A divisão de ${num1} por ${num2} é igual a: ${div(num1, num2)} </p>`
);

//Função com diferentes retornos

const number = 4;

function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}

document.write(`O numero ${number} é <strong> ${parImpar(number)} </strong>`);
