 /**
* Dadas dos matrices de enteros,
* encuentra qué elementos faltan en la segunda matriz
* de la primera matriz.
​
Ejemplo
​
La matriz es la lista original. Los números que faltan son
  matriz = [7,2,5,3,5,3]
  br = [7,2,5,4,6,3,5,3]
​
  Los números que faltan en arr son [4,6]
​
*/

const matriz = [7,2,5,3,5,3]
const matriz2 = [7,2,5,4,6,3,5,3]
const matriz3 = []

const result = matriz2.filter(item => {
      if(!(matriz.includes(item))){
        matriz3.push(item)
      }
})

console.log("Los numeros que faltan en matriz1 son: " + matriz3)