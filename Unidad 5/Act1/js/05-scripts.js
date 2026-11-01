/*********************************************
 ******************CREAR HTML ****************
 *********************************************/
console.log("-----createElement-----")
//Creamos un enlace --> podría ser un div, img, p....
const newEnlace = document.createElement('a');
newEnlace.textContent = 'Nuevo Enlace';
newEnlace.href = '#';
console.log(newEnlace);

const newEnlace2 = document.createElement('a');
newEnlace2.textContent = 'Otro Enlace';
newEnlace2.href = '#';
console.log(newEnlace2);

console.log("-----insertar-----")
//Lo incluimos en el DOM
//Seleccionamos la navegación
const nav = document.querySelector('.navegacion');
//nav.append(newEnlace, newEnlace2);
//nav.appendChild(newEnlace);
//nav.prepend(newEnlace, newEnlace2);

//nav.before(newEnlace, newEnlace2);
nav.children[2].before(newEnlace, newEnlace2);
//nav.children[3].after(newEnlace);
//nav.insertBefore(newEnlace, nav.children[1]);


const otroEnlace = document.createElement('a');
otroEnlace.textContent = 'Otro';
otroEnlace.href = '#';
navegacion3.insertBefore(otroEnlace, navegacion3.children[3]);


//---------CREAR ELEMENTOS CON HIJOS--------------
//Creamos un card
console.log("---------crear un card------------")
//El elemento tiene una imagen y tres párrafos
//Creamos los tres párrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'CONCIERTO';
parrafo1.classList.add('categoria', 'concierto');
console.log(parrafo1);

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Festival de Música Rock';
parrafo2.classList.add('titulo');
console.log(parrafo2);

const parrafo3 = document.createElement('p');
parrafo3.textContent = '80€ por persona';
parrafo3.classList.add('precio');
console.log(parrafo3);

//Crear div con la clase de info
const infor = document.createElement('div');
info.classList.add('info');
console.log(infor);

//Añadimos como hijos los párrafos al div
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);
console.log(info.children);

//Creamos la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
console.log(imagen);

//Creamos el div con class 'card'
const divCard = document.createElement('div');
divCard.classList.add('card');
console.log(divCard);

//Añadimos la imagen y la info con los 3p a cardDiv
divCard.appendChild(imagen);
divCard.appendChild(info);
console.log(divCard.children);

//lo asignamos al primer card del proyecto
const padreCard1 = document.querySelector('.contenedor-cards');
console.log(padreCard1);
padreCard1.appendChild(divCard);
padreCard1.insertBefore(divCard, padreCard1.children[0]);

/*********************************************
 *********ELIMINAR ELEMENTOS DEL DOM**********
 *********************************************/

//Eliminamos desde la referncia del propio elemento
const primerEnlace = document.querySelector('a');
console.log(primerEnlace);
primerEnlace.remove();

//Eliminamos desde la referencia del padre
const navegacion2 = document.querySelector('.navegacion');
console.log(navegacion2.children);
navegacion2.removeChild(navegacion2.children[2]);



/*********************************************
 *********ESTRUCTURA COMPLETA CARD **********
 *********************************************/

// 1. Los tres párrafos
const categoria = document.createElement('p');
categoria.classList.add('categoria', 'concierto');
categoria.textContent = 'Concierto';

const titulo = document.createElement('p');
titulo.classList.add('titulo');
titulo.textContent = 'Festival de Música Rock';

const precio = document.createElement('p');
precio.classList.add('precio');
precio.textContent = '80 € por persona';

// 2. El div.info que los contiene
const info = document.createElement('div');
info.classList.add('info');
info.append(categoria, titulo, precio);

// 3. La imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Público en un festival de rock';

// 4. La card
const card = document.createElement('div');
card.classList.add('card');
card.append(imagen, info);

// 5. Insertarla como primera card de la sección
document.querySelector('.contenedor-cards').prepend(card);