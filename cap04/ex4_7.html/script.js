const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let velocidadePermitida = Number(frm.inLimite.value)
    const condutor = Number(frm.inCondutor.value)

    

    if (condutor >  velocidadePermitida + (velocidadePermitida * 0.20)) {
        resp.innerText = `Situação: Multa Grave`
    } else if (condutor >  velocidadePermitida) {
        resp.innerText = `Situação: Multa leve`
    } else {
        resp.innerText = `Situação: Sem multa`
    }
})