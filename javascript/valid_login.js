let dni = document.querySelector(".dni")
let nombres = document.querySelector(".nombres")
let apellidos = document.querySelector(".apellidos")
let grado = document.querySelector(".grado")



const soloNumeros = () => {
  if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home' || event.key === 'End') {
    return;
  }

  if (/[0-9]/.test(event.key)) {
    return
  }

  event.preventDefault()
}

const soloLetras = (event) => {
  if (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'Home' || event.key === 'End') {
    return;
  }

  if (/[A-Za-z\s]/.test(event.key)) {
    return;
  }

  event.preventDefault();
}

dni.addEventListener("keydown", soloNumeros)
nombres.addEventListener("keydown", soloLetras)
apellidos.addEventListener("keydown", soloLetras)
grado.addEventListener("keydown", soloNumeros)

