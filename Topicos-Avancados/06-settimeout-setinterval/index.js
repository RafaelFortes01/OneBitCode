console.log('Programa iniciado!')

// const TimeOutId = setTimeout(() => {
//     console.log('3 segundos se passaram desde que o programa foi iniciado.');
// }, 1000 * 3)

// clearTimeout(TimeOutId)

let seconds = 0

const intervalId = setInterval(() =>{
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`);
    if(seconds > 10) {
        clearInterval(intervalId)
        console.log('Tempo esgotado, encerrando');
    }
}, 1000 * 3)