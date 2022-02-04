var numbers = [ 1, 2, 3, 4, 10, 11 ]

function Suma(){
    var resp = 0
    for(var i=0; i<numbers.length; i++){
        resp += numbers[i]
    }
    return "La suma es: " + resp
}

Suma()