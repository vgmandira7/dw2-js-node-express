//criando uma classe 

class Carro {
  //para criar os atributos da classe deve-se utilizar o método "constructor"
  constructor(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  buzinar(){
    return "beep!";
  }
}

const carroPopular = new Carro ("Fiat", "Uno", 2012);
document.write(`
    <p> carro ${carroPopular.marca} modelo ${carroPopular
      .modelo} é do ano de ${carroPopular.ano}. Quando buzina faz ${carroPopular.buzinar()}
    </p>
  `);

const carroEsportivo = new Carro ();

carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Onix"
carroEsportivo.ano = "2011"

document.write(`
    <p> carro ${carroEsportivo.marca} modelo ${carroEsportivo
      .modelo} é do ano de ${carroEsportivo.ano}. Quando buzina faz ${carroEsportivo.buzinar()}
    </p>
  `);

  //adicionar atributo
  carroEsportivo.corNeon = "Azul";

  // adicionar metodo
  carroEsportivo.turbo = () => {
    return "Rummmm! O carro está acelerando muito!!";
  };

  document.write(`<p>O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} ${carroEsportivo.modelo} também possui neon de cor ${carroEsportivo.corNeon}. E quando sa turbo ${carroEsportivo.turbo()}</p>`)