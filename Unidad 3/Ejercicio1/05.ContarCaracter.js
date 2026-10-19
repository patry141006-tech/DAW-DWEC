function contar() {
    //Pedimos frase y verificamos que tenga mas de 3 caracteres y que no sea un numero
    let frase = prompt("Indica el texto: ")
    if (frase.length < 3 || !isNaN(parseInt(frase))) {
        alert("Tu frase tiene menos de 3 palabras o es un numero...")
        return
    }
    //Pedimos el caracter y verificamos que no sea un numero o este vacio
    let letra = prompt("Indica una letra/caracter y te digo cuántas veces aparece en tu texto: ")
    if (letra.length === 0 || !isNaN(parseInt(letra))) {
        alert("Tu letra/caracter esta vacío o es un numero...")
        return
    }
    //Pasamos la frase y la letra a minuscula para poder contar todas
    let fraseMinusculas = frase.toLocaleLowerCase()
    let letraMinusculas = letra.toLocaleLowerCase()
    let cont = 0
    //En el bucle vemos si la cada letra de la frase es la que nos pide el usuario y la contamos si es asi
    for (let i = 0; i < fraseMinusculas.length; i++) {
        if (fraseMinusculas.charAt(i) === letraMinusculas) {
            cont++
        }
    }
    //Mostramos
    alert("Tu frase " + frase + " contiene el caracter " + letra + " " + cont + " veces")

}

contar()