const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nomeFruta = frm.inFruta.value
    const numero = Number(frm.inNumero.value)

    
    let fruta = ""

    for (let i = numero; i > 0 ; i = i - 1 ) {
        if (i == 1) {
            fruta = fruta +  nomeFruta  
        } else {
            fruta = fruta +  nomeFruta + " * "
        }
             
    }

    resp.innerText = fruta
})