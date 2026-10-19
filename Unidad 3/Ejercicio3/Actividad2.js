function herencia() {
    class persona {
        //variables
        static #contadorPersonas = 0
        #idPersona
        _nombre
        _apellido
        _edad

        //Constructor
        constructor(_nombre, _apellido, _edad) {
            //incrementar id y contador
            persona.#contadorPersonas++
            this.#idPersona = persona.#contadorPersonas

            this._nombre = _nombre
            this._apellido = _apellido
            this._edad = _edad
        }
        //Getters
        get idPersona() {
            return this.#idPersona
        }
        get nombre() {
            return this._nombre
        }
        get apellido() {
            return this._apellido
        }
        get edad() {
            return this._edad
        }
        //Setters
        set nombre(valor) {
            if (typeof valor === "string" && valor.trim() !== "") {
                this._nombre = valor.trim()
            } else {
                console.log("El nombre no es válido")
            }
        }
        set edad(valor) {
            if (typeof valor === "number" && valor >= 0 && valor <= 120) {
                this._edad = valor
            } else {
                console.log("La edad no es válida")
            }
        }
        set apellido(valor) {
            if (typeof valor === "string" && valor.trim() !== "") {
                this._apellido = valor.trim()
            } else {
                console.log("El apellido no es válido")
            }
        }
        //Nombre completo
        get nombreCompleto() {
            return this._nombre + " " + this._apellido
        }
        //Total de personas
        static get totalPersonas() {
            return persona.#contadorPersonas
        }
        //Crear persona desde objeto
        static crearDesdeObjeto({ nombre, apellido, edad }) {
            return new persona(nombre, apellido, edad)
        }
        //to String
        toString() {
            return `Nombre: ${this._nombre} 
            Apellidos: ${this._apellido} 
            Edad: ${this._edad}`
        }
    }

    class empleado extends persona {
        //Variables
        static #contadorEmpleados = 0
        #idEmpleado
        _sueldo
        //Constructor
        constructor(nombre, apellido, edad, sueldo) {
            super(nombre, apellido, edad)
            empleado.#contadorEmpleados++
            this.#idEmpleado = empleado.#contadorEmpleados
            this.sueldo = sueldo
        }
        //getters
        get idEmpleado() {
            return this.#idEmpleado
        }
        get sueldo() {
            return this._sueldo
        }
        //setter
        set sueldo(valor) {
            if (typeof valor === "number" && valor > 0) {
                this._sueldo = valor
            } else {
                console.log("El sueldo no es válido")
            }
        }
        //sueldoAnual
        sueldoAnual() {
            return this.sueldo * 14
        }
        //Total de empleados
        static get totalEmpleados() {
            return empleado.#contadorEmpleados
        }
        //To String
        toString() {
            return super.toString() + ` 
            Sueldo: ${this.sueldo}`
        }
    }

    class cliente extends persona {
        //variables
        static #contadorClientes = 0
        static IMPORTE_VIP = 1000

        #idCliente
        #compras = []
        #fechaRegistro

        //constructor
        constructor(nombre, apellido, edad, fechaRegistro = new Date()) {
            super(nombre, apellido, edad)
            cliente.#contadorClientes++
            this.#idCliente = cliente.#contadorClientes
            this.#fechaRegistro = fechaRegistro
        }
        //Getters
        get idCliente() {
            return this.#idCliente
        }
        get fechaRegistro() {
            return this.#fechaRegistro
        }

        //setter
        set fechaRegistro(valor) {
            if (valor instanceof Date && !isNaN(valor.getTime())) {
                this.#fechaRegistro = valor
            } else {
                console.log("La fecha de registro no es válida")
            }
        }

        //Registrar compra
        registrarCompra(importe) {
            if (typeof importe === "number" && importe > 0) {
                this.#compras.push(importe)
            }
        }

        //total gastado
        get totalGastado() {
            let total = 0

            for (let importe of this.#compras) {
                total = total + importe
            }

            return total
        }

        //Es vip?
        get esVIP() {
            return this.totalGastado >= cliente.IMPORTE_VIP
        }

        //total cleintes
        static get totalClientes() {
            return cliente.#contadorClientes
        }

        //Tostring clientes
        toString() {
            return super.toString() +
                ` Fecha de registro: ${this.#fechaRegistro} Total gastado: 
                ${this.totalGastado} 
                ${this.esVIP ? " VIP" : ""}`
        }
    }

    let persona1 = new persona("Lucia", "Martin", 34)

    let persona2 = new empleado("Ana", "Lopez", 29, 2000)

    let persona3 = new cliente("David", "Gomez", 45)

    let persona4 = persona.crearDesdeObjeto({
        nombre: "Jorge",
        apellido: "Sanz",
        edad: 52
    })

    let persona5 = new empleado("Carlos", "Ruiz", 41, 2500)

    let persona6 = new cliente("Elena", "Perez", 23)


    persona3.registrarCompra(500)
    persona3.registrarCompra(600)
    persona3.registrarCompra(-100) // incorrecta

    persona6.registrarCompra(200)
    persona6.registrarCompra(300)

    let personas = [persona1, persona2, persona3, persona4, persona5, persona6]

    personas.forEach(persona => {
        console.log(persona.toString())
    })

    console.log(`---Totales ---
        Personas: ${persona.totalPersonas} | Empleados: ${empleado.totalEmpleados} | Clientes: ${cliente.totalClientes}`)

    let contadorPersonas = 0
    let contadorEmpleados = 0
    let contadorClientes = 0

    for (let tipo of personas) {

        if (tipo instanceof empleado) {
            contadorEmpleados++
        } else if (tipo instanceof cliente) {
            contadorClientes++
        } else if (tipo instanceof persona) {
            contadorPersonas++
        }
    }

    console.log(`---intaceof ---
        Personas: ${contadorPersonas}
        Empleados: ${contadorEmpleados}
        Clientes: ${contadorClientes}`)

    console.log("---constructor.name---")
    console.log(persona1.constructor.name)

    console.log("---ID antes y despues--- \n ID original:", persona2.idPersona)
    persona2.idPersona = 100
    console.log("ID después:", persona2.idPersona)

    console.log("---Edad antes y despues--- \n Edad original:", persona1.edad)
    persona1.edad = 150
    console.log("Edad después:", persona1.edad)


    const { nombre, sueldo } = persona5
    console.log(`---Destructuring---
        Nombre: ${nombre}
        Sueldo: ${sueldo}`)

    console.log("---Empleados ordenados por sueldo---")
    personas.filter(persona => persona instanceof empleado).sort((a, b) => b.sueldo - a.sueldo).forEach(persona => {
        console.log(persona.toString())
    })

    console.log("---Clientes VIP---")
    personas.filter(cliente => cliente.esVIP).forEach(persona => {
        console.log(persona.toString())
    })
}