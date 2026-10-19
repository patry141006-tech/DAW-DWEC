function OperacionEntreConjuntos() {
    // Letras para poder generar conjuntos aleatorios sin ñ
    let letras = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"

    // El usuario dice si quiere letras o numeros
    let eleccion = prompt("¿Con que quieres trabajar? Escribe L (letras) o N (numeros)");
    //Si el usuario cancela se avisa y sale
    if (eleccion === null) {
        alert("Ha cancelado, intentelo mas tarde")
        return;
    }
    //Combertimos a mayusculas
    eleccion = eleccion.toUpperCase();
    while (eleccion !== "L" && eleccion !== "N") {
        eleccion = prompt("¿Con que quieres trabajar? Escribe L (letras) o N (numeros)");
        //Si el usuario cancela se avisa y sale

        if (eleccion === null) {
            alert("Has cancelado. Inténtalo más tarde.");
            return;
        }

        eleccion = eleccion.toUpperCase();
    }
    // Creamos cuatro conjuntos vacíos: dos para números y dos para letras.
    let conjuntoNumeros1 = new Set();
    let conjuntoNumeros2 = new Set();

    let conjuntoLetras1 = new Set()
    let conjuntoLetras2 = new Set()
    // Si el usuario ha elegido números
    if (eleccion === "N") {
        //Generamos números aleatorios hasta tener 10 números distintos
        while (conjuntoNumeros1.size < 10) {
            let numRandom = Math.floor(Math.random() * 21);
            conjuntoNumeros1.add(numRandom);
        }
        //Se repite
        while (conjuntoNumeros2.size < 10) {
            let numRandom = Math.floor(Math.random() * 21);
            conjuntoNumeros2.add(numRandom);
        }
        operaciones(conjuntoNumeros1, conjuntoNumeros2)

    } else {
        //Generamos números aleatorios para elegir una posicion y lo añadimos al conjutno
        while (conjuntoLetras1.size < 10) {
            let posRandom = Math.floor(Math.random() * letras.length);
            conjuntoLetras1.add(letras.charAt(posRandom));
        }

        while (conjuntoLetras2.size < 10) {
            let posRandom = Math.floor(Math.random() * letras.length);
            conjuntoLetras2.add(letras.charAt(posRandom));
        }

        operaciones(conjuntoLetras1, conjuntoLetras2)

    }

}

function operaciones(conjunto1, conjunto2) {
    console.log("OPERACIONES MANUALES")
    // Mostramos los conjuntos originales A y B
    console.log("Conjunto A:", conjunto1);
    console.log("Conjunto B:", conjunto2);
    //Juntamos los conjuntos en un array y lo pasamos a set para que no se repitan
    const arrayUnion = [...conjunto1, ...conjunto2];
    const unionFinal = new Set(arrayUnion);
    console.log("Union (A U B): ", unionFinal)

    // Recorremos A y comprobamos si cada elemento también está en B
    const interseccion = new Set()
    for (const elemento of conjunto1) {
        if (conjunto2.has(elemento)) {
            interseccion.add(elemento)
        }
    }

    console.log("Interseccion (A n B): ", interseccion)

    //guardamos los elementos que están en A, pero no en B
    const diferenciaAyB = new Set()
    for (const elemento of conjunto1) {
        if (!conjunto2.has(elemento)) {
            diferenciaAyB.add(elemento)
        }
    }

    console.log("Diferencia (A - B): ", diferenciaAyB);

    //guardamos los elementos que están en B, pero no en A
    const diferenciaByA = new Set()
    for (const elemento of conjunto2) {
        if (!conjunto1.has(elemento)) {
            diferenciaByA.add(elemento)
        }
    }

    console.log("Diferencia (B - A): ", diferenciaByA);


    console.log("OPERACIONES CON METODOS")
    console.log("Con operacion Union:", conjunto1.union(conjunto2))
    console.log("Con operacion Interseccion:", conjunto1.intersection(conjunto2))
    console.log("Con operacion Diferencia A-B:", conjunto1.difference(conjunto2))
    console.log("Con operacion Diferencia B-A:", conjunto2.difference(conjunto1))
}
