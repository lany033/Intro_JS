var num1 = prompt("Ingrese numero 1: ")
var num2 = prompt("Ingrese numero 2: ")
var num3 = prompt("Ingrese numero 3: ")

if (num1 === num2 && num1 === num3){
    alert("Todos los numeros son iguales")
} else if(num1 > num2){ 
    if(num1 > num1){
      alert("El número 1", num1, "es el mayor")
    } else if(num3 > num1){
      alert("El número 3", num3, "es el mayor")
    } else{
      alert("El número 1 y el número 3 son iguales", num1, num3)
    }
  } else if(num2 > num1){
    if(num2 > num3){
      alert("El número 2", num2, "es el mayor")
    } else if(num3 > num2){
      alert("El número 3",num3,"es el mayor")
    }else {
      alert("El número 2 y el 3 son iguales", num2, num3)
    }
  } else { 
    alert("El número 2 y el 1 son iguales", num1, num2)
  }