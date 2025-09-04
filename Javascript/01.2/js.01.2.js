const soma = function (n1, n2) {
  return n1 + n2;
};

document.write(`<p>O resultado da soma é ${soma(8, 7)}</p>`);

const tipo = typeof soma;

document.write(`${tipo}`);

//ARROW FUNCTION
const dobro = (x) => {
  return x * 2;
};

document.write(`<p>O dobro do numero é ${dobro(900)}</p>`);

//ARROW FUNCTION COM MAIS DE UM PARAMETRO
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`);
};

//eval no javascript é uma função nativa que realize calculos a partir de dois numeros e um operador.

//quando a arrow function tem só um parametro não precisa de parenteses

document.write(`<p>O resultado da operação é ${calc(1100, "-", 1)}</p>`);

// SIMPLIFICANDO ARROW FUNCTION COM UM UNICO RETORNO
const calculadora = (num1, operador, num2) =>
  eval(`${num1} ${operador} ${num2}`);

document.write(`<p>O resultado da operação é ${calculadora(1100, "+", 1)}</p>`);

//iife - Função imediata

const iife = (function () {
  document.write("<p>Estou sendo executada imediatamente!</p>");
})();

//iife com parametro

const loadUser = (function (user) {
  document.write(
    `<p>Carregando as informações do usuario: <strong> ${user} <strong></p>`
  );
})("Diego");
