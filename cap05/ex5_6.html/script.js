/*const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let numDivisor = 0

    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            numDivisor++
        }
    }
    if(numDivisor == 2) {
        resp.innerText = `${num} é primo`
    } else { 
        resp.innerText = `${num} não é primo`
    }


}) */ 

    const frm = document.querySelector("form")
    const resp = document.querySelector("h2")
    
    frm.addEventListener("submit", (e) => {
        e.preventDefault()
    
        const num = Number(frm.inNumero.value)
        let temDivisor = 0
    
        for(let i = 2; i <= num / 2; i++){
            if(num % i == 0){
                temDivisor = 1
                break
            }
        }
        if(num > 1 && !temDivisor) {
            resp.innerText = `${num} é primo`
        } else { 
            resp.innerText = `${num} não é primo`
        }
    
    
    })