const resp = document.querySelector("h2")

let entrouNaTela = false;

window.addEventListener("mousemove", () => {
  if (!entrouNaTela) {
    let frase = localStorage.getItem("frase");

    if (!frase) {
      frase = "Olá";
      localStorage.setItem("frase", frase);
    }

    resp.innerText = frase;
    entrouNaTela = true;
  }
});


