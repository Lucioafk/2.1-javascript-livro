const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inTexto.value
    const idade = Number(frm.inNumero.value)

    const tracos = retornarTracos(nome)
    const classificar = categorizarAluno(idade)

    resp1.innerText = tracos + "\n" + classificar
     
})

const retornarTracos = (nome) => {
    let resultado = ""

    for (const letras of nome) {
        if ( letras === " " ){
             resultado += " "
        } else {
             resultado += "-"
        }     
    }

    return nome + `\n${resultado}` 
}


const categorizarAluno = (idade) => {

    let categoria = ""
    if (idade <= 12) {
        categoria = "Categoria: Infantil"
    } else if (idade <= 18 ) {
        categoria = "Categoria: Juvenil"
    } else {
        categoria = "Categoria: Adulto"
    }

    return categoria 

}