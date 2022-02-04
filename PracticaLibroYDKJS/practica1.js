var imp = 0.18
var costoTelefono = 200
var precioAcc = 20
var umbral = 100
var i = 0
var costoTotalTelefono = costoTelefono+(costoTelefono*imp)+precioAcc

function gastoTelefonos (saldo){
    
    console.log("Costo de cada telefono es: " + costoTotalTelefono)
    while(saldo >umbral){
        i++
        saldo -= 200
    }
    console.log(saldo)
    console.log(i)
}

var sueldo = 2000
// var sueldo = prompt("Agregre salario: ")


gastoTelefonos(sueldo)

