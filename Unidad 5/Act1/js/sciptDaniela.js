function añadirBoton() {
    //Cogemos el elemento boton y el footer
    const boton = document.querySelector('.btn-flotante');
    const footer = document.querySelector('#footer')
    //Cambiamos el contenido del texto del boton
    boton.textContent = "Descubre mas..";
    //Si hacen click
    boton.addEventListener('click', () => {
        //Si esta se quita y si no esta se añade
        footer.classList.toggle("activo");
        boton.classList.toggle("activo");

        //Si esta se cambia el contenido del boton 
        if (footer.classList.contains("activo")) {
            boton.textContent = "Cerrar";
        } else {
            boton.textContent = "Descubre más...";
        }
    })
}
añadirBoton()