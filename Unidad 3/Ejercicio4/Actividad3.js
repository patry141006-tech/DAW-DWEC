function intervalo() {
    //Pedimos al usuario los valores
    let minUsuario = prompt("Dame el numero minimo de el intervalo");
    let maxUsuario = prompt("Dame el numero maximo de el intervalo");

    //creamos minimo y maximo
    let minimo = 0;
    let maximo = 0;

    //El usuario a cancelado
    if (minUsuario === null || maxUsuario === null) {
        console.log("Has cancelado");
        return;
    }

    //El usuario no ha metido nada
    if (minUsuario.length === 0 || maxUsuario.length === 0) {
        console.log("Los valores estan vacios")
        return;

    }

    //no es un entero
    if (!Number.isInteger(Number(minUsuario)) ||
        !Number.isInteger(Number(maxUsuario))) {
        alert("Debe de ser un numero entero");
        return;
    }

    //Comprobaciones para ver cual es el menor y el mayor
    if (minUsuario > maxUsuario) {
        minimo = Number(maxUsuario);
        maximo = Number(minUsuario);
    } else {
        minimo = Number(minUsuario);
        maximo = Number(maxUsuario);
    }

    //Objeto literal
    const intervalo = {
        min: minimo,
        max: maximo,

        //Devuelve todos los numeros 
        get numeros() {
            const arrayIntervalos = [];

            for (let i = this.min; i <= this.max; i++) {
                arrayIntervalos.push(i);
            }
            return arrayIntervalos;
        },

        //Muestra los datos
        mostrar() {
            console.log(`Minimo: ${this.min}  | Maximo: ${this.max}`)
            console.log("Números del intervalo: " + this.numeros);
        },

        //Actualiza min y max
        set valores(arrayCincoElementos) {
            console.log(`Array recibido ` + arrayCincoElementos)

            this.max = Math.max(...arrayCincoElementos);
            this.min = Math.min(...arrayCincoElementos);
        }

    };
    intervalo.mostrar()
    
    //Crea array con random
    const arrayElementos = []
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(Math.random() * 100) + 1
        arrayElementos.push(numero);
    }
    intervalo.valores = arrayElementos
    intervalo.mostrar()
}