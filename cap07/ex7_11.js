const prompt = require("prompt-sync")();

const parcela = prompt("Quantas parcelas você quer ver? ")

let calendario = new Date()

for (let i = 1; i <= parcela ; i++) {
calendario.setMonth(calendario.getMonth() + 1);
let dia = calendario.getDate()
let mes = calendario.getMonth() + 1
let ano = calendario.getFullYear()

if (dia < 10) {
    dia = "0" + dia;
}
if (mes < 10) { 
    mes = "0" + mes;
}

    console.log(`${i}* parcela: ${dia}/${mes}/${ano}`)
}