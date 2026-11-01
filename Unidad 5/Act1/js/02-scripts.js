/*******************************************
 ******MODIFICACION DE texto e imágenes*****
 *******************************************/

//Modificar texto
console.log("------Modificar Texto-------");
//Seleccionamos el elemento: h1 es hijo del div con clase .contenido-hero
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

//Vemos cómo se recoge el texto
console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);

//Modificamos el texto
document.querySelector('h1').innerText = "Prepara tus vacaciones con innerText";
encabezado.textContent = "Busca un HOSPEDAJE con textContent";
encabezado.innerHTML = "<h1>Encuentra <strong> alojamiento </strong> con innerHTML</h1>";

//MODIFICAR IMAGENES 
const imagen = document.querySelector('.card img');
console.log(document.querySelector('.card'))
//Le cambiamos el valor al atributo src y alt
imagen.src = 'img/hacer2.jpg';
imagen.alt = "Último concierto de la temporada"

