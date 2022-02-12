/**
  * Revirtiendo un array:
  * 
  * Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que 
  * aparecen sus elementos. Para este ejercicio, escribe dos funciones, revertirArray y 
  * revertirArrayEnSuLugar. El primero, revertirArray, toma un array como argumento y 
  * produce un nuevo array que tiene los mismos elementos pero en el orden inverso. 
  * El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: 
  * modifica el array dado como argumento invirtiendo sus elementos. 
  * Ninguno de los dos puede usar el método reverse estándar.
*/
var coleccion = [1,2,3,4,5,6,7,8,9,10]


function revertirArray(arr){
    const arrayInverse = []
    for(var i=arr.lenght; i<0; i--){
    i= arr[i]
    arrayInverse = arr.push(i)
    }
}
function revertirArrayEnSuLugar(){}

revertirArray()
