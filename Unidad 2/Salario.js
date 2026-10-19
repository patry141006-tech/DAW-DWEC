function calcularSalario() {
    let nombre = prompt("Pon tu nombre: ")
    let salarioActual = parseFloat(prompt("Pon tu Salario Actual: "))
    let hijos = parseInt(prompt("Pon en numeros cuantos hijos tienes: "))
    let edad = parseInt(prompt("Pon tu edad: "))
    if (isNaN(edad) || isNaN(hijos) || isNaN(salarioActual)) {
        alert("Debe ser un numero valido")
        return
    }

    let salarioNuevo;
    switch (true) {
        case (salarioActual < 1000 && edad < 30 && hijos > 0):
            salarioNuevo = 1200;
            alert("Hola " + nombre + " tu salario actual es de: " + salarioActual + " y tu nuevo salario es de: " + salarioNuevo)
            break;

        case (salarioActual < 1000 && edad < 30 && hijos === 0):
            salarioNuevo = salarioActual * (1 + 5 / 100)
            alert("Hola " + nombre + " tu salario actual es de: " + salarioActual + " y tu nuevo salario es de: " + salarioNuevo)
            break;

        case (edad > 30 && edad < 45 && salarioActual < 1250 && hijos >= 3):
            salarioNuevo = salarioActual * (1 + 15 / 100)
            alert("Hola " + nombre + " tu salario actual es de: " + salarioActual + " y tu nuevo salario es de: " + salarioNuevo)
            break;

        case (edad > 30 && edad < 45 && salarioActual < 1250 && hijos > 1 && hijos < 3):
            salarioNuevo = salarioActual * (1 + 10 / 100)
            alert("Hola " + nombre + " tu salario actual es de: " + salarioActual + " y tu nuevo salario es de: " + salarioNuevo)
            break;

        case (edad > 45 && salarioActual < 2000):
            salarioNuevo = salarioActual * (1 + 15 / 100)
            alert("Hola " + nombre + " tu salario actual es de: " + salarioActual + " y tu nuevo salario es de: " + salarioNuevo)
            break;

        default:
            alert("Hola " + nombre + " tu sueldo no se modifica")
            break;
    }
}

calcularSalario()
