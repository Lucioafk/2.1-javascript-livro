const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const carros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const modelo = frm.inModelo.value
    const preco = Number(frm.inPreco.value)

    carros.push({modelo, preco})
    frm.inModelo.value = ""
    frm.inPreco.value = ""

    inModelo.focus()

    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btListar.addEventListener("click", () => {
    if(carros.length == 0) {
        alert("Não há carros na lista")
        return
    }

    const lista = carros.reduce((acumulador, carro) => acumulador + carro.modelo + "- R$: " + carro.preco.toFixed(2) + "\n","")
    resp.innerText = `Lista dos Carros Cadastrados \n ${"-".repeat(40)} \n ${lista}`


})

 frm.btListar.addEventListener("click", () => {  // "escuta" clique em btListar 
  if (carros.length == 0) {                     // se tamanho do vetor é igual a 0
    alert("Não há carros na lista")
    return
  }
  // método reduce() concatena uma string, obtendo modelo e preço de cada veículo
  const lista = carros.reduce((acumulador, carro) =>
    acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
  resp.innerText = `Lista dos Carros Cadastrados\n${"-".repeat(40)}\n${lista}`
 })


frm.btSimular.addEventListener("click", () => {
  const desconto = Number(prompt("Qual o percentual de desconto: "))
  if (desconto == 0 || isNaN(desconto)) {  
    return                            
  }
  const carrosDesc = carros.map(aux => ({
    modelo: aux.modelo,
    preco: aux.preco - (aux.preco * desconto / 100)
  }))
  let lista = ""
  for (const carro of carrosDesc) {   
    lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
  }
  resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
 })