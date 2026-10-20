function frecuenciaDeNumerosAleatorios() {
    //Pedimos datos al usuario
    let min = prompt("Dime el minimo: ")
    let max = prompt("Dime el maximo:")
    let repeticiones = prompt("Dime el numero de repeticiones")

    //Comprobacion de que no ha cancelado
    if (min === null || max === null || repeticiones === null) {
        alert("Has cancelado intentalo mas tarde...");
        return;
    }

    if (Number.isInteger(min) && Number.isInteger(max) && Number.isInteger(repeticiones)){
        if(min >= 0 && min <= max && max >= 0 && repeticiones > 0){
            
        }
    }


}