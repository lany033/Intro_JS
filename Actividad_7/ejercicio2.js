var numbers = [ 1, 2, 3, 4, 10, 11 ]
var resp = 0
var i

function Suma(){
    for(i=0; i<numbers.length; i++){
        resp += numbers[i]
    }
    return "La suma es: " + resp
}

Suma()