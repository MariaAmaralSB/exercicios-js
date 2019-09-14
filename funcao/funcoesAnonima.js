const soma = function(x, y){
    return x + y
}

const ImprimeResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

ImprimeResultado(3, 4)
ImprimeResultado(3, 4, soma)
ImprimeResultado(3, 4, function(x, y){
    return x - y
})
ImprimeResultado(3, 4, (x, y)=> x*y)

const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()