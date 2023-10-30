// Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

// Crear el boton 
const button = document.createElement('button');

// añadir propiedades al boton
button.id = 'btnToClick';
button.textContent = 'Haz click';

// agregar boton al documento HTML
document.body.appendChild(button);

// agregar evento (eventListener)
button.addEventListener('click', function(evento) {
    // mostrar en consola la informacion del click
    console.log(`La informacion del evento es: ${evento}`);
});