let salarioInicial = 1000.00;
let salarioAtual = salarioInicial;

let aumento1996 = 0.15 / 100;
salarioAtual += salarioAtual * aumento1996;

let percentualAumento = aumento1996 * 2;

for (let ano = 1997; ano <= 2023; ano++) {
    salarioAtual += salarioAtual * percentualAumento;
    percentualAumento *= 2;
}

console.log(`O salário atual do funcionário é: R$ ${salarioAtual.toFixed(2)}`);