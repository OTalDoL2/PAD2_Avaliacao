

//Questão 01
    console.log("Questão 01")

    var result = someFun({ someProperty: 'interview'}, function(value){
        console.log('This pointing to ' + value);
    });

    console.log('Result is', result);

    function someFun(someP, f1){
        f1(someP.someProperty);
        return 1;
    }

    console.log(" ")
//Questão 02
    console.log("Questão 02")

    var someFN = function(numero){
        var valorPrinc = numero;

        return function (adicional){
            valorPrinc += adicional;
            return valorPrinc;
        }
    }

    var counter  = someFN(1);

    console.log("First call", counter(3));
    console.log("second call", counter(1));
    console.log("Third call", counter(5));

    console.log(" ")
//Questão 03
        console.log("Questão 03 - Incompleta, não consegui fazer")
        
        console.log(" ")
//Questão 04
     console.log("Questão 04")
    var a  = 5
    var b = 10

    if(a == 5){
        let a = 4
        var b = 1
        console.log(a)
        console.log(b)
    }
    console.log(a)
    console.log(b)

    console.log(" ")
//Questão 05
    console.log("Questão 02")

    function valNum(valNumero){
        for(var i = 1; i <= 10; ++i){
            console.log(i * valNumero)    
        }
    }
    valNum(2) 
