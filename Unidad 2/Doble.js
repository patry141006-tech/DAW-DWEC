function doble(num, veces = 3) {
    if (isNaN(num) || isNaN(veces)) {
        alert("Debe ser un numero valido")
        return
    }

    console.log("El numero es: " + num + " y se hallara el doble " + veces + " veces")
    let numDentro = num;
    for (let i = 0; i < veces; i++) {
        numDentro = numDentro * 2
        console.log(numDentro)

    }

}
let numero = parseInt(prompt("Pon un numero: "))
let vecesDoble = parseInt(prompt("Pon el numero de veces que quieres que se repita: "))
doble(numero, vecesDoble)