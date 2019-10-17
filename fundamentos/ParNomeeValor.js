//par Nome/valor
const saudacao = 'opa' //contexto léxico 1 -> é o local onde sua variavel foi fisicamente definida

function exec() {
    const saudacao = 'Fala' // contexto léxico 2 
    return saudacao
  }

//Obejetos são grupos aninhados de nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Hermes Lima',
        numero: 95
    }
}  
console.log(saudacao)
console.log(exec())
console.log(cliente)