// 1.questão

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

// 2.questão

function isFibonacci(num) {
    let a = 0;
    let b = 1;

    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    return b === num || num === 0;
}

let num = 21;
if (isFibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}


// 3.questão
let faturamento = [1000, 1500, 2000, 2500, 0, 3000, 4000, 0, 5000]; // Exemplo de dados
let soma = 0;
let diasComFaturamento = 0;
let menor = faturamento[0];
let maior = faturamento[0];

for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i] > 0) {
        soma += faturamento[i];
        diasComFaturamento++;
        if (faturamento[i] < menor) menor = faturamento[i];
        if (faturamento[i] > maior) maior = faturamento[i];
    }
}

let media = soma / diasComFaturamento;
let diasAcimaDaMedia = 0;

for (let i = 0; i < faturamento.length; i++) {
    if (faturamento[i] > media) {
        diasAcimaDaMedia++;
    }
}

console.log(`Menor faturamento: R$${menor}`);
console.log(`Maior faturamento: R$${maior}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);

// 4.questão

let faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

let totalFaturamento = 0;
for (let estado in faturamentoPorEstado) {
    totalFaturamento += faturamentoPorEstado[estado];
}

for (let estado in faturamentoPorEstado) {
    let percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

// 5.questão

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

let string = "Exemplo de string";
console.log(reverseString(string)); 