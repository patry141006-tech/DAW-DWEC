function adivinarNumero() {
    let cont = 0;
    let seguirJugando=true
    let numAdivinar = parseInt(Math.random() * 11)
    while (seguirJugando) {
        let numUsuario = parseInt(prompt("Del 1 al 10 ¿Que numero entero crees que estoy pensando?"))
        if (isNaN(numUsuario)) {
            alert("El dato no es valido o has cancelado")
            seguirJugando = confirm("¿Quieres seguir jugando?")
        } else {
            if (numUsuario < 1 || numUsuario > 10) {
                alert("El dato introducido no es valido: se pide un numero del 1 al 10")
            } else {
                cont++
                if (numUsuario < numAdivinar) {
                    alert("Estás cerca, mi número es mayor, llevas " + cont + " intentos")
                } else if (numUsuario > numAdivinar) {
                    alert("Estás cerca, mi número es menor, llevas " + cont + " intentos")
                }else{
                    alert("Enhorabuena!! Has acertado, el numero era " + numAdivinar + "\n Lo has adivinado en " + cont + " intentos")
                    seguirJugando=confirm("Quieres volver a jugar?")
                    cont=0
                    numAdivinar = parseInt(Math.random() * 11)
                }
            }


        }
    }




}
adivinarNumero()