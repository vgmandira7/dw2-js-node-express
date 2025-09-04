class heroi {

  constructor(nome, vida, velocidade, forca){
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  correr(){
    return "Correndo...";
  };
  andar(){
    return "Andando...";
  };
  atacar(){
    return "Atacando...";
  }
}

// ------------------------


// parte do miranha
document.write("<b>Atributos Homem Aranha</b> <br> <br>");  

const homemAranha = new heroi ("homem-aranha", "170", "70km/h", "500");

homemAranha.teia = 1;

homemAranha.sentidoAranha = () => {
  return "Inimigo detectado!";
}

document.write(`Atributos homem aranha: <br>
  Nome: ${homemAranha.nome}<br>
  Vida: ${homemAranha.vida} <br>
  Velocidade: ${homemAranha.velocidade} <br>
  forca: ${homemAranha.forca} <br>
  Teia: ${homemAranha.teia} <br>

  Sentido aranha:
  ${homemAranha.sentidoAranha()} <br> <br> <br>
  
  `);


// Superman
const superman = new heroi ("Superman", "1000", "1400km/h", "10000");

superman.podeVoar = 1;

superman.visaoCalor = () => {
  return "Usando visão de calor";
};

document.write("<b>Atributos Superman</b> <br> <br>");  

document.write(`
  Nome: ${superman.nome}<br>
  Vida: ${superman.vida} <br>
  Velocidade: ${superman.velocidade} <br>
  forca: ${superman.forca} <br>
  Teia: ${superman.podeVoar} <br>

  Visão de calor:
  ${superman.visaoCalor()}  <br> <br>
  
  `);


// batman
const batman = new heroi ("Batman", "100", "40km/h", "200");

batman.esconder = 1;

batman.investigar = () => {
  return "Está investigando...";
}

document.write("<b>Atributos Batman</b> <br> <br>");  

document.write(`
  Nome: ${batman.nome}<br>
  Vida: ${batman.vida} <br>
  Velocidade: ${batman.velocidade} <br>
  forca: ${batman.forca} <br>
  Teia: ${batman.esconder} <br>

  Investigar:
  ${batman.investigar()}  <br>
  
  `);


