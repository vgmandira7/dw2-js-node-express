let vetor = ["Laranja", "maçã", "banana"];
document.write(`<p>${vetor}</p>`)

//cuidado, só adiciona se ainda nao estiver na lista, se ja tiver ele substitui
vetor[3] = 'morango'
document.write(`<p>${vetor}</p>`)


// PUSH - adiciona elementos no final do vetor

vetor.push('abacaxi')
document.write(`<p>${vetor}</p>`)

// unshift - coloca elementos no inicio do vetor


vetor.unshift('laranja')
document.write(`<p>${vetor}</p>`)

// length - Conta o total do vetor
//bom para usar em decisões

let num = [1 , 2, 235, 123, 5342523, 1123, 2342]

document.write(`<p>${num}</p>`)

document.write(`<p>${vetor.length}</p>`)


// Sort - ordena o vetor

let numbersOrdenado = num.sort()
//até da certo, mas ele ordena o primeiro numero, de uma forma errada, daria certo se fosse com strings

document.write(`<p>${numbersOrdenado}</p>`)


//ORdenando vetor numerico em ordem crescente
document.write(num.sort((a, b) => a - b))
//para fazer decrecente é só fazer b - a 





