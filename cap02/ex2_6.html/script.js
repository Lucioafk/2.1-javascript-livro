const frm = document.querySelector("form")
const resp = document.querySelector("#resposta")

frm.addEventListener ("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const minutos = Number(frm.inMin.value)

    const tempoMinutos = Math.ceil(minutos/ 15)

    const dinheiroMinutos = valor * tempoMinutos  

    resp.innerText = `Valor a pagar R$: ${dinheiroMinutos.toFixed(2)}`
    e.preventDefault()
})