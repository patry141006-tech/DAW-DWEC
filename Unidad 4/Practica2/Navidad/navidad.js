function reloj() {
    //Creamos la fecha de hoy y la de navidad
    let ahora = new Date();
    let navidad = new Date(2026, 11, 25, 0, 0, 0);
    //Calculamos diferencia ESTO ESTA EN MILISEGUNDOS
    let diferencia = navidad - ahora;
    //Si la cuenta es cero o menos significa que ya ha pasado
    if (diferencia <= 0) {
        document.getElementById("cuentaAtras").textContent =
            "Feliz Navidad!!";
        return;
    }
    //Sacamos dias, horas, minutos y segundos
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    let minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    let segundos = Math.floor((diferencia / 1000) % 60);

    //Los pasamos a string en formato de dos digitos
    dias = String(dias).padStart(2, "0");
    horas = String(horas).padStart(2, "0");
    minutos = String(minutos).padStart(2, "0");
    segundos = String(segundos).padStart(2, "0");
    //Mostramos la cuenta atras
    document.getElementById("cuentaAtras").textContent =
        dias + " días " + horas + ":" + minutos + ":" + segundos;
    //Lo mismo que antes para que parpadee
    let contenedor = document.getElementById("contenedor");

    if (segundos % 2 === 0) {
        contenedor.classList.add("animar")
    } else {
        contenedor.classList.remove("animar");
    }
}

reloj();
setInterval(reloj, 1000);