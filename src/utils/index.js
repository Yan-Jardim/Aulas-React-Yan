export const Teste = (valordigitado) => {
    if (valordigitado === "Guitarra") {
        console.log('Tem cordas')
    }
    else if (valordigitado === 'Bateria') {
        console.log('Tem Pedala')
    }
    else if (valordigitado === 'Microfone') {
        console.log('Tem fios ')
    }

    else {
        console.log('não existe esse instrumento')
    }
}
export const Click = (valordigitado) => {
    switch (valordigitado) {
        case "Guitarra": console.log('Tem cordas,palheta, amplificador'); break;
        case "Bateria": console.log('Tem pedal a caixa e o bumbo'); break;
        case "Microfone": console.log('Tem fios o anti puff e o suporte'); break;
        default:
            console.log('não existe esse instrumento')
    }
}