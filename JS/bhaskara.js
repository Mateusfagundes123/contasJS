 function calculoBhaskara(){
            var a = Number(document.getElementById('a').value);
            var b = Number(document.getElementById('b').value);
            var c = Number(document.getElementById('c').value);

            var delta = Number((b*b) - 4 * a * c);

            if(delta<0){
                window.alert("Não existem raizes reais")
            }else{
                var raizDelta =  Number(Math.sqrt(delta));
                var xSoma = Number((-b + raizDelta)/ (2 * a));
                var xDiminui = Number(-b - raizDelta)/ ((2 * a)); 

                document.querySelector('#deltaResultado').innerHTML = delta;
                document.querySelector('#x1Resultado').innerHTML = xSoma;
                document.querySelector('#x2Resultado').innerHTML = xDiminui;

            }
        }