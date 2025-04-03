const valorjanta = Number(prompt("Informe o valor da janta: "))
const garcom = valorjanta * 0.10
const total = garcom + valorjanta
window.alert(`Taxa Garçom R$:${garcom.toFixed(2)}\nTotal R$: ${total.toFixed(2)}`)