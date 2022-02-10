/**
 * Crea un código para llenar un objecto vacio:
 * 
 * const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/

const objeto = {}

Object.defineProperties(objeto, {
    color:{
        value:'verde'
    },
    tamao:{
        value:'60cm'
    },
    peso:{
        value: '0.5kg'
    },
    cantidad:{
        value: '100'
    }
})

console.log(objeto)