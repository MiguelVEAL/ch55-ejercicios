let numeroUsuario = parseFloat(prompt("Dame un número"));

function numDiv(numero) {
  let mitad = numero / 2;
  return [mitad, mitad];
}

let resultado = numDiv(numeroUsuario);

console.log(resultado);