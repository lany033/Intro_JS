let num = prompt("Inserte numero: ")
let i = 0
let multiplos = [1]

while(i<=num){
    i++
    if (i%5==0){
        multiplos.push(i)
   
    }
}
console.log("Los numeros multiplos de 5 son:" + multiplos)
