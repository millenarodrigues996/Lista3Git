const calcularFatorial = (n) => {
    if (n === 0)
        return 1
let resultado = 1
for (let i = n; i > 1; i--) { 
    resultado *= i 
}
return resultado
}
console.log(`O fatorial de 8 é: ${calcularFatorial(8)}`)
console.log(`O fatorial de 6 é: ${calcularFatorial(6)}`)
console.log(`O fatorial de 2 é: ${calcularFatorial(2)}`)
console.log(`O fatorial de 0 é: ${calcularFatorial(0)}`)