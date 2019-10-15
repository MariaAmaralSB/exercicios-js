function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const ManterSaudavel = !comprarSorvete // operador unario

    return {comprarSorvete: comprarSorvete, comprarTV50, comprarTv32, ManterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))