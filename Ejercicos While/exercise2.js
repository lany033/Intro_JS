var num1 = prompt("Insertar primer numero del 1 al 50: ")
var num2 = prompt("Insertar segundo numero del 1 al 50: ")
var i = 0

while(i<50){
    i++
    if(num1==i || num2==i){
        console.log(i+" Loteria")
    }
    else{
        console.log(i)
    }   
}