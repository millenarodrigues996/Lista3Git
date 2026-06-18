const notas = [6.5, 7, 6, 8.4, 9]
    let somaDasNotas = 0
    for(let nota of notas) {
        somaDasNotas += nota
    }
    const media = somaDasNotas / notas.length
    console.log (`A média do aluno é: ${media.toFixed(2)}`)
