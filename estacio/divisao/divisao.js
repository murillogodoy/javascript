resultado = document.getElementById("caguei")

let numeros = []

numeros[0] = solicitarPrimeiroNumero()

numeros[1] = solicitarSegundoNumero()

function solicitarPrimeiroNumero() {
    var n1 = prompt('Insira um valor: ')

    if (n1 < 0) {
        alert('O número precisa ser inteiro e positivo.');

        return solicitarPrimeiroNumero();
    } else {
        return n1;
    }
}

function solicitarSegundoNumero() {
    var n2 = prompt('Insira outro valor: ');

    if (n2 < 0) {
        alert('Insira um número inteiro e positivo.');
        return solicitarSegundoNumero;
    } else {
        return n2;
    }
}

function Dividir() {
    var resultadoDivisao = 0;
    resultadoDivisao = numeros[0] / numeros[1];
    return resultadoDivisao;
}

resultado.innerHTML += (Dividir());