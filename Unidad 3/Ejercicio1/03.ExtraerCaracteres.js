function extraer() {
    //Pedimos al usuario las frases
    let frase1 = prompt("Escribe una frase...")
    let frase2 = prompt("Escribe otra frase...")
    //La que sea mas grande la asignamos como frase elegida
    let fraseElegida = frase1.length > frase2.length? frase1: frase2

    alert("Vamos a analizar el texto " + fraseElegida)
    //Creamos array de caracteres para ir metiendolos
    let caracteres = []
    for (let i = 0; i < fraseElegida.length; i++) {
        caracteres[i] = fraseElegida.charAt(i)
    }
    //Pasamos del array a String verificando que no tenga esa letra
    let aMostrar = ""
    for (let i = 0; i < caracteres.length; i++) {
        if (!aMostrar.includes(caracteres[i])) {
            aMostrar += caracteres[i] + ","
        }
    }
    //Eliminar espacios 
    aMostrar = aMostrar.replace(/ /g, "")
    //En el bucle se queda una coma al final y la eliminamos
    aMostrar = aMostrar.substring(0, aMostrar.length - 1)


    alert("En el texto " + fraseElegida + " encontramos los caracteres sin repetición: " + aMostrar)
}

extraer()