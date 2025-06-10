// Criar a função que calcula o tempo restante, e recebe uma data futura.

const calcularTempoRestante = (dataFutura) => {
    const agora = new Date().getTime()
    const diferencaDeDatas = dataFutura - agora;
    
    const segundosDeUmMinuto = 60 * 1000;
    const segundosDeUmaHora = 60 * segundosDeUmMinuto;
    const segundosDoDia = 24 * segundosDeUmaHora;

    const dias = Math.floor(diferencaDeDatas / segundosDoDia);
    const horas = Math.floor((diferencaDeDatas % segundosDoDia) / segundosDeUmaHora);
    const minutos = Math.floor((diferencaDeDatas % segundosDeUmaHora) / segundosDeUmMinuto);
    const segundos = Math.floor((diferencaDeDatas % segundosDeUmMinuto) / 1000);

    return {
        dias,
        horas,
        minutos,
        segundos
    }
}
const dataFutura = new Date ('2024-11-30T12:00:00').getTime();
console.log(calcularTempoRestante(dataFutura));


// Criar uma função que atualliza o temporizador.