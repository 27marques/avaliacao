var num = [12, 24, 28];
var soma = [2, 3, 6];
var multiplicacao = [10, 20, 30];

function fn_soma(multi, valor) {
    return eval(multi) + eval(valor);
}

console.log(fn_soma(5, 3));

const fnsoma = (valor1, valor2) => {
    return valor1 + valor2;
}

let nomes = {
    recepcao: 'juana',
    entrada: 'Patricia',
    restaurante: 'maria',
    copa: 'Mary'
}

let sobrenomes = ['silva', 'pereira'];

const {
    recepcao,
    entrada,
    restaurante,
    copa
} = nomes;

let [empregado1, empregado2] = sobrenomes;
console.log(empregado1);
console.log(empregado1);
console.log(recepcao);
console.log(entrada);
console.log(restaurante);
console.log(copa);

//console.log(nomes);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return b - a });
