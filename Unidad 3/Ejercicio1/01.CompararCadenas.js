function comparaCadenas() {
    //Variable para seguir jugando 
    let seguirJugando = true
    //Bucle para mostrar repetidamente
    while (seguirJugando) {
        //Pedir variables y quitarle espacios
        let cadenaTexto1 = prompt("Pon la primera cadena a comparar").trim()
        let cadenaTexto2 = prompt("Pon la segunda cadena a comparar").trim()
        //Verificar si son iguales
        const sonIguales = (cadenaTexto1, cadenaTexto2) => {
            return cadenaTexto1.localeCompare(cadenaTexto2) === 0
        }
        //Mostrar si son iguales o no
        sonIguales(cadenaTexto1, cadenaTexto2) ? alert("Los textos " + cadenaTexto1 + " y " + cadenaTexto2 + " son iguales") : alert("Los textos " + cadenaTexto1 + " y " + cadenaTexto2 + " NO son iguales")
        //Solicitar si quieren seguir jugando
        seguirJugando = confirm("¿Quieres comparar otras cadenas?")
    }
}
comparaCadenas()