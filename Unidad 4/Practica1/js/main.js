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
    todasTarjetas.forEach((tarjeta) => {
        console.log(tarjeta.textContent);
    });
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
    if (error) {
        console.log("El elemento existe");
    } else {
        console.log("El elemento no existe");
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
    if (encabezado) {
        console.log(encabezado.textContent);
        console.log(encabezado.innerText);
        console.log(encabezado.innerHTML);

        encabezado.textContent = "Primera temporada";
    }
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

    let corregidas = 0;
    const imagenes = document.querySelectorAll('img')
    for (const img of imagenes) {
        if (!img.hasAttribute('alt') || img.alt.trim() === "") {
            img.alt = "Imagen de los Bridgerton"
            corregidas++
        }
    }
    console.log("Imagenes corregidas:", corregidas);

    //6. Haz que los enlaces externos (los que empiezan por http) se abran en una pestaña nueva:
    //añade target=”_blank” y rel=”noopener”
    //Para buscar un enlace que empiece por algo usa [href^="http"]

    const enlaces = document.querySelectorAll('a[href^="http"]');
    for (const enl of enlaces) {
        enl.setAttribute("target", "_blank");
        enl.setAttribute("rel", "noopener");

    }

    //7. Muestra, para un enlace interno, la diferencia entre getAttribute(‘href’) y la propiedad href. 
    const enlace = document.querySelector('a[href="#inicio"]');

    console.log(enlace.getAttribute('href'))
    console.log(enlace.href)

    //8. Añade, a cada elemento del bloque que se repite un atributo data-posicion con su número
    //de orden (1, 2, 3…) usando dataset. Comprueba que aparecen por consola.
    const personajes = document.querySelectorAll('#personajes .tarjeta')
    let pos = 1
    for (const pers of personajes) {
        pers.dataset.posicion = pos
        pos++
        console.log(pers.dataset.posicion)
    }

    //9. Elimina algún atributo que no sea necesario
    const atributo = document.querySelector('img')
    atributo.removeAttribute('width');
}

function estilosYClases() {
    //1. Aplica destacado al primer y último elemento del bloque que se repite
    const primeraTarjeta = document.querySelector('#personajes .tarjeta:first-of-type');
    const ultimaTarjeta = document.querySelector('#personajes .tarjeta:last-of-type');

    primeraTarjeta.classList.add('destacado');
    ultimaTarjeta.classList.add('destacado');

    //2. Oculta con oculto un elemento de tu elección y muestra por consola el resultado de si el
    //elemento tiene o no la clase
    const fresaTitulo = document.querySelector('header p')
    fresaTitulo.classList.add('oculto')
    console.log(fresaTitulo.classList.contains('oculto'))

    //3. Aplica toggle (‘tema-alternativo) al <body> dos veces y muestra por consola el valor que
    //devuelve cada llamada. Explica en un comentario por qué la página queda como al
    //principio.
    const cuerpo = document.querySelector('body');

    console.log(cuerpo.classList.toggle('tema-alternativo'));
    console.log(cuerpo.classList.toggle('tema-alternativo'));
    //Porque el toggle lo que hace es que si esta, lo quita y sino esta lo pone, entonces a la primera lo pone y la segunda lo quita

    //4. Cambia una clase existente de tu CSS original por otra de tu practica.css (en un único paso)
    const tarjeta = document.querySelector('#personajes .tarjeta');
    tarjeta.classList.replace('tarjeta', 'tema-alternativo');

    //5. Muestra className y classList de un elemento con varias clases y explica la diferencia. 
    console.log('className:', tarjeta.className);
    console.log('classList:', tarjeta.classList);
    //El name muestra todos seguidos y el list crea elementos separados

    //6. Estilo calculado. Aplica a cada elemento del bloque que se repite un valor que no pueda
    //estar en el CSS porque depende de su posición.
    const tarjetas = document.querySelectorAll('.tarjeta')
    tarjetas.forEach((elemento, indice) => {
        elemento.style.borderColor = `hsl(${indice * 40}, 70%, 50%)`;
    })
}

