
 /*********************  ELOQUENT JS CHAP 4******************************* */
 /**
  * La suma de un rango:
  * 
  * Escribe una función rango que tome dos argumentos, inicio y final, y retorne un array 
  * que contenga todos los números desde inicio hasta (e incluyendo) final. 
  * Luego, escribe una función suma que tome un array de números y retorne 
  * la suma de estos números
  */

function nRango(a,b){
    const rango = []
    for(var i=a; i<=b; i++){
         rango.push(i)
    }
    console.log("El rango de numeros es: " + rango)

    function suma(){
        var resp = 0
        rango.forEach((element) => {
            resp += element 
            return resp
        });
        console.log("La suma de los numeros es: " + resp)
    }
    return suma()
}

nRango(1,10)
 

