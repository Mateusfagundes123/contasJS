function calculoFatorial(){

    var num = Number(document.getElementById('num').value);

    var valor = 1;

    var conta = "";

    var numeroOriginal = num;

    while(num > 0){

        valor = valor * num;

        conta += num;

        if(num > 1){
            conta += " x ";
        }

        num--;
    }

    conta += " = " + valor;

    document.querySelector('#Resultado').innerHTML = conta;
}