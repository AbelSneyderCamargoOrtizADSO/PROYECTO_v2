const soloNumeros = (event) => {
  if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'Tab'].includes(event.key)) {
      return;
  }

  if (/[0-9]/.test(event.key)) return;

  event.preventDefault();
};

const soloLetras = (event) => {
  if (['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'Tab'].includes(event.key)) {
      return;
  }

  if (/[A-Za-zÁ-ÿ\s]/.test(event.key)) return;

  event.preventDefault();
};

document.querySelectorAll('.solo-numeros').forEach(input => {
  input.addEventListener('keydown', soloNumeros);
});

document.querySelectorAll('.solo-letras').forEach(input => {
  input.addEventListener('keydown', soloLetras);
});
