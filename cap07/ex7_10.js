const prompt = require("prompt-sync")();

const altura = prompt("Informe a altura da arvore: ")

for (let i = 0; i <= altura ; i++) {
    console.log(" ".repeat(30 + (altura - i)) + "*".repeat(i * 2))    

}