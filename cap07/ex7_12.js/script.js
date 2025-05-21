const frm = document.querySelector("form")
const resp = document.querySelector("h2")



frm.addEventListener("submit", (e) => {
e.preventDefault()
let texto = frm.inTexto.value
let par = ""
let impar = ""

for (let i = 0; i < texto.length; i++) {
  if(i % 2 === 0){
    par += texto.charAt(i)
  } else {
    impar += texto.charAt(i)
  }
}

resp.innerText = `${impar + par}`


})

frm.outDescriptografar.addEventListener("click", () => {
    let texto = frm.inTexto.value
    resp.innerText = `${texto}`

})




