/*const frm = document.querySelector("form")
const resp = document.querySelector("h2")


frm.addEventListener ("submit", (e) => { 
    
    const valorRemedio = Number(frm.inValor.value)

    const valor = Math.floor(valorRemedio * 2)


    resp.innerText = `O preço é ${valor.toFixed(2)}`

    e.preventDefault()
}) */

    
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPreco")
const resp2 = document.querySelector("#outRemedio")

frm.addEventListener("submit", (e) => {
  const nomeMedicamento = frm.inMedicamento.value
  const preco = Number(frm.inValor.value)


  const promocao = Math.floor(preco * 2)

  resp2.innerText = `Remedio ${nomeMedicamento}`
  resp1.innerText = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`
  e.preventDefault()             
})

