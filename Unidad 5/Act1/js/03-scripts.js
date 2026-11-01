/********************************
 ******MODIFICAR EL CSS **********
 *********************************/

 //PROPIEDAD STYLE
 console.log("-----Propiedad Style------");
 const encabezadoCSS = document.querySelector('h1');
 encabezadoCSS.style.backgroundColor = "red";
 encabezadoCSS.style.fontFamily = "Georgia";
 encabezadoCSS.style.textTransform ="upperCase"; 

console.log(encabezadoCSS.style.color);                         // ''  (no tiene estilo en línea)
console.log(encabezadoCSS.style.background);                     // ''  (no tiene estilo en línea)
console.log(getComputedStyle(encabezadoCSS).color);          // 'rgb(255, 255, 255)'
console.log(getComputedStyle(encabezadoCSS).backgroundColor); // 'rgb(255,255,0)
console.log(getComputedStyle(encabezadoCSS).fontSize);       // '48px'

 // Quitar un estilo concreto
encabezadoCSS.style.backgroundColor = '';
// Quitar todos los estilos en línea
encabezadoCSS.removeAttribute('style');

 //getAttribute - hasAttribute
 console.log("-----getAttribute / hasAttribute------");
 const h2Todos = document.querySelectorAll('h2');
 console.log(h2Todos);
 //Recorremos y mostramos solo los que tienen una clase asignada
 h2Todos.forEach(h2 => {
    if (h2.hasAttribute('class')){
        console.log(`El elemento: "${h2.textContent}", 
                tiene la clase: ${h2.getAttribute('class')}`);
    }
 }); 

//setAttribute
console.log("-----setAttribute ------");
const href = document.querySelector('a');
console.log(href);
//href.style.color = 'green';
//href.setAttribute("style","color: red;");

console.log("-------removeAttribute---------");
//removeAttribute
encabezadoCSS.removeAttribute("style");
encabezadoCSS.setAttribute('class','fondoAmarillo');
encabezadoCSS.setAttribute("style","color: green;");
//encabezadoCSS.setAttribute('class','format');

//encabezadoCSS.removeAttribute("class");

//cambiamos y quitamos atributos
const enlace = document.querySelector('.btn-mi-viaje');
//enlace.setAttribute('href', '/premium');
enlace.setAttribute('target', '_blank');
enlace.removeAttribute('target');

console.log("----classList -- className------");
 //AÑADIR Y BORRAR CLASES
 const card1 = document.querySelector('.card');
 console.log(card1.classList);
 console.log(card1.className);

 //card1.classList.add('nueva-clase', 'segunda-clase');
 card1.className = 'nueva-clase segunda-clase'
 console.log(card1.classList);
 console.log(card1.className);

 card1.classList.remove('nueva-clase', 'segunda-clase');
 console.log(card1.classList);
 console.log(card1.className);

 //encabezadoCSS.classList.add('format','fondoAmarillo');

 //---toggleAttibute
const hrefTodas = document.querySelectorAll('.navegacion a');
console.log(hrefTodas);

hrefTodas.forEach(element => {
    element.classList.toggle("fondoAmarillo");
});
/*
for(let i=1; i<=hrefTodas.length; i++){
    if (i === 1 || i === 3){
        hrefTodas[i].classList.toggle("fondoAmarillo");
    }

}
*/
