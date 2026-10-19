function random() {
    const numeros = []
    for (let i = 0; i < 20; i++) {
        numeros[i] = parseInt(Math.random() * 11)
    }
    //-----a. Mostramos el array inicial con los 20 elementos.-----
    console.log("---Array inicial--- \n " + numeros)
    //-----b. Separamos los elementos en dos arrays, uno de pares y otro de impares, manteniendo el orden original.-----
    const pares = []
    const impares = []
    for (let i = 0; i < 20; i++) {
        numeros[i] % 2 === 0 ? pares[pares.length] = numeros[i] : impares[impares.length] = numeros[i]
    }
    console.log("---Array con numeros pares--- \n " + pares)
    console.log("---Array con numeros impares--- \n " + impares)

    //-----c. En el array de los pares, eliminaremos el primer y último elemento y en el de los impares los elementos centrales (si el tamaño del array es par, eliminamos dos elementos y si es impar, eliminamos el elemento central).-----
    pares.shift()
    pares.pop()
    console.log("---Array con numeros pares sin 1º y último--- \n " + pares)
    if (impares.length % 2 === 0) {
        let medio = parseInt(impares.length / 2)
        impares.splice(medio - 1, 2)
    } else {
        let medio = parseInt(impares.length / 2)
        impares.splice(medio, 1)
    }
    console.log("---Array con numeros impares sin elementos centrales--- \n " + impares)

    //-----d. En cada array (pares e impares), le añadimos al final la suma de sus elementos-----
    let sumaPares = 0
    for (let i = 0; i < pares.length; i++) {
        sumaPares += pares[i]
    }
    let sumaInpares = 0
    for (let i = 0; i < impares.length; i++) {
        sumaInpares += impares[i]
    }
    pares.push(sumaPares)
    impares.push(sumaInpares)
    console.log("---Array con numeros pares con la suma de sus elementos al final--- \n " + pares)
    console.log("---Array con numeros impares con la suma de sus elementos al final--- \n " + impares)

    //-----e. Para cada array (pares e impares), le añadimos al inicio la media de sus elementos, sin contar la suma añadida en el paso anterior -----
    let mediaPares = parseInt(sumaPares / 2)
    let mediaImpares = parseInt(sumaInpares / 2)
    pares.unshift(mediaPares)
    impares.unshift(mediaImpares)
    console.log("---Array con numeros pares con la media de sus elementos al inicio--- \n " + pares)
    console.log("---Array con numeros impares con la media de sus elementos al inicio--- \n " + impares)

    //-----f. En cada array (pares e impares), multiplicaremos cada elemento por la media hallada en el punto anterior, es decir, por el valor del primer elemento del array (también la media y la suma)-----
    for (let i = 0; i < pares.length; i++) {
        pares[i] = pares[i] * mediaPares
    }
    for (let i = 0; i < impares.length; i++) {
        impares[i] = impares[i] * mediaImpares
    }
    console.log("---Array con numeros pares con los elementos multiplicados por su media--- \n " + pares)
    console.log("---Array con numeros impares con los elementos multiplicados por su media--- \n " + impares)

    //Arrays juntos
    const paresEImpares = pares.concat(impares)
    console.log("---Array formado por los dos arrays anteriores(incluida sus operaciones)" + paresEImpares)

    //Array ordenado
    paresEImpares.sort((a, b ) => a-b);
    console.log("Array final ordenado" + paresEImpares)

    //h. Mostraremos el array final eliminando los elementos repetidos.
    const sinRepetidos = Array.from(new Set(paresEImpares))
    console.log("Array final ordenado sin repetidos" + sinRepetidos)


}