const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const A = Number(frm.ladoA.value)
    const B = Number(frm.ladoB.value)
    const C = Number(frm.ladoC.value)

    if (A === B && A === C && B === C) {
        resp1.innerText = "Equilatero";
      } else if (A !== B && B === C) {
        resp1.innerText = "Isosceles";
      } else if (A !== B && A === C) {
        resp1.innerText = "Isosceles";
      } else if (A !== C && A === B) {
        resp1.innerText = "Isosceles";
      } else {
        resp1.innerText = "Escaleno";
      }


    
})