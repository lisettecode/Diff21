function evaluar() 
{
    var numero = document.getElementById("numero").value;
    var salida = document.getElementById("salida");
    var diff = 0;
    
    if (numero >= 21)
    {
         diff = 2 * (numero-21);
        salida.innerHTML = diff;
        return diff21;
    }
    else{
         diff = 21-numero;
         salida.innerHTML = diff;
                
    }


}