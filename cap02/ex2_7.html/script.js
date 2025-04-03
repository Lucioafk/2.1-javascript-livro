const frm = document.querySelector("form")
const resp1 = document.querySelector("#promocao")
const resp2 = document.querySelector("#descontoPromocao")

frm.addEventListener("submit", (e) => {
    const nomeProduto = frm.inProduto.value
    const valor = Number(frm.inValor.value)

    desconto = valor * 0.50
    valorParcelado = (valor * 2) + desconto

    resp1.innerText = `${nomeProduto} - Promoção: Leve 3 por R$: ${valorParcelado.toFixed(2)}`
    resp2.innerText = `O 3º produto custa apenas R$: ${desconto.toFixed(2)}`
    e.preventDefault()
})