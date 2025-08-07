//Variaveis

//var (pode mudar a qualquer momento)
//let (Pode reatribuido, mas não redeclarado)
//const (não muda)

// TIPOS DE FUNÇÕES

//FUNÇÃO SIMPLES
const message = "<h2>Olá, seja bem vindo. Essa é sua primeira função!</h2>";
function showMessage() {
  document.write(message);
}

// invocando a função
showMessage();

// Função com parametro
const user = "Vitor Gabriel";

function userMessage(user) { //esse user é parametro, não precisa ter o mesmo nome da variavel
  document.write(`<h3> o que deseja fazer hoje, ${user} ? </h3>`);
  //${} = template strings ou literal strings
  //É usado para inserir variaveis dentro de string, no caso aspas
}

userMessage(user); // Esse user é um argumento, uma coisa que estou enviando para funçaõ, por isso precisa 
//ter o mesmo nome da variavel    
