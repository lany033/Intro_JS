var letrPa
var arreglo = []
var tam
var texto
var i = 0

while (!(letrPa=="")){
    letrPa = prompt("Introducir letras o palabras, NO escribir para terminar: ")
    arreglo.push(letrPa)
    tam = arreglo.length
    
}
console.log(tam)


while(i < tam){
    i++
    texto += arreglo[i]
    
}

console.log("Palabras en arreglo: "+ texto)