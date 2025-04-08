/*const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    const restoDivisao = Math.floor(numero % 2)
    
    if (restoDivisao == 0 ) {
        resp.innerText = `${numero} é par`
    } else {
        resp.innerText = `${numero} é ímpar`
    }

}) */



 //ternario 

 const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    const restoDivisao = Math.floor(numero % 2)
    
    restoDivisao = restoDivisao == 0 ? resp.innerText = `${numero} é par` : resp.innerText = `${numero} é impar`

})