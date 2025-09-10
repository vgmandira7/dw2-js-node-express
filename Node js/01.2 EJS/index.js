//IMportando o express (framework)

const express = require("express");
//iniciando o express na variavel app
const app = express();

//Configurando EJS
app.set('view engine', 'ejs')


//Criando a primeira rota do site (rota principal)
//req trata requisicao, res trata a resposta
app.get("/", (req, res) => {
    res.render("index");
});

//Rota produtos
app.get("/produtos", (req, res) => {
    res.send("<h1>Bem vindo a pagina de produtos!</h1>");
});

//Rota clientes
app.get("/clientes", (req, res) => {
    res.send("<h1>Bem vindo a pagina de Clientes</h1>");
});

//npm instala 
//npx executa


//Iniciando o servidor HTTP`

const port = 8080; //O servidor escutará na porta 8080

app.listen(port, (error) => {
    if (error){
        console.log(`Não foi possivel iniciar o servidor. Ocorreu um erro ${error}`);
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
})

