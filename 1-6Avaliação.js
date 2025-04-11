function calcularMontante() {
    let capitalInicial = parseFloat(prompt("Informe o capital inicial investido: R$ "));
    
    let taxaJuros = parseFloat(prompt("Informe a taxa de juros mensal (em %): "));
    
    let tempo = parseInt(prompt("Informe o tempo do investimento em meses: "), 10);
    
    if (isNaN(capitalInicial) || capitalInicial <= 0 || 
        isNaN(taxaJuros) || taxaJuros < 0 || 
        isNaN(tempo) || tempo <= 0) {
        console.log("Por favor, insira valores válidos.");
        return;
    }

    let i = taxaJuros / 100;

    let montante = capitalInicial * Math.pow((1 + i), tempo);
    console.log(`O montante após ${tempo} meses é: R$ ${montante.toFixed(2)}`);
}

calcularMontante();