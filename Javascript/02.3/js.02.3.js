//Objetos literias possuem atributos e metodos

//objeto literal nao deriva de classes

const pessoa = {};

document.write(typeof pessoa);

const carro = {
  modelo: "gol",
  cor: "vermelho",
  acelerar() {
    return "Acelerando";
  },
  frear() {
    return "Freando";
  },
};

// exibindo as propriedades do onbjeto
    document.write(`${carro.modelo}`);

    document.write(`${carro.cor}`)



    const produto = {
        nome: "Computador",
        marca: "Topzera",
        preco: 10000,
        descricao: "Pczinho maneiro, da para jogar um joguinho."
    }

    document.write(`${produto.nome}, ${produto.marca}, ${produto.preco}, ${produto.descricao}`);

    // Array de objetos (lista de produtos)

    const listaProdutos = [
    {
        nome: "Computador",
        marca: "Topzera",
        preco: 10000,
        descricao: "Pczinho maneiro, da para jogar um joguinho.",
    }, 
    {
        nome: "Tablet",
        marca: "Legal",
        preco: 60000,
        descricao: "Legalzinho"
    },
    {
        nome: "Celular",
        marca: "Maçãzinha",
        preco: 2000000,
        descricao: "Bateria é horrivel, mas o celular é bom."
    }

    ];


    listaProdutos.forEach(produto => {
        document.write(`
                produto: ${produto.nome} <br>
                produto: ${produto.marca} <br>
                produto: ${produto.preco} <br>
                produto: ${produto.descricao} <br> <br>
            `)
    })
