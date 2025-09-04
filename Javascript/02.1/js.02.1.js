//arrays, servem para armazenar uma lista, diferentes elementos em uma unica variavel

const products = ["Computador", "Notebook", "celular", "Tablet"];
document.write(`<p>${products}</p>`);
document.write(typeof products);

document.write("<p>Exibindo um elemento do array atraves do indice: </p>");
document.write(`<p>${products[3]}</p>`);

products.forEach(function(produto) {
  document.write(`<p>${produto}</p>`);
})


document.write("<p>Mostrando os indices e valores com forEach</p>");


products.forEach((produto, i) => {
  document.write(`<p>${i+1} - ${produto}</p>`);
}) 