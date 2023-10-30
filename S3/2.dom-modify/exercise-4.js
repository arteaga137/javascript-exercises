// Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

// Crear el parrafo

const nuevoParrafo = document.createElement('p')

// agregar texto a parrafo
nuevoParrafo.textContent = 'Soy dinámico'

// agregar parrafo con texto al HTML
document.body.appendChild(nuevoParrafo)