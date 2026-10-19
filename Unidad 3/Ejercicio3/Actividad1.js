function LaHipotesisDelAmor() {
    const libro = {
        //Crear objeto
        titulo: "La hipotesis del amor",
        anio: 2021,
        paginas: 488,
        autor: {
            nombre: "Ali",
            apellidos: "Hazelwood",
            pais: "Italia",
        },
        //Crear metodo que use this
        resumen: function () {
            return (`El titulo: ${this.titulo} fue publicado en ${this.anio} por ${this.autor.nombre} ${this.autor.apellidos} tiene ${this.paginas} paginas`)
        },
        //Crear variable valoracion
        _valoracion: 0,
        //Crear get y set y que el set compruebe que este bien el numero
        get valoracion() {
            return (`${this._valoracion}/5`)
        },
        set valoracion(_valoracion) {
            if (typeof (_valoracion) !== "number" || _valoracion < 0 || _valoracion > 5) {
                alert("La valoracion no es valida")
            } else {
                this._valoracion = _valoracion
            }
        },
        //Crear variable genero
        genero: "romance",

    }
    //Cambiar numero de paginas
    libro.paginas = 500
    //Crear y eliminar la variable prestado
    libro.prestado = true
    delete libro.prestado
    //Destructuring anidado 
    const { titulo, autor: { apellidos, pais: nacionalidad } } = libro
    //Recorre el libre con for ... in
    for (const propiedad in libro) {
        if (typeof libro[propiedad] !== "object" &&
            typeof libro[propiedad] !== "function") {
            console.log(`Clave: ${propiedad} -> Valor: ${libro[propiedad]}`)
        }
    }

    //Recorre el autor
    for (const [clave, valor] of Object.entries(libro.autor)) {
        console.log(`La priopiedad ${clave} almacena: ${valor}`)
    }
    //Copia de referencia
    const copiaSpread = { ...libro }
    //Copia completa
    const copiaClone = structuredClone(libro.autor)
    //Pasar objeto a JSON
    //Entra como String y sale como Objeto a volverlo a pasar a obj y al volverlo a pasar a obj salen las funciones
    const textoJSON = JSON.stringify(libro)
    console.log(textoJSON)
    console.log(typeof textoJSON)
    //Pasar de JSON a objeto
    const objetoRecuperado= JSON.parse(textoJSON)
    console.log(objetoRecuperado)
    console.log(typeof objetoRecuperado)
    //Congelar obj y comprobar si cambia
    Object.freeze(libro)
    libro.titulo= "Mujercitas"
    console.log(libro)
}
