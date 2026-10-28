function reloj() {
    //Creamos la fecha de hoy
    let ahora = new Date();

    //Sacamos el numero de dia de hoy
    let dia = String(ahora.getDate()).padStart(2, "0");
    //El dia que corresponde al mes y creamos un array con los meses
    let mes = String(ahora.getMonth())
    const arrayMes = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    //Sacamos el dia de la semana y el array
    //Empieza por domingo y domingo es 0
    let diaSemana = String(ahora.getDay())
    const arraySemana = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
    //Sacamos la hora, minutos y segundos.
    let horas = String(ahora.getHours()).padStart(2, "0");
    let minutos = String(ahora.getMinutes()).padStart(2, "0");
    let segundos = String(ahora.getSeconds()).padStart(2, "0");

    //Mostramos la hora
    document.getElementById("hora").textContent =
        horas + ":" + minutos + ":" + segundos;

    //Mostramos la fecha
    document.getElementById("fecha").textContent =
        arraySemana[diaSemana] + ", " + dia + " " + arrayMes[mes]

    //Recuperamos el contenedor
    let contenedor = document.getElementById("contenedor");
    //Si los segundos es par se anima y si es impar se elimina
    if (segundos % 2 === 0) {
        contenedor.classList.add("animar")
    } else {
        contenedor.classList.remove("animar");
    }
}
//Se llama cada 1 segundo y asi nada mas iniciar te aparece el titulo bien bonito de reloj digital
setInterval(reloj, 1000);

