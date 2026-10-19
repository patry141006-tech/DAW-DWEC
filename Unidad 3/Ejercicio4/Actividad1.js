function palabras() {
    const palabrasUsuario = [];
    let seguirJugando = true;
    let cont = 0
    while (seguirJugando) {
        let palabra= prompt("Pon palabras, cuando quieras cancelar no insertes nada o cancela:");
        if (palabra === null || palabra.length === 0) {
            seguirJugando = false;
        } else {
            if (isNaN(parseInt(palabra))) {
                palabrasUsuario[cont] = palabra 
                cont++
            } 
        }
    }
    verificar(palabrasUsuario)
}

function verificar(arrayPalabrasUsuario) {
    const palabras = []
    let cont = 0;
    for (let i = 0; i < arrayPalabrasUsuario.length; i++) {
        let entrada = arrayPalabrasUsuario[i].trim();
        if (!entrada.includes(" ")) {
            let entraEnArray = true
            for (let j = 0; j < entrada.length; j++) {
                if (esNumero(entrada.charAt(j))) {
                    entraEnArray = false;
                    break;
                }
            }
            if (entraEnArray) {
                palabras[cont] = entrada;
                cont++
            }
        }
    }
    palabras.sort((a, b) => b.localeCompare(a, "es")).forEach(function (elemento) { console.log(elemento) })
}

function esNumero(num) {
    return /^\d$/.test(num);
}
