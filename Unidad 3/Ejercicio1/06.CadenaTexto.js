function cadena() {
    //Cadena para coger los caracteres
    let cadenaInicial = "QWERTYUIOPASDFGHJKLÑZXCVBNMqwertyuiopasdfghjklñzxcvbnm0123456789"
    let numeroCadena = prompt("Pon el numero de cadenas que deseas: ")
    //Array para meter las cadenas
    let cadenasJuntas = []
    //Bucle que dara las vueltas que pida el usuario
    for (let i = 0; i < numeroCadena; i++) {
        //Random para generar la longitud de cada casilla del array
        let longitud = parseInt(Math.random() * 11)
        //Bucle para meter aleatoriamente los caracteres segun el random de antes
        for (let j = 0; j < longitud; j++) {
            //Cogemos una posicion random 
            let posicion = parseInt(Math.random() * cadenaInicial.length)
            //Si es el primer elemento que se añade se le asigna directamente 
            if (cadenasJuntas[i] === undefined) {
                cadenasJuntas[i] = cadenaInicial.charAt(posicion)
                //Y si no se le añade y coge la posicion que salga como aleatoria de la cadena inicial
            } else {
                cadenasJuntas[i] += cadenaInicial.charAt(posicion)
            }
        }
        //Para verificar que si sale un 0 no se quede como undefined
        if (longitud === 0) {
            cadenasJuntas[i] = ""
        }
    }
    //Contador para las casillas vacias
    let vacias = 0
    //Bucle para mostrar los elementos y contar cuantos estan vacios
    for (let i = 0; i < cadenasJuntas.length; i++) {
        console.log(`Cadena nº ${i}: ${cadenasJuntas[i]} `)
        if (cadenasJuntas[i].length === 0) {
            vacias++
        }
    }

    console.log(`En el conjunto de cadenas aleatorias encontramos ${vacias} elemento/s vacio/s`)

}

cadena()