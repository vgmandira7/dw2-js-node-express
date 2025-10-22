//IMportando o express (framework)

import express from "express"
//iniciando o express na variavel app
const app = express();

import ClientesController from "./controllers/ClientesController.js"
import PedidosController from "./controllers/PedidosController.js"
import ProdutosController from "./controllers/ProdutosController.js"


//Configurando EJS
//se não tiver isso, não funciona
app.set('view engine', 'ejs')
//Definindo a pasta public para arquivos estaticos
app.use(express.static('public'));

app.use("/", ClientesController);
app.use("/", PedidosController);
app.use("/", ProdutosController);



//Criando a primeira rota do site (rota principal)
//req trata requisicao, res trata a resposta
app.get("/", (req, res) => {
    res.render("index");
});

// app.get("/produtos", (req, res) => {
//     res.render("produtos");
// });

// app.get("/clientes", (req, res) => {
//     const clientes = [
//         {nome: "Ricardo", cpf: "533.562.135.90", endereco: "Rua das laranjas, 34"},
//         {nome: "Isaac", cpf: "512.345.121.90", endereco: "Rua das Maçâs, 66"},
//         {nome: "Ana Flávia", cpf: "523.315.123.45", endereco: "Rua das Maçâs, 66"},
//         {nome: "Renan", cpf: "123.234.456.23", endereco: "Rua das peras, 123"},
        
//     ];

//     res.render("clientes", {
//         clientes : clientes
//     });
// });






//Rota produtos

//Rota clientes
// app.get("/clientes", (req, res) => {
//     res.send("<h1>Bem vindo a pagina de Clientes</h1>");
// });



//lembrar que isso é um parametro obrigatr

//essa parte provavelmente vai cair na prova
//: user é um parametro da rota (obrigatorio)
//req e res são objetos, um para requisição e outro para parametro
app.get("/perfil/:user", (req, res) => {
    const user = req.params.user;
    
    //render é um metodo do objeto res
    res.render("perfil", {
        //enviando variaveis para a pagina
        //O primeiro user corresponde a variavel que vc vai poder manipular na outra pagina, o segundo user é o user da variavel daqui.
        user : user

    });
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

