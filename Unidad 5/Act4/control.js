function preguntarPresupuesto() {
    //preguntamos el presupuesto
    let presupuesto = parseFloat(prompt("Pon  tu presupuesto"));

    //Comprobamos que sea numero y mayor de 0
    while (isNaN(presupuesto) || presupuesto < 0) {
        alert("El presupuesto debe ser un numero");
        presupuesto = parseFloat(prompt("Pon  tu presupuesto"));
    }

    return presupuesto;
}


function añadirGasto(e) {
    //Para evitar que se envie el formulario
    e.preventDefault();
    //Cogemos lo que hay dentro de gasto
    const nombre = document.querySelector("#gasto").value;
    //Vemos cogemoes la cantidad
    const cantidad = parseFloat(document.querySelector("#cantidad").value);
    //Comprobamos que sea correcto
    if (nombre.trim() === "" || isNaN(cantidad) || cantidad <= 0) {
        ui.imprimirAlerta("Todos los campos son obligatorios y la cantidad debe ser mayor que cero", "alert-danger");
        return;
    }

    //Comprobar que no se supera el presupuesto
    if (cantidad > presupuestoUsuario.restante) {
        ui.imprimirAlerta("No tienes suficiente presupuesto para este gasto", "alert-danger");
        return;
    }
    //Cremos un nuevo gasto con el nombre y la cantidad
    const gasto = new Gasto(nombre, cantidad);
    presupuestoUsuario.nuevoGasto(gasto);
    //Actualizamos la pantalla
    ui.imprimirGastosListado(presupuestoUsuario.gastos);
    ui.actualizarRestante(presupuestoUsuario.restante);
    ui.comprobarPresupuesto(presupuestoUsuario);

    ui.imprimirAlerta("Gasto añadido correctamente", "alert-success");

    document.querySelector("#agregar-gasto").reset();
}


function eliminarGasto(e) {
    //Comprobamos si en el elemento que hemos hecho click tiene la clase badge
    if (e.target.classList.contains("badge")) {
        //Cogemos su padre
        const elementoEliminar = e.target.parentElement;
        //Cogemos el id del padre
        const id = Number(elementoEliminar.dataset.id);
        //eliminamos el gasto
        presupuestoUsuario.eliminarGasto(id);
        //Actualizamos
        ui.imprimirGastosListado(presupuestoUsuario.gastos);
        ui.actualizarRestante(presupuestoUsuario.restante);
        ui.comprobarPresupuesto(presupuestoUsuario);

        ui.imprimirAlerta("Gasto eliminado correctamente", "alert-success");
    }
}


class userInterface {

    imprimirPresupuesto(presupuesto) {
        let elementoInicialPresupuesto = document.querySelector("#total");
        let elementoInicialRestante = document.querySelector("#restante");

        elementoInicialPresupuesto.textContent = presupuesto.presupuesto;
        elementoInicialRestante.textContent = presupuesto.restante;
    }


    imprimirAlerta(mensaje, tipo) {
        //Comprobamos si existe una alerta
        const alertaExistente = document.querySelector(".alerta");
        //Si existe la eliminamos
        if (alertaExistente) {
            alertaExistente.remove();
        }
        //Mostramos la alerta
        const alerta = document.createElement("div");
        alerta.classList.add("alert", tipo, "alerta");
        alerta.textContent = mensaje;
        //Para poner la alerta arriba del formulario
        const formulario = document.querySelector("#agregar-gasto");
        formulario.parentElement.insertBefore(alerta, formulario);
    }


    imprimirGastosListado(gastos) {
        this.limpiarHTML();
        //Donde mostrar
        const listado = document.querySelector("#gastos ul");

        gastos.forEach(gasto => {
            //Creamos un li
            const li = document.createElement("li");
            //Añadimos clases
            li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
            //Guardamos id
            li.dataset.id = gasto.id;

            //Nombre del gasto
            const nombre = document.createElement("span");
            nombre.textContent = gasto.nombre;

            //Cantidad en azul
            const cantidad = document.createElement("span");
            cantidad.textContent = `${gasto.cantidad} €`;
            cantidad.style.color = "blue";

            //Boton para borrar
            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "X";
            botonEliminar.classList.add("badge");

            //Añadimos al html
            li.appendChild(nombre);
            li.appendChild(cantidad);
            li.appendChild(botonEliminar);

            listado.appendChild(li);
        });
    }


    limpiarHTML() {
        //Cogemos la lista de gastos
        const listado = document.querySelector("#gastos ul");
        //Mientras tenga hijos se elimina
        while (listado.firstChild) {
            listado.removeChild(listado.firstChild);
        }
    }


    actualizarRestante(restante) {
        const elementoRestante = document.querySelector("#restante");
        elementoRestante.textContent = restante;
    }


    comprobarPresupuesto(presupuesto) {
        const elementoRestante = document.querySelector(".restante");
        //Eliminamos clases
        elementoRestante.classList.remove("alert-success","alert-warning","alert-danger");
        //Si el presupuesto es cero o menos esta en rojo
        if (presupuesto.restante <= 0) {
            elementoRestante.classList.add("alert-danger");
            //Si queda un 25% amarillo
        } else if (presupuesto.restante <= presupuesto.presupuesto * 0.25) {
            elementoRestante.classList.add("alert-warning");
            //sino verde
        } else {
            elementoRestante.classList.add("alert-success");
        }
        //Si no hya presupuesto se muestra la alerta
        if (presupuesto.restante <= 0) {
            this.imprimirAlerta("Has superado tu presupuesto","alert-danger");
        }
    }
}


class Gasto {
    //Contador para el id
    static contador = 0;

    constructor(nombre, cantidad) {
        this.id = ++Gasto.contador;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}


class presupuesto {
    restante = 0;
    gastos = [];

    constructor(importe) {
        this.presupuesto = importe;
        this.restante = importe;
    }

    nuevoGasto(gasto) {
        this.gastos.push(gasto);
        this.restante -= gasto.cantidad;
    }

    calcularRestante() {
        let totalGastado = 0;
        
        this.gastos.forEach(element => {
            totalGastado += element.cantidad;
        });
        this.restante = this.presupuesto - totalGastado;
    }

    eliminarGasto(id) {
        const arrayConEliminado = this.gastos.filter(
            gasto => gasto.id !== id
        );
        this.gastos = arrayConEliminado;
        this.calcularRestante();
    }
}


//Crear los objetos
const ui = new userInterface();
const presupuestoUsuario = new presupuesto(preguntarPresupuesto());

//Mostrar presupuesto inicial
ui.imprimirPresupuesto(presupuestoUsuario);

//Eventos
document.querySelector("#agregar-gasto").addEventListener("submit", añadirGasto);
document.querySelector("#gastos ul").addEventListener("click", eliminarGasto);
