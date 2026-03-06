window.onload = function () {
    icon();
}

function icon() {
    var operacao = document.getElementById('operacao').value;
    if (operacao === 'soma') {
        document.querySelector('#tipoOperacao').innerHTML = "+";
    }
    else if (operacao === 'subtracao') {
        document.querySelector('#tipoOperacao').innerHTML = "-";
    }
    else if (operacao === 'divisao') {
        document.querySelector('#tipoOperacao').innerHTML = "/";
    }
    else if (operacao === 'multiplicação') {
        document.querySelector('#tipoOperacao').innerHTML = "x";
    }



}

function mdc(p2, p4) {
    while (p4 !== 0) {
        let temp = p4;
        p4 = p2 % p4;
        p2 = temp;
    }
    return Math.abs(p2);
}

function mmc(p2, p4) {
    if (p2 === 0 || p4 === 0) return 0;
    return Math.abs(p2 * p4) / mdc(p2, p4);
}



function calcular() {
    var p1 = Number(document.getElementById('p1').value);
    var p2 = Number(document.getElementById('p2').value);
    var p3 = Number(document.getElementById('p3').value);
    var p4 = Number(document.getElementById('p4').value);

    var operacao = document.getElementById('operacao').value;


    if (operacao === 'soma') {
        if (p2 != p4) {
            var mmcNumeros = (mmc(p2, p4));
            var px1 = (mmcNumeros / p2) * p1;
            var px2 = (mmcNumeros / p4) * p3;
            var numerador = px1 + px2;
            var denominador = mmcNumeros;
        }
        else {
            var numerador = p1 + p3;
            var denominador = p2;
        }
        document.querySelector('#numerador').innerHTML = "R: " + numerador;
        document.querySelector('#denominador').innerHTML = "R: " + denominador;

    }
    else if (operacao === 'subtracao') {
        if (p2 != p4) {
            var mmcNumeros = (mmc(p2, p4));
            var px1 = (mmcNumeros / p2) * p1;
            var px2 = (mmcNumeros / p4) * p3;
            var numerador = px1 - px2;
            var denominador = mmcNumeros;
        } else {
            var numerador = p1 - p3;
            var denominador = p2;
        }
        document.querySelector('#numerador').innerHTML = numerador;
        document.querySelector('#denominador').innerHTML = denominador;
    }
    else if (operacao === 'divisao') {
        var numerador = p1 * p4;
        var denominador = p2 * p3;
        document.querySelector('#numerador').innerHTML = numerador;
        document.querySelector('#denominador').innerHTML = denominador;
    }
    else if (operacao === 'multiplicação') {
        var numerador = p1 * p3;
        var denominador = p2 * p4;
        document.querySelector('#numerador').innerHTML = numerador;
        document.querySelector('#denominador').innerHTML = denominador;
    }
}