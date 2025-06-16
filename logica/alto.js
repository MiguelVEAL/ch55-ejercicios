function numeroAltoencontrar() {
  const numeros = [];

  for (let i = 1; i <= 10; i++) {
    const entrada = prompt(`Ingresa el número #${i}:`);
    const numero = parseInt(entrada);
    numeros.push(numero);
  }

  const numeroAlto = Math.max(...numeros);

  console.log(`El número más alto de los 10 que ingresaste es: ${numeroAlto}`);
}

numeroAltoencontrar();