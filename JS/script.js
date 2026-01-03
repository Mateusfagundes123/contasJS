

function calculoDecimoTerceiro() {

    var mesesTrabalhados = document.getElementById('mesesTrabalhados').value;
    var salarioInteiro = document.getElementById('salarioInteiro').value;
    var dependentes = document.getElementById('dependentes').value;
    var parcela = document.getElementById('parcela').value;

    if (mesesTrabalhados <= 12) {

        var salario = parseFloat((salarioInteiro / 12) * mesesTrabalhados);

        var salarioMinimo = 1518;
        var somaDescontoInss = 0;

        if (salario <= salarioMinimo) {
            var descFaixaUm = salario * 0.075;
            somaDescontoInss = descFaixaUm;
        }
        else if (salario > salarioMinimo && salario <= 2793.88) {
            let restoFaixa = salario - salarioMinimo;
            let descFaixaDois = restoFaixa * 0.09;
            let descoFaixaUm = salarioMinimo * 0.075;
            somaDescontoInss = descFaixaDois + descoFaixaUm;
        }
        else if (salario > 2793.88 && salario <= 4190.84) {
            let restoFaixa = salario - 2793.88;
            let descontoFaixaTres = restoFaixa * 0.12;
            let descFaixaDois = 1275.88 * 0.09;
            let descoFaixaUm = salarioMinimo * 0.075;
            somaDescontoInss = descoFaixaUm + descFaixaDois + descontoFaixaTres;
        }

        else if (salario > 4190.84 && salario < 8157.41) {
            let restoFaixa = salario - 4190.84;
            let descFaixaQuatro = restoFaixa * 0.14;
            let descontoFaixaTres = 1396.94 * 0.12;
            let descFaixaDois = 1275.88 * 0.09;
            let descoFaixaUm = salarioMinimo * 0.075;
            somaDescontoInss = descoFaixaUm + descFaixaDois + descontoFaixaTres + descFaixaQuatro;
            if (somaDescontoInss > 908.86) {
                somaDescontoInss = 908.86;
            }
        }

        var valorDescontoDependete = 189.59;

        var descontoDependentes = dependentes * valorDescontoDependete;
        var baseIr = salario - (somaDescontoInss + descontoDependentes);

        var somaDescontoIR = 0;

        if (baseIr < 2259.21) {
            somaDescontoIR = 0;
        }
        else if (baseIr >= 2259.21 && baseIr <= 2826.65) {
            var desconteDeduzir = 169.44;
            somaDescontoIR = ((baseIr * 0.075) - desconteDeduzir);
        }
        else if (baseIr > 2826.65 && baseIr < 3751.05) {
            var desconteDeduzir = 381.44;
            somaDescontoIR = ((baseIr * 0.15) - desconteDeduzir);
        }
        else if (baseIr > 3751.05 && baseIr < 4664.68) {
            var desconteDeduzir = 662.77;
            somaDescontoIR = ((baseIr * 0.225) - desconteDeduzir);
        }
        else {
            var desconteDeduzir = 896;
            somaDescontoIR = ((baseIr * 0.275) - desconteDeduzir);
        }
       

        var segundaParcela = salario - primeiraParcela - somaDescontoInss - somaDescontoIR;

        var decimoPUnica = salario - somaDescontoIR - somaDescontoInss;
        decimoPUnica = decimoPUnica.toFixed(2);

        var primeiraParcela = salario / 2;
        primeiraParcela = primeiraParcela.toFixed(2);

        segundaParcela = segundaParcela.toFixed(2);

        var descontosSoma = somaDescontoIR + somaDescontoInss;

        descontosSoma = descontosSoma.toFixed(2)
        somaDescontoIR = somaDescontoIR.toFixed(2);
        somaDescontoInss = somaDescontoInss.toFixed(2);


        if (parcela === 'unica') {
            document.querySelector('#resultado').innerHTML = "R$ " + decimoPUnica;
        }
        else if (parcela === "primeira") {
            document.querySelector('#resultado').innerHTML = "R$ " + primeiraParcela;
        }
        else if (parcela === "segunda") {
            document.querySelector('#resultado').innerHTML = "R$ " + segundaParcela;
        }

        document.querySelector('#descontoINSS').innerHTML = somaDescontoInss;
        document.querySelector('#descontoIR').innerHTML = somaDescontoIR;
        document.querySelector('#totalDescontos').innerHTML = descontosSoma;

    } else {
        console.log("informe os meses validos")
    }
}