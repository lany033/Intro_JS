var cuentas = [
    { 
        nombre: 'Mali', 
        saldo: 200,
        pass: 123, 
    },
    { 
        nombre: 'Gera',
        saldo: 290,
        pass: 456, 
    },
    { 
        nombre: 'Maui', 
        saldo: 67,
        pass: 789 }
  ];

var saldos =  cuentas.map((i)=>{return i.saldo})
var inicialMali = saldos[0]
var inicialGera = saldos[1]
var inicialMaui = saldos[2]

var onButtonClick = function() {   
    var user = document.getElementById("user").value 
    var pass = document.getElementById("pass").value 

    if(user == "Mali" && pass == 123) {
        alert("Se ha logeado correctamente") 
        saludo() 
        }     
    else if(user == 'Gera' && pass == 456) {
        alert("Se ha logeado correctamente")  
        saludo()
        }
    else if(user == 'Maui' && pass == 789) {
        alert("Se ha logeado correctamente")  
        saludo()
        }
    else{
        alert("Usuario o contraseña incorrectas")
    }               
}

var saludo = function(){
   var txt = document.getElementById("user").value
   document.getElementById("bienvenido").innerText = txt; 
   return txt
}


var onSaldoclick = function(){
    if (saludo() == "Mali"){
        document.getElementById("saldoActual").innerHTML = inicialMali
        console.log("good")
    }
    else if (saludo() == "Gera"){
        document.getElementById("saldoActual").innerHTML = inicialGera
        console.log("good")
    }
    else if (saludo() == "Maui"){
        document.getElementById("saldoActual").innerHTML = inicialMaui
        console.log("good")
    }

}

var onDepositoclick = function(){
    if (saludo() == "Mali"){
        var depot = document.getElementById("deposito").value
        var nuevo_saldo = Number(depot) + inicialMali 
            if(nuevo_saldo > 990){
                alert("Monto excesivo, ingresar nuevo monto")
            }
            else{
                document.getElementById("saldoActual").innerHTML = Number(nuevo_saldo)
            }
    }

    else if (saludo() == "Gera"){
        var depot = document.getElementById("deposito").value
        var nuevo_saldo = Number(depot) + inicialGera
            if(nuevo_saldo > 990){
                alert("Monto excesivo, ingresar nuevo monto")
            }
            else{
                document.getElementById("saldoActual").innerHTML = Number(nuevo_saldo)
            }
    }

    else if (saludo() == "Maui"){
        var depot = document.getElementById("deposito").value
        var nuevo_saldo = Number(depot) + inicialMaui
            if(nuevo_saldo > 990){
                alert("Monto excesivo, ingresar nuevo monto")
            }
            else{
                document.getElementById("saldoActual").innerHTML = Number(nuevo_saldo)
            }
    }
    return nuevo_saldo
}

var onRetiroclick = function(){

    if (saludo() == "Mali"){
        var ret = document.getElementById("retirar").value
        var monto_rest =  onDepositoclick() - Number(ret)
        
        if(monto_rest < 10){
            alert("Monto excesivo, ingresar nuevo monto")
        }
        else{
            document.getElementById("saldoActual").innerHTML = Number(monto_rest)
        }
    }
    else if (saludo() == "Gera"){
        var ret = document.getElementById("retirar").value
        var monto_rest =  onDepositoclick() - Number(ret)
        
        if(monto_rest < 10){
            alert("Monto excesivo, ingresar nuevo monto")
        }
        else{
            document.getElementById("saldoActual").innerHTML = Number(monto_rest)
        }
    }
    else if (saludo() == "Maui"){
        var ret = document.getElementById("retirar").value
        var monto_rest =  onDepositoclick() - Number(ret)
        
        if(monto_rest < 10){
            alert("Monto excesivo, ingresar nuevo monto")
        }
        else{
            document.getElementById("saldoActual").innerHTML = Number(monto_rest)
        }
    return monto_rest
}
}