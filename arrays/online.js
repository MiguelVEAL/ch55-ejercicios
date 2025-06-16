function onlineStatus(usuarios) {
  const cantidad = usuarios.length;

  if (cantidad === 0) {
    return 'Nadie está en línea';
  } else if (cantidad === 1) {
    return `${usuarios[0]} está en línea`;
  } else if (cantidad === 2) {
    return `${usuarios[0]} y ${usuarios[1]} están en línea`;
  } else {
    const restantes = cantidad - 2;
    return `${usuarios[0]}, ${usuarios[1]} y ${restantes} más en línea`;
  }
}

console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer']));