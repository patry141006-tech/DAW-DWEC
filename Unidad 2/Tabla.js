function tablita() {
    let filas = parseInt(prompt("Pon el numero de filas: "))
    let columnas = parseInt(prompt("Pon el numero de columnas: "))

    if (isNaN(filas) || isNaN(columnas)) {
        alert("Debe ser un numero valido")
        return
    }

    document.write('<table>')
    for (let i = 0; i < filas; i++) {
        document.write('<tr>')
        for (let j = 0; j < columnas; j++) {
            document.write('<td>Daniela</td>')
        }
        document.write('</tr>')
    }
    document.write('</table>')

}
tablita()