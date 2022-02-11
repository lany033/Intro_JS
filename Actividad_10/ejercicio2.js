  /*
 const coleccion = [
     {a: 11, b:224, name: "M48 Bulldog"},
     {a:23, b:56, name: "Object 140"},
     {a: 32, b:75, name: "T57 Heavy"}
 ];
 ​
 Hacer una función para que reciba ese arreglo de objetos
 y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
 al String "name" para que devuelva algo así: 
 ​
             ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
 */
const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
    ]


const items1 = [] 
const items2 = []
const items3 = []

items1.push(coleccion[0])
items2.push(coleccion[1])
items3.push(coleccion[2])

// console.log(items1)
// console.log(items2)
// console.log(items3)

function sum1(objeto){
    objeto.forEach((element) => { 
        var suma = objeto[element] + objeto[element+1]
        return suma
        
    });
    break
}

sum1 (items1)