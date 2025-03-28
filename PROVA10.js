let nomes = ['Caio', 'Duda', 'Jhon', 'Luna', 'Bento'];

console.log('Terceiro nome:', nomes[2]);

nomes.push('Sun');
nomes.unshift('Jack');
console.log('Array após adicionar nomes:', nomes);

nomes.pop();
console.log('Array após remoção do último nome:', nomes);

let numerosDobrados = [2, 4, 6, 8].map(num => num * 2);
console.log('Números dobrados:', numerosDobrados);

let numerosMaioresQueCinco = [1, 3, 5, 7, 9].filter(num => num > 5);
console.log('Números maiores que 5:', numerosMaioresQueCinco);
