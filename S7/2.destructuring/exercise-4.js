// En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.

const car = { name: "Mazda 6", itv: [2015, 2011, 2020] };

const { name, itv } = car;
const [year1, year2, year3] = car.itv;

console.log(`Este es la marca del coche: ${name}`);
console.log(`Estos son los años en que le toca pasar la itv: ${itv}`);
console.log(`Esta fue la primera itv que pasó: ${year1}`);
console.log(`Esta fue la segunda itv que pasó: ${year2}`);
console.log(`Esta fue la tercera itv que pasó: ${year3}`);
