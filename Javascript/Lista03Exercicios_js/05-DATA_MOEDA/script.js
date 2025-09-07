document.write("<h3>data e hora atuais</h3>");

const dataAtual = new Date();
document.write(dataAtual + "<br> <br>")

const compraInternacional = 500.75;

const conversaoEN = compraInternacional.toLocaleString("en", {
  style: "currency",
  currency: "USD"
});

document.write(`Valor formatado em ingles: ${conversaoEN} <br> <br>`)



const conversaoBRL = compraInternacional.toLocaleString("BRL", {
  style: "currency",
  currency: "BRL"
});

document.write(`Valor convertido para o real brasileiro: ${conversaoBRL}`);


dataAtual.setDate(dataAtual.getDate() + 12);

const dia = String(dataAtual.getDate()).padStart(2, "0");
const mes = String(dataAtual.getMonth()).padStart(2, "0");
const ano = dataAtual.getFullYear();

const dataFormatada = `${dia}/${mes}/${ano}`;

document.write(`<p>Data de entrega: ${dataFormatada}</p>`)



