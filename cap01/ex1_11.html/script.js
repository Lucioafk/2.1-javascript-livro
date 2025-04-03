const valorConta = window.Number(prompt("Informe o valor da conta: "))
const numeroClientes = window.Number(prompt("Informe quantas pessoas vai dividir a conta: "))

const totalConta = valorConta / numeroClientes

window.alert (`O valor da conta: R$ ${valorConta.toFixed(2)}\nPessoas que vão dividir a conta: ${numeroClientes}\nValor por pessoa: R$ ${totalConta.toFixed(2)}`)