//manipulação de datas

document.write("<h3>Manipulando datas</h3>");
//criar uma instancia de classe date() do javascript

const dataAtual = new Date();
document.write(dataAtual)

//dia
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia ${dia}</p>`);

//mes
const mes = dataAtual.getMonth() + 1;
document.write(`<p>Hoje é Mês ${mes}</p>`);

//ano
const ano = dataAtual.getFullYear();
document.write(`<p>Hoje é ano ${ano}</p>`);

//ano
const diaSemana = dataAtual.getDay() + 1;
document.write(`<p>Hoje é ano ${diaSemana} </p>`);

//adicionando dias, meses e anos à data atual
//adicionando 4 anos ao ano atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4);

document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()} </p>`);

//adicionando meses
dataAtual.setMonth(dataAtual.getMonth() + 3);
//adicionando dias
dataAtual.setDate(dataAtual.getDate() + 10);




//Formatação de moedas
document.write("<h3>Manipulando moedas</h3>");


const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
});

document.writeln(`O valor do salario minimo é: ${salarioReal} <br> <br>`);

//DOLAR

const salarioDolar = salario.toLocaleString("en", {
    style: "currency",
    currency: "USD"
});



document.write(`O valor do salario minimo em dolares é: ${salarioDolar} <br> <br>` );

//salario convertido
const salarioConvertido = salario * 0.176;

document.write(`<p>Salario em valor de dolar: ${salarioConvertido.toLocaleString("en", {
    style: "currency",
    currency: "USD"
})}. </p>`);

//currency: EUR -> Euro


//FORMATAÇÃO DE STRING
document.write("<h3>Manipulando Strings</h3>");
const nome = "Diego Max";

//Alterando para letras maiusculas
document.write(`<p>Nome em mauisculas: ${nome.toUpperCase()}</p>`)

//Alterando para letras minusculas
document.write(`<p>Nome em minusculas: ${nome.toLowerCase()}</p>`)

//removendo espaços de uma string
const novoNome = nome.replace(/\s/g, "");

//Contando caracteres de uma string
document.write(`<p>Numero de caracteres:  ${novoNome.length} letras</p>`);

 