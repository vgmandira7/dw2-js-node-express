//  const parar = document.getElementById('parar');

//  parar.style.backgroundColor = "red";

//  const atencao = document.getElementById('atencao');

//  atencao.style.backgroundColor = "yellow";

//  const avancar = document.getElementById('avancar');

//  avancar.style.backgroundColor = "green";

function parar() {
  document.getElementById("parar").style.backgroundColor = "red";

  document.getElementById("atencao").style.backgroundColor = "gray";

  document.getElementById("avancar").style.backgroundColor = "gray";
}

function atencao() {
  document.getElementById("atencao").style.backgroundColor = "yellow";

  document.getElementById("parar").style.backgroundColor = "gray";

  document.getElementById("avancar").style.backgroundColor = "gray";
}

function avancar() {
  document.querySelector("#avancar").style.backgroundColor = "green";

  document.querySelector("#parar").style.backgroundColor = "gray";

  document.querySelector("#atencao").style.backgroundColor = "gray"; 
}
