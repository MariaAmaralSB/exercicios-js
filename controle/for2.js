const notas = [6.7, 7.4, 9.9, 8.7, 7.9]

for (i in notas){
    console.log(i, notas[i])
}

const pessoa ={
    nome: 'Maria',
    sobrenome: 'José',
    idade: 35,
    peso: 59
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}