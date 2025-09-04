// exercicio 1////////////////////////////////////

const nome = "Vitor";
function saudacaoPersonalizada(nome) {
  document.write(`Olá, ${nome}! Seja bem-vindo(a) à Calculadora Universal!`);
}

saudacaoPersonalizada(nome);




// Exercicio 2 ////////////////////////////////////

const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};
document.write(`<p>O resultado da operação é igual a: ${calc(10, "+", 5)}</p>`);
document.write(`<p>O resultado da operação é igual a: ${calc(20, "-", 7)}</p>`);
document.write(`<p>O resultado da operação é igual a: ${calc(4, "*", 8)}</p>`);
document.write(`<p>O resultado da operação é igual a: ${calc(100, "/", 10)}</p>`);





//Exercicio 3//////////////////////////////////////////

const calcularDobro = function (n1) {
  return n1 * 2;
};

document.write(`<p>O dobro do número digitado é ${calcularDobro(2)}</p>`);





//Exercicio 4//////////////////////////////////////

let calcularMetade = (x1) => {
  return x1 / 2;
};

document.write(`<p>A metade do número digitado é: ${calcularMetade(10)}</p>`);


//Exercicio 5////////////////////////////////////////////////

const iife = (function () {
  document.write("<p> Calculadora Universal pronta para uso!</p>");
})();
