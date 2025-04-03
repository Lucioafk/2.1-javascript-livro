const produtoValor = window.Number(prompt("Informe o valor do produto: "))



const produtoAvista = produtoValor - (produtoValor * 0.10)

const produtoParcelado = produtoValor / 3

window.alert(`Preço: R$ ${produtoValor.toFixed(2)}\nÀ vista: R$ ${produtoAvista.toFixed(2)}\nOu 3x de R$: ${produtoParcelado}`)