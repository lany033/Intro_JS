function Obtener(oracion, palabra){
   
    if (oracion.includes(palabra)){
        return true
    }
    else{
        return false
    }
}

Obtener("Hola mundo", "mundo")