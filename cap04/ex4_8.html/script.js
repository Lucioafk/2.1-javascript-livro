const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)

    

    if (numero < 1 ) {
        window.alert("Valor insuficiente")
    }

    if (numero >= 3) {
        const resto = numero - 3
        resp1.innerText = `${resto}`
    } else if (numero >= 1.75) {
        const resto = numero - 1.75
        resp1.innerText = `${resto}`
    } else {
        const resto = numero - 1
        resp1.innerText = `${resto}`
     }



})