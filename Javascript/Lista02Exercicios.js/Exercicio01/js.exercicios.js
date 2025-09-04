document.write("<h1><b>Array e Objetos: Gerenciamento de Clientes</b></h1> <br> <br>");

document.write("<b>Lista</b> <br> <br>");
const listaClientes = [
  {
    nome: "Vitor",
    endereco: "Jacupiranga, sp",
    cpf: 53356723590,
  },
  {
    nome: "Ana flavia",
    endereco: "Jacupiranga, sp",
    cpf: 27736587687,
  },
  {
    nome: "Miguel",
    endereco: "Registro, sp",
    cpf: 12296414554,
  },
];

listaClientes.forEach((cliente) => {
  document.write(`
                Nome: ${cliente.nome} <br>
                Endereço ${cliente.endereco} <br>
                cpf: ${cliente.cpf} <br> <br>

                
            `);

});

document.write("<b>Cliente no final</b> <br> <br>");




const clientesFinal = {
  nome: "Norvaldo",
  endereco: "Jamaica, rs",
  cpf: "2342423234",
};


listaClientes.push(clientesFinal);

listaClientes.forEach((cliente) => {
  document.write(`
                Nome: ${cliente.nome} <br>
                Endereço ${cliente.endereco} <br>
                cpf: ${cliente.cpf} <br> <br>
            `);

});


document.write("<b>Cliente no inicio</b> <br> <br>");


const clientesInicio = {
  nome: "jubileu",
  endereco: "russia, sp",
  cpf: "213235234",
};

listaClientes.unshift(clientesInicio)

listaClientes.forEach((cliente) => {
  document.write(`
                Nome: ${cliente.nome} <br>
                Endereço ${cliente.endereco} <br>
                cpf: ${cliente.cpf} <br> <br>
            `);

});