function recorrerDOM() {
    const inicio = document.querySelector('#personajes .tarjeta p');
    //1. Elige un elemento que esté bastante “profundo” en tu página (un enlace dentro de una
    //tarjeta, un párrafo dentro de un artículo…). Este es el punto de partida. 
    let elemento = inicio;

    if (!inicio) {
        console.log("No se ha encontrado el punto de partida");
        return
    }

    //2. Hacia arriba → Con un bucle y parentElement, sube hasta <html> y muestra la ruta
    //completa de etiquetas, por ejemplo:
    while (elemento != null) {
        console.log(elemento.tagName);
        elemento = elemento.parentElement;
    }

    //3. Con closest, obtén directamente el contenedor del bloque que se repite al que pertenece
    //tu punto de partida, y aplícale .destacado
    const contenedor = inicio.closest('.tarjeta');
    if (!contenedor) {
        console.log("No se ha encontrado");
        return;
    }
    if (contenedor) {
        contenedor.classList.add('destacado');
    }

    //4. Hacia abajo → Sobre ese contenedor, muestra childNodes.length y children.length.
    //Recorre childNodes mostrando nodeType y el nodeName de cada nodo, y explica en un
    //comentario de donde salen los nodos de texto.
    console.log(contenedor.childNodes.length);
    console.log(contenedor.children.length);
    contenedor.childNodes.forEach(nodo => {
        console.log("tipy" + nodo.nodeType + "\n name" + nodo.nodeName);
    });

    //Nodes cuenta todos los nodos y children solo los elementos de html.
    //Los nodos incluyen espacios

    //5. Modifica el primer y el último hijo cambiando su texto y añadiendo una clase.
    const primero = contenedor.firstElementChild;
    const ultimo = contenedor.lastElementChild;
    if (primero) {
        primero.textContent = "primer hijo";
        primero.classList.add('destacado');
    }

    if (ultimo) {
        ultimo.textContent = " ultimo hijo";
        ultimo.classList.add('destacado');
    }

    //6. Entre hermanos → Desde ese contenedor, llega al hermano siguiente y al anterior. Si no
    //existen (porque es el primero o el último), muestra un mensaje en vez de error.
    const siguiente = contenedor.nextElementSibling;
    const anterior = contenedor.previousElementSibling;

    if (siguiente) {
        console.log("Hermano siguiente: ", siguiente);
    } else {
        console.log("No existe un hermano siguiente");
    }

    if (anterior) {
        console.log("Hermano anterior: ", anterior);
    } else {
        console.log("No existe un hermano anterior");
    }

}

function crearInsertar() {
    const menu = document.querySelector('nav ul');

    if (!menu) {
        console.log("No se ha encontrado el nav");
        return;
    }
    //1. Crear un enlace nuevo y añádelo al final del menú
    const enlace = document.createElement('a');
    enlace.textContent = 'Nuevo enlace';
    enlace.href = '#personajes';

    const elementoMenu = document.createElement('li');
    elementoMenu.append(enlaceNuevo);
    menu.append(elementoMenu);
    //2. Crea dos enlaces más e insértalos a la vez al principio
    const enlaceUno = document.createElement('li');
    const enlaceDos = document.createElement('li');

    const nuevoEnlaceUno = document.createElement('a');
    nuevoEnlaceUno.textContent = 'Inicio nuevo';
    nuevoEnlaceUno.href = '#inicio';

    const nuevoEnlaceDos = document.createElement('a');
    nuevoEnlaceDos.textContent = 'Personajes nuevos';
    nuevoEnlaceDos.href = '#personajes';

    enlaceUno.append(nuevoEnlaceUno);
    enlaceDos.append(nuevoEnlaceDos);

    menu.prepend(enlaceUno, enlaceDos);
    //3. Inserta un elemento justo después del segundo enlace
    const segundoEnlace = menu.querySelectorAll('li')[1];

    if (segundoEnlace) {
        const elementoInsertado = document.createElement('li');
        elementoInsertado.textContent = 'Elemento insertado después del segundo enlace';

        segundoEnlace.insertAdjacentElement('afterend', elementoInsertado);
    }
    //4. Mueve un enlace que ya existía a otra posición sin crear nada nuevo.
    const enlaceExistente = menu.querySelector('li:nth-child(3)');

    if (enlaceExistente) {
        menu.append(enlaceExistente);
    }
    //5. Elimina un elemento
    const elementoEliminar = menu.querySelector('li:last-child');

    if (elementoEliminar) {
        elementoEliminar.remove();
    }

}

function usarWindow() {

}
//seleccionar()
//contenidoYAtributos()
//estilosYClases()
//recorrerDOM()
crearInsertar()