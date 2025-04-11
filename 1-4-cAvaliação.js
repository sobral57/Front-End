function coletarSalarioInicial() {
    let salarioInicial = parseFloat(prompt("Informe o salário inicial do funcionário: R$ "));
    return salarioInicial;
}

let salarioInicial = coletarSalarioInicial();
let salarioAtual = salarioInicial;

let aumento1996 = 0.15 / 100;
salarioAtual += salarioAtual * aumento1996;

let percentualAumento = aumento1996 * 2; // Dobro do aumento anterior

for (let ano = 1997; ano <= 2023; ano++) { // De 1997 até 2023
    salarioAtual += salarioAtual * percentualAumento;
    percentualAumento *= 2; // Dobrar o percentual para o próximo ano
}

console.log(`O salário atual do funcionário é: R$ ${salarioAtual.toFixed(2)}`);