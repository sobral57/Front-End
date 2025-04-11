function calcularAreaEPerimetro() {
    let raio = parseFloat(prompt("Informe o raio do círculo: "));

    if (isNaN(raio) || raio <= 0) {
        console.log("Por favor, insira um número válido para o raio.");
        return;
    }

    const pi = Math.PI;
    let area = pi * Math.pow(raio, 2);
    let perimetro = 2 * pi * raio;
    console.log(`Área do círculo: ${area.toFixed(2)}`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(2)}`);
}

calcularAreaEPerimetro();