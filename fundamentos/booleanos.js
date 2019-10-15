let isAtivo = false

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!'')
console.log(!!{})
console.log(!!Infinity)

console.log('os falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)

let nome = lucas
console.log(nome || 'Desconhecido')