const frm = window.document.querySelector("form")
const resp = window.document.querySelector("h2")

frm.addEventListener("submit" , e => {
    const nome = frm.inNome.value
    resp.innerText = `Olá ${nome}`
    e.preventDefault()
    
})