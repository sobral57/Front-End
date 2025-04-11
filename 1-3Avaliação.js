let N = parseInt(prompt("Quantos números você deseja inserir?"));

let menorValor = Infinity;
let maiorValor = -Infinity;
let somaValores = 0;

for (let i = 0; i < N; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));

    if (numero < menorValor) {
        menorValor = numero;
    }

    if (numero > maiorValor) {
        maiorValor = numero;
    }

    somaValores += numero;
}

alert(`Menor valor: ${menorValor}`);
alert(`Maior valor: ${maiorValor}`);
alert(`Soma dos valores: ${somaValores}`);