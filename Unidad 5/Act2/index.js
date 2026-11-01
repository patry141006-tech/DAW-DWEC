function carrito() {
    const enlaces = document.querySelectorAll('.info-card .agregar-carrito')
    const carrito = []
    for (let enl of enlaces) {
        enl.addEventListener('click', () => {
            carrito.push(extraerDatos(enl))
            pintarCarrito(carrito)
        });
    }
}
function pintarCarrito(carrito) {
    const puntoDePartida = document.querySelector('#lista-carrito tbody')
    puntoDePartida.innerHTML = ""
    carrito.forEach(element => {
        const tr = document.createElement("tr")
        const td1 = document.createElement("td")
        const td2 = document.createElement("td")
        const td3 = document.createElement("td")
        const td4 = document.createElement("td")
        const td5 = document.createElement("td")
        const imagen = document.createElement("img")
        const enlace = document.createElement("a")

        imagen.src = element.imagen;
        enlace.textContent = "X"
        enlace.setAttribute("class", "borrar-curso")
        enlace.setAttribute("data-id", element.id)

        td1.appendChild(imagen)
        td2.textContent = element.titulo
        td3.textContent = element.precio
        td4.textContent = element.cantidad
        td5.appendChild(enlace)

        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        puntoDePartida.appendChild(tr)

    });
}

function extraerDatos(enl) {
    const tarjeta = enl.closest('.card');

    const imagen = tarjeta.querySelector('.imagen-curso').src;
    const titulo = tarjeta.querySelector('h4').textContent
    const precio = tarjeta.querySelector('.precio span').textContent;
    const id = enl.dataset.id;

    const curso = {
        imagen: imagen,
        titulo: titulo,
        precio: precio,
        id: id,
        cantidad: 1
    }

    return curso
}


carrito()