function TratarErroELancar(erro){
    //throw new Error ('...')
    //throw 10
    throw{
        nome: erro.name,
        msg: erro.message,
        date : new Date
        
    }
}


function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!' )
    } catch(e){
        TratarErroELancar(e)
    }
  
}
const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)