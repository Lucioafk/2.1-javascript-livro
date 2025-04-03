const dia = window.Number(prompt("Informe quantos dias vão ser a viagem: "))
const horas = window.Number(prompt("Informe também as horas: "))

totaldias = (dia * 24) + horas 

window.alert(`Vai ser ${totaldias} horas de viagem`)
