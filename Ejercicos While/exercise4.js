var letrPa
var arreglo = []
var tam = 0
var texto = ""
let i = 0

while (!(letrPa=="")){
    letrPa = prompt("Introducir letras o palabras, NO escribir para terminar: ")
    arreglo.push(letrPa)
    tam = arreglo.length
    
}


while(i < tam){
    i++
    texto += arreglo[i-1]
    
}

alert("Palabras en arreglo: "+ texto)