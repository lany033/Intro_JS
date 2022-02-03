function polindromo(palabra1){
    
    if (palabra1 == palabra1.split('').reverse().join('')){
        console.log("Es un polindromo")
    }
    else{
        console.log("No es polindromo "+palabra1)
    }
    
}

polindromo("madam")