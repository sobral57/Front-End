let populacaoA = 80000;
let populacaoB = 200000;
const taxaCrescimentoA = 0.03;
const taxaCrescimentoB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
}

console.log(`A população do país A ultrapassará ou igualará a população do país B em ${anos} anos.`);