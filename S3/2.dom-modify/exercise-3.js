// Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

// Crear el nuevo Div
const nuevoDiv = document.createElement('div');
nuevoDiv.innerHTML = `<h1>Este es el div contenedor</h1>`

// Loop que crea y añade parrafos
for (i = 0; i <= 5; i++) {
    const para =  document.createElement('p');
    nuevoDiv.appendChild(para);
    para.textContent = `Parrafo ${i}`;
}

// insertar div en el body
document.body.appendChild(nuevoDiv);