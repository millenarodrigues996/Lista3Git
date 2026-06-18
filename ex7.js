const verificarParidade = (numero) => { 
    if(numero % 2 === 0){
        return "Par"
    } else {
        return "Impar"
    }
}
console.log(`O número 5 é ${verificarParidade(5)}`)
console.log(`O número 10 é ${verificarParidade(10)}`)