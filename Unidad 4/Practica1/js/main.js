function seleccionar() {
    //1. Con querySelector, selecciona un elemento de cada tipo y muéstralo:
    //✓ Por etiqueta
    const porEtiqueta = document.querySelector('nav')
    console.log("Por etiquetas", porEtiqueta)

    //✓ Por clase
    const porClase = document.querySelector('.tarjeta')
    console.log("Por clase", porClase)

    //✓ Por id
    const porId = document.querySelector('#temporadas')
    console.log("Por Id", porId)

    //✓ Por descendiente (dos niveles como mínimo, p.eje. ‘header nav a’)
    const porDescendiente = document.querySelector('main h2')
    console.log("Por descendiente", porDescendiente)

    //✓ Por atributo
    const porAtributo = document.querySelector('img[alt]')
    console.log("Por atributo", porAtributo)

    //✓ Por una pseudoclase
    const porPseudoclase = document.querySelector('#personajes .tarjeta:first-of-type')
    console.log("Por Pseudoclase", porPseudoclase);

    //2. Con querySelectorAll, selecciona el bloque que se repite en tu página (tarjetas, artículos…). 
    const todasTarjetas = document.querySelectorAll('.tarjeta')
    //Muestra cúantos hay y recórrelos con forEach mostrando el texto de cada uno.
    console.log(todasTarjetas.length)
    for (let card of todasTarjetas) console.log(card);

    //3. Convierte esa colección en array con Array.from 
    const arrayTarjetas = Array.from(todasTarjetas)
    // y obtén un map solo con sus títulos. 
    const titulos = arrayTarjetas.map(p => p.querySelector('h3').textContent)
    // Muéstralo. 
    console.log("Tarjetas: ", titulos)

    //4. Busca un selector que no exista en tu página. Demuestra qué devuelve querySelector y querySelectorAll en ese caso 
    const error = document.querySelector('Penelope')
    const errorAll = document.querySelectorAll('Penelope');

    //console.log(error); Da null
    //console.log(errorAll); .length 0

    // y escribe el código protegido: if (elemento) {…} (código libre)
    if (error === "null") {
        console.log("Maria antonieta esta igual que el elemento")
    }
    if (errorAll.length === 0) {
        console.log("No hay nada, maquina.")
    }

    //5. Demuestra la diferencia entre colección viva y estática: selecciona los mismos elementos con getElementsByClassName o getElementsByTagName y con querySelectorAll,
    const coleccionViva = document.getElementsByClassName('tarjeta');
    const coleccionEstatica = document.querySelectorAll('.tarjeta');

    // elimina uno y muestra el length de ambas antes y después. 
    console.log("Viva antes:", coleccionViva.length);
    console.log("Estatica antes:", coleccionEstatica.length);

    if (coleccionViva.length > 0) {
        coleccionViva[0].remove();
    }

    console.log("Viva después:", coleccionViva.length);
    console.log("Estática después:", coleccionEstatica.length);

    //Explica en un comentario el resultado. (deja este último paso para el final si vas a necesitar el elemento en otros bloques)
    //La estatica si cuando la creas tiene 4 elementos aunque borres alguno en esta seguira teniendo 3 elementos
    //En comparacion la viva si lo eliminas se elimina y tendria 3

}

function contenidoYAtributos() {
    //1. Elige un título con alguna etiqueta dentro (<span>, <strong>…). 
    const encabezado = document.querySelector('header h1')

    // Muestra su textContent, 
    console.log(encabezado.textContent)
    // innerText 
    console.log(encabezado.innerText)
    // e innerHTML 
    console.log(encabezado.innerHTML)
    // y explica en un comentario por qué son distintos.
    //Porque en el textContent pone literalmente como esta dentro del html sin contar las etiquetas
    //En el innerText muestra normal como se veria en el navegador
    //Y por ultimo en el innerHTML aparece el propio html, entonces si tiene etiquetas se muestran

    //2. Cambia el texto del título principal de la página con textContent
    encabezado.textContent = "Primera temporada"

    //3. Cambia el contenido de otro elemento con innerHTML, metiendo alguna etiqueta
    //(<strong>…). Recuerda: solo el contenido interior, sin repetir la etiqueta del propio
    //elemento.
    const menjBienvenida = document.querySelector('.tarjeta p')
    menjBienvenida.innerHTML = "<strong>Anthony en negrita </strong>"

    //4. Cambia una imagen modificando a la vez su src y su alt.
    const imgPrincipal = document.querySelector('#inicio img')
    imgPrincipal.src = "img/imgBridgerton2.jpg"
    imgPrincipal.alt = "imagen cambiada bridgerton"

    //5. Recorre todas las imágenes. A las que no tengan alt ponles uno y muestra por consola
    //cuántas has corregido.

    imgPrincipal.alt = ""
    const imagenes = document.querySelectorAll('img')
    for (let img of imagenes) {
        if (img.alt == "") {
            img.alt = "Imagen de los Bridgerton"
        }
    }

    //6. Haz que los enlaces externos (los que empiezan por http) se abran en una pestaña nueva:
    //añade target=”_blank” y rel=”noopener”
    //Para buscar un enlace que empiece por algo usa [href^="http"]

    const enlaces = document.querySelectorAll('a');
    for (let enl of enlaces) {
        if (enl.href.startsWith("http")) {
            enl.setAttribute("target", "_blank");
            enl.setAttribute("rel", "noopener");
        }
    }


}

function estilosYClases() {

}

function recorrerDOM() {

}

function crearInsertar() {

}

function usarWindow() {

}
seleccionar()
contenidoYAtributos()