function CifrarEnCesar() {
    let seguirJugando = true //variable para seguir jugando
    while (seguirJugando) {
        //Crear e inicializar variables
        let textoCifrar = ""
        let numCifrar = ""
        //Comprobar si los datos son correctos y si no seguir dando 
        while (true) {
            textoCifrar = prompt("Pon el texto a cifrar:")
            if (!isNaN(parseInt(textoCifrar))) {
                alert("No tienen que ser numeros")
            } else {
                break
            }
        }

        //Comprobar si los datos son correctos y si no seguir dando 
        while (true) {
            numCifrar = parseInt(prompt("Pon un numero para cifrar:"))
            if (isNaN(numCifrar)) {
                alert("Debe ser un numero")
            } else {
                break
            }
        }

        //Variables para comprobaciones
        let textoCifrado = ""
        let textoNum = ""
        let numSumar = ""
        //Bucle para obtener el cifrado
        for (let i = 0; i < textoCifrar.length; i++) {
            textoNum = textoCifrar.charCodeAt(i) + numCifrar //Pasa letra por letra a unicode y le suma el numero del usuario
            numSumar += textoNum //El numero que de arriba se le añade a esta variable
            textoCifrado += String.fromCharCode(textoNum) //Convierte el unicode a letra con el cifrado hecho
        }

        //Muestra a usuario
        console.log(textoCifrar + " se ha convertido en " + textoCifrado + numSumar)
        //Solicitar si quiere seguir jugando
        seguirJugando = confirm("¿Quieres seguir jugando?")
    }

}
CifrarEnCesar()