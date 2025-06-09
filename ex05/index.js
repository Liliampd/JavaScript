function calcularTempoRestante(dataFutura) {
  const agora = new Date();
  const diferenca = dataFutura - agora;

  if (diferenca <= 0) {
    return {
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0
    };
  }

  const segundosTotais = Math.floor(diferenca / 1000);
  const dias = Math.floor(segundosTotais / (3600 * 24));
  const horas = Math.floor((segundosTotais % (3600 * 24)) / 3600);
  const minutos = Math.floor((segundosTotais % 3600) / 60);
  const segundos = segundosTotais % 60;

  return {
    dias,
    horas,
    minutos,
    segundos
  };
}

function atualizarTemporizador() {
  const dataFutura = new Date('2025-12-31T23:59:59');
  const tempoRestante = calcularTempoRestante(dataFutura);

  console.log(
    `${tempoRestante.dias} dias, ` +
    `${tempoRestante.horas} horas, ` +
    `${tempoRestante.minutos} minutos, ` +
    `${tempoRestante.segundos} segundos`
  );
}

setInterval(atualizarTemporizador, 1000);
atualizarTemporizador();
