function palabras() {
    while (true) {
        let palabra1 = ""
        while (true) {
            //Pedimos las palabras y la pasamos a la funcion validar para ver que este bien
            palabra1 = prompt("Escribe la primera palabra con minimo 4 caracteres")
            if (validar(palabra1, 4)) {
                break;
            }
        }

        let palabra2 = ""
        while (true) {
            palabra2 = prompt("Escribe la segunda palabra con minimo 5 caracteres")
            if (validar(palabra2, 5)) {
                break;
            }

        }

        let palabra3 = ""
        while (true) {
            palabra3 = prompt("Escribe la tercera palabra con minimo 6 caracteres")
            if (validar(palabra3, 6)) {
                break;
            }
        }

        //Eliminar espacios intermediarios
        palabra1=eliminarEspacios(palabra1) 
        palabra2=eliminarEspacios(palabra2) 
        palabra3=eliminarEspacios(palabra3) 
        //Creamos la variable de la palabra final y le añadimos las letras que toquen y pasandolas a minusculas o a mayusculas
        let palabraFinal = ""
        palabraFinal += palabra1.substring(0, 2).toLocaleUpperCase()
        palabraFinal += palabra2.substring(palabra2.length % 2 === 0 ? 3 : 2, 5).toLocaleLowerCase()
        palabraFinal += palabra3.substring(palabra3.length - 2, palabra3.length).toLocaleUpperCase()

        alert("Con los textos: " + palabra1 + ", " + palabra2 + " y " + palabra3 + ", obtenemos: " + palabraFinal)

    }
}

function validar(palabra, num) {
    //segun la palabra y el numero que nos pasen validamos que no sea menos que lo que nos pide yque no sea un numero
    if (palabra.length < num) {
        alert("Numero de caracteres no valido")
        return false
    } else if (!isNaN(parseInt(palabra))) {
        alert("No debe de ser un numero")
        return false
    }
    return true
}

//eliminamos los espacios del medio
function eliminarEspacios(palabra) {
    palabra = palabra.replace(/ /g, "")
    return palabra
}

palabras()