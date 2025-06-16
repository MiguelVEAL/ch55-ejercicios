const numeroInicial = parseInt(prompt("Ingresa un numero"));
const cantidad = parseInt(prompt("¿Cuantas veces se multiplica?"));


function arrayMultiplos(numero, longitud) {
  const multiplos = [];
  for (let i = 1; i <= longitud; i++) {
    multiplos.push(numero * i);
  }
  return multiplos;
}
const resultado = arrayMultiplos(numeroInicial, cantidad);
console.log(resultado);