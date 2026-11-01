///////HTMLCollection / NodeList
// HTML de ejemplo:
// <div id="contenedor">
//   <p class="parrafo">Texto 1</p>
//   <p class="parrafo">Texto 2</p>
// </div>
/*
// 1. Usando getElementsByClassName()
const parrafosCollection = document.querySelectorAll('.parrafo');
console.log(parrafosCollection); // HTMLCollection [ p.parrafo, p.parrafo ]

// 2. Usando la propiedad .children
const contenedor = document.querySelector('#contenedor');
const hijos = contenedor.children; 
console.log(hijos); // HTMLCollection [ p.parrafo, p.parrafo ]

// Es "vivo": si agregas un <p> nuevo al DOM, parrafosCollection se actualiza solo.
*/
// HTML de ejemplo:
// <div id="contenedor">
//   <p class="parrafo">Texto 1</p>
//   <p class="parrafo">Texto 2</p>
// </div>
/*
// 1. Usando querySelectorAll() (Estático)
const parrafosList = document.querySelectorAll('.parrafo');
console.log(parrafosList); // NodeList [ p.parrafo, p.parrafo ]

// 2. Usando .childNodes (Incluye saltos de línea/espacios como nodos de texto)
const contenedor = document.getElementById('contenedor');
const nodosHijos = contenedor.childNodes; 
console.log(nodosHijos); // NodeList(5) [ #text, p.parrafo, #text, p.parrafo, #text ]

*/






/********************************
 ******SELECCIÓN DE ELEMENTOS*****
 *********************************/


//getElementsByClassName --> HTMLCollection con todos los elementos de la clase
console.log("-----getElementsByClassName-------");
const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor);
//lo podemos recorrer
for (let i = 0;i <= contenedor.length-1; i++){
    console.log(contenedor[i]);
}

//getElementsByTagName --> HTMLCollection con todos los elementos de la etiqueta
console.log("--------getElementsByTagName-------");
const parrafosTodos = document.getElementsByTagName('p');
console.log(parrafosTodos);

for(let elemento of parrafosTodos){
    console.log(elemento.innerHTML);//mostramos su texto
}
/*forEach da ERROR
parrafosTodos.forEach(element => {
    console.log(element);
    }
);
*/

//getElementById --> el 1º elemento que tenga la id
console.log("-----getElementById-------");
const formulario = document.getElementById('formulario');
console.log(formulario);



//querySelector --> selecciona los elementos con identificador de CSS
//Ejemplos con clases
console.log("-----querySelector-------");
// = getElementsByClassName
const card = document.querySelector('.card');
console.log(card);

//Seleccion de elementos hijos --> 
const premium = document.querySelector('section.hacer .premium');
console.log(premium);
const premiumInfo = document.querySelector('.premium .info');
console.log(premiumInfo);
const enlaceInfo = document.querySelector('.premium .info .btn-mi-viaje');
console.log(enlaceInfo);

console.log("****pseudoclases*****")
//Seleccion de un elemento entre varios iguales.
const primerCard = document.querySelector('section.hospedaje div.card:first-of-type');
console.log(primerCard);
const primerCardChild = document.querySelector('section.hospedaje div.card:first-child');
console.log(primerCardChild);
const segunCard = document.querySelector('section.hospedaje div.card:nth-child(2)');
console.log(segunCard);
const tercerCard = document.querySelector('section.hospedaje div.card:last-of-type');
console.log(tercerCard);
const tercerCardChild = document.querySelector('section.hospedaje div.card:last-child');
console.log(tercerCardChild);

//querySelector con id
const formularioQuery = document.querySelector('.contenido-hero #formulario');
console.log(formularioQuery);

//querySelector con etiquetas
console.log("---------querySelector por etiqueta---------");
const navegacion = document.querySelector('nav');
console.log(navegacion);
const navVender = navegacion.firstElementChild.innerText;
console.log(navVender);
const navAyuda = navegacion.querySelector(':scope > :nth-child(2)').innerText;
console.log(navAyuda)
const navRegistro = navegacion.children[2].innerText;
console.log(navRegistro)
const ultNav = navegacion.lastElementChild.innerText;
console.log(ultNav);


console.log("-------querySelectorAll------");
//querySelectorAll --> como querySelector pero devuelve todos
const cardTodos = document.querySelectorAll('.card');
console.log(cardTodos);
console.log(cardTodos.length) //15

//podemos recorrer el NodeLIst
cardTodos.forEach(card => console.log (card))
for (let card of cardTodos) console.log(card); //mismo resultado
console.log(cardTodos[3].innerText) //texto de la cuarta card
console.log(cardTodos[3].innerHTML) //HTML de la cuarta card


//convertimos un NodeList en array
const titulos = Array.from(document.querySelectorAll('.card .titulo'))
                    .map(p => p.textContent);
console.log (titulos)                    
                        
                    

