/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo números más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */



const arr = [3,4,6,1,5,2,9,10,23,12]
const newarr = arr.sort(function(a,b){return a-b})

console.log(newarr)

function number(){
    
    console.log("El segundo numero mas bajo es:" + newarr[1])
    console.log("El segundo numero mas alto es:" + newarr[newarr.length-2])
    
}

number()