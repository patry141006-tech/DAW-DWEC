
function preguntarPresupuesto() {
    let presupuesto = parseFloat(prompt("¿Cuál es tu presupuesto?"));
    while (isNaN(presupuesto)) {
        alert("El presupuesto debe ser un numero")
        presupuesto = parseFloat(prompt("¿Cuál es tu presupuesto?"));
    }

    presupuesto
}

function añadirGasto() {
    //validación de formulario, creación de objeto de gasto…
}

function eliminarGasto() {
    //asociada al botón. Desde ahí se llama al método de la clase
}

class userInterface {
    //imprimirPresupuesto → método inicial para pintar en la pantalla el presupuesto y restante


    //imprimirAlerta → cada vez que se pinte un mensaje se hará desde este método


    //imprimirGastosListado → encargado de imprimir los gastos en la parte derecha de la pantalla


    //limpiarHTML → se encarga de que no haya gastos repetidos en pantalla


    //actualizarRestante → pinta el valor actualizado del restante


    //comprobarPresupuesto → verifica el % de importe gastado para, utilizando clases, modificar el
    //aspecto de restante. Además comprueba si el importe gastado excede o agota el presupuesto.

}

class presupuesto {
    presupuesto
    restante = 0
    gastos = []
    //Controlará el importe restante y los gastos
    constructor(importe) {
        this.presupuesto = importe
    }
    //nuevoGasto


    //calcularRestante


    //eliminarGasto
}
