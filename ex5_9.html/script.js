const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let chinchilas = Number(frm.numeroChinchilas.value)
    let ano = Number(frm.inAno.value)

    //contador
    let anoCorrente = 0
    let resposta = ""  

    for (i = ano ; i > 0 ; i--) {
        anoCorrente = anoCorrente + 1
        resposta = resposta + `${anoCorrente}° Ano: ${chinchilas} chinchilas` + "\n"  
        chinchilas = chinchilas * 3 
             
    }

    
    resp.innerText = resposta 
     


})