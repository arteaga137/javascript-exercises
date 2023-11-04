// En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. Cuidado, no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', genre: ['action', 'zombie', 'survival'], year: 2020}

const {title, genre, year } = game;
console.log(`Este es el titulo del juego: ${title}`);
console.log(`Este es el genero del juego ${genre}`);
console.log(`Este es el año de lanzamiento del juego ${year}`);