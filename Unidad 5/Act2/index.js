function carrito() {
    //Recogemos todos los enlaces que tienen la clase agregar a carrito
    const enlaces = document.querySelectorAll('.info-card .agregar-carrito')
    //Creamos la variable carrito
    const carrito = []
    //recorremos los enlaces
    for (let enl of enlaces) {
        //Si hacen click se llaman a las funciones
        enl.addEventListener('click', () => {
            actualizarCantidad(carrito, enl)
            pintarCarrito(carrito)
        });
    }
    //Cogemos el elemento de vaciar el carrito
    const vaciar = document.querySelector('#vaciar-carrito')
    //Si hace click se borra todo
    vaciar.addEventListener('click', () => {
        carrito.length = 0
        pintarCarrito(carrito)
    });
}
function pintarCarrito(carrito) {
    //Cogemos el punto de partida para empezar a pintar
    const puntoDePartida = document.querySelector('#lista-carrito tbody')
    puntoDePartida.innerHTML = ""
    //Recorremos el carrito
    carrito.forEach(element => {
        //Creamos los elementos
        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")
        const imagen = document.createElement("img")
        const enlace = document.createElement("a")

        //Creamos la imagen y el enlace
        imagen.src = element.imagen;
        enlace.textContent = "X"
        enlace.setAttribute("class", "borrar-curso")
        enlace.setAttribute("data-id", element.id)
        enlace.addEventListener('click', () => {
            quitarUnidad(carrito, element)
            pintarCarrito(carrito)
        });

        //Añadimos los elementos a sus padres
        td1.appendChild(imagen)
        td2.textContent = element.titulo
        td3.textContent = element.precio
        td4.textContent = element.cantidad
        td5.appendChild(enlace)

        //Y añadimos los padres anteriores al tr
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)

        //Lo añadimos en el html
        puntoDePartida.appendChild(tr)
    });
}

function actualizarCantidad(carrito, curso) {
    //Extraemos los datos de curso
    let extraido = extraerDatos(curso)
    //Creamos indice
    let indice = -1
    //Recorremos el carrito
    for (let i = 0; i < carrito.length; i++) {
        //Si existe el indice se cambia y se sale del bucle 
        if (carrito[i] !== undefined && carrito[i].id === extraido.id) {
            indice = i
            break
        }
    }

    //Si es mayor de -1 significa que existe, en ese caso se incrementa
    if (indice > -1) {
        carrito[indice].cantidad++
    } else {
        //Si no existe se crea al final
        carrito.push(extraido)
    }
}

function extraerDatos(enl) {
    //busca .card mas cercano
    const tarjeta = enl.closest('.card');
    //Sacamos la imagen, el titulo, el precio y el id
    const imagen = tarjeta.querySelector('.imagen-curso').src;
    const titulo = tarjeta.querySelector('h4').textContent
    const precio = tarjeta.querySelector('.precio span').textContent;
    const id = enl.dataset.id;
    //Se crea el objeto y se devuelve
    const curso = {
        imagen: imagen,
        titulo: titulo,
        precio: precio,
        id: id,
        cantidad: 1
    }

    return curso
}

function quitarUnidad(carrito, curso) {
    let indice = -1
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i] !== undefined && carrito[i].id === curso.id) {
            indice = i
            break
        }
    }

    //Si existe, y tiene mas de una cantidad se resta cantidad, sino se elimina.
    if (indice > -1) {
        if (curso.cantidad > 1) {
            carrito[indice].cantidad--
        } else {
            carrito.splice(indice, 1)
        }
    }
}



carrito()