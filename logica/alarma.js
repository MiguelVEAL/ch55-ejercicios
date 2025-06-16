function configurarAlarma() {
  const segundos = parseInt(prompt("¿En cuántos segundos debe sonar la alarma?"));
  const milisegundos = segundos * 1000;

  console.log(`Alarma programada para sonar en ${segundos} segundos.`);

  setTimeout(() => {
    console.log("La alarma ya termino");
  }, milisegundos);
}

configurarAlarma();