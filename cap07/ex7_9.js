const prompt = require("prompt-sync")();

const formula = prompt("Digite a fórmula: ");

const textoFormula = formula.toString();

const chavesAbertas = "(";
const parteChaveAbertas = textoFormula.split(chavesAbertas);
const vezesChavesAbertas = parteChaveAbertas.length - 1;

const chavesFechadas = ")";
const parteChaveFechadas = textoFormula.split(chavesFechadas);
const vezesChavesFechadas = parteChaveFechadas.length - 1;

if (vezesChavesAbertas === vezesChavesFechadas) {
  console.log("Tudo certo");
} else {
  console.log("Tudo errado");
}