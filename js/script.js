function convertir() {
    var valore = parseInt(document.getElementById("valor"));
    var resultado = 0;
    var dolar = 298;
    var euro = 312;
    if (document.getElementById("uno")){
        resultado = valore / dolar;
        alert("el cambio de pesos a dolares es: $" + resultado)
    }
    else if(document.getElementById("dos")){
        resultado = valore / euro
        alert("el cambio de pesos a euros es: $" + resultado)
    }

}
