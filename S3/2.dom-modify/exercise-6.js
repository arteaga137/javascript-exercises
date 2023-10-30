// Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// Crear lista
const lista = document.createElement('ul');

// Crear loop que tome cada elemento del array, y lo agregue a la lista como li
apps.forEach(app => {
    // crear un item de la lista
    let listItem = document.createElement('li');
    // escribir la red social dentro del li
    listItem.textContent = app;
    // añadir el li al ul
    lista.appendChild(listItem);
});

// añadir lista completa al HTML
document.body.appendChild(lista)