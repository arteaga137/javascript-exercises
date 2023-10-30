// Inserta dinamicamente en un html un div que contenga una p con javascript.

// Crear el div y el parrafo nuevos
const nuevoDiv = document.createElement('div');
const nuevoPara = document.createElement('p');

// agregar div a body
document.body.appendChild(nuevoDiv);
// agregar parrafo a nuevoDiv
nuevoDiv.appendChild(nuevoPara);