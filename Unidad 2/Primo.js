function menu() {
    let elegir = parseInt(prompt(`Elige una de estas dos opciones: Indica 1 ó 2
1. ¿Tu número es primo?
2. Primos hasta tu número`))

    if (elegir < 1 && elegir > 2 || isNaN(elegir)) {
        alert("Debe ser  o 1 o 2");
        return;
    } else if (elegir == 1) {
        let numero = parseInt(prompt("Dime el numero para saber si es primo o no"))
        if (esPrimo(numero)) {
            alert("El numero " + numero + " es primo")
        } else {
            alert("El numero " + numero + " NO es primo")
        }
    } else {
        primosHastaNumero()
    }

}

function esPrimo(num) {
    if (isNaN(num)) {
        alert("Debe ser un numero")
        return;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    }
}

function primosHastaNumero() {
    let num = parseInt(prompt("Dime el numero y te dire cuantos primos hay hasta el"))
    let numerosPrimos = []
    if (isNaN(num)) {
        alert("Debe ser un numero")
        return;
    } else {
        for (let i = 1; i < num; i++) {
            if(esPrimo(i)){
                numerosPrimos[numerosPrimos.length]= i
            } 
        }
        for(let i = 0; i < numerosPrimos.length; i++){
            console.log ("El numero " + numerosPrimos[i] + " es primo")
        }
        console.log("Entre el numero 1 y " + num + " hay " + numerosPrimos.length + " numeros primos")

    }
}

menu()
