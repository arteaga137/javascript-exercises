// FUNCION PARA TESTS
const test = (resultado, functTested) =>
    Array.isArray(resultado)
        ? JSON.stringify(resultado) === JSON.stringify(functTested)
            ? 'test OK'
            : 'test KO'
        : resultado === functTested
            ? 'test OK'
            : 'test KO';

///////////////////////////////////////////////////////////////////////////

/* 
1. Crea una función que devuelva el numero de vocales que hay en un string.
*/
const contarVocales = (str) => { 
    // Paso el string a minusculas para realizar solo una comparacion en vez de comparar tanto en minusculas como mayusculas
    const vocalesEnMinusculas = str.toLowerCase();
    // Defino una constante que establezca cuales son las vocales
    const vocales = 'aeiou';
    // Establezco un contador para iterar por cada elemento del string
    let contador = 0;
    // Realizo un bucle forof para iterar por cada letra si contiene alguna vocal
    for (const letra of vocalesEnMinusculas) {
        // Al iterar revisar si la letra es una vocal
        if (vocales.includes(letra)) {
            contador++;
        }
    }
    // devuelvo el conteo total de vocales
    return contador;
};

// test ejercicio 1.
console.log('1A. contarVocales', test(4, contarVocales('upgrade hub')));
console.log('1B. contarVocales', test(5, contarVocales('abracadabra')));

/* 
2. Crea una función que devuelva la suma de los dos numeros positivos más pequeños de un array de numeros.

La función tiene que descartar aquellos que sean negativos o decimales
*/

const dosNumerosMenores = (numbers) => {
    // Filtro los numeros negativos y decimales
    const numerosEnterosPositivos = numbers.filter(num => num >= 0 && Number.isInteger(num));
    // organizo el array en orden ascendente
    numerosEnterosPositivos.sort((a, b) => a - b);
    // devuelvo la suma de los dos primeros elementos del array ordenado
    return numerosEnterosPositivos[0] + numerosEnterosPositivos[1];
}

// test ejercicio 2
console.log('2A. dosNumerosMenores', test(6, dosNumerosMenores([1.5, 28, 4, 2, -43])));
console.log('2B. dosNumerosMenores', test(16, dosNumerosMenores([52, 7.6, 14, 12, 4, -1])));

/* 
3. Crea dos funciones para encriptar y desencriptar un mensaje.
la función 1 convertirá los caracteres en su número ascii equivalente y los guardará en un array
usa el método "Character".charCodeAt(0);
la funciín 2 convertirá un array de números ascii en letras y devolverá un string.
usa el método String.fromCharCode(numero);
*/

const encriptar = (str) => {
    // creo un array vacio para guardar los valores ASCII
    const asciiArray = [];
    // itero sobre cada letra del string con un loop (forof?)
    for (let letra of str) {
        // añado al array de valores ascii el valor ascii de cada letra iterada
        asciiArray.push(letra.charCodeAt(0)); //Uso el index 0, porque al iterar cada letra siempre paso una sola letra (quizas es mas facil usar un contador para pasar por cada letra?)
    }
    // devuelvo el valor del array con los valores ascii (mensaje encriptado)
    return asciiArray;
   };

const desencriptar = (array) => {
    // Crear una variable que guarde el mensaje desencriptado y poderlo imprimir en consola
    let mensajeDesencriptado = '';
    // iterar por cada valor del array de valores ascii para desencriptarlos
    for (let ascii of array) {
        // convertir el valor ascii a una letra normal y añadir la letra a la variable
        mensajeDesencriptado += String.fromCharCode(ascii);
    }
    return mensajeDesencriptado;
    };


console.log(encriptar('Agarra la gata de la azotea'))

console.log('3A. encriptar', test([
    65, 103, 97, 114, 114, 97, 32,
    108, 97, 32, 103, 97, 116, 97,
    32, 100, 101, 32, 108, 97, 32,
    97, 122, 111, 116, 101, 97
], encriptar('Agarra la gata de la azotea')));

console.log('3B. desencriptar', test(
    'Agarra la gata de la azotea',
    desencriptar([
        65, 103, 97, 114, 114, 97, 32,
        108, 97, 32, 103, 97, 116, 97,
        32, 100, 101, 32, 108, 97, 32,
        97, 122, 111, 116, 101, 97
    ])));


/* 
4. Crea una funcion que, dados 3 numeros, la funcion debe decir si es posible 
construir un triangulo cuyos lados sea la longitud dada por los números.

PISTA: en todo triangulo la suma de los dos lados más cortos tiene que ser mayor
al lado mas largo. a + b > c;
*/


const esTriangulo = (a, b, c) => {
    // usar un if para validar el teorema de la inecualidad del triangulo
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        // si cumple las condiciones, devuelvo true
        return true
        // Si no las cumple, devuelvo falso
    } else return false
   };

console.log('4A. esTriangulo', test(false, esTriangulo(1.5, 4, 6)));
console.log('4B. esTriangulo', test(true, esTriangulo(3, 7, 8)));


/* 
5. Calendario Marciano.

Un día en Marte tiene una duración de 24,6 horas terrestres.
Un año en Marte tiene una duración de 867 días marcianos.

Si consideramos que los calendarios Occidental Terrestre y Marciano tienen el punto de origen
en el 1 de enero del año 1... 


-> Crea una función que convierta una fecha terrestre a fecha marciana.

El parametro fecha debe expresarse con el siguiente formato: 'DD-MM-AAAA', tanto en el input como
en el return.

Para simplificar, asumiremos que:
- Todos los eventos tienen lugar a las 0:00 AM 
- Todos los meses tienen 30 días en la tierra y 72 en marte. 
- No hay años bisiestos

*/

const calendarioMarciano = (fecha) => {
    // Desestructuro el string de la fecha
    const [dia, mes, anno] = fecha.split('-').map(num => parseInt(num));
    //  Calculo el total de dias terrestres desde el 1 de enero del año 1 a la fecha del input
    const totalDiasTerrestres = (anno - 1) * 360 + (mes - 1) * 30 + dia;
    // convertir dias terrestres a dias marcianos
    const diasMarcianos = totalDiasTerrestres / 24.6;
    // Calcular el año, mes y dia marcianos
    const annoMarciano = Math.floor(diasMarcianos / 864) + 1; // calculo el año marciano, elimino los decimales, y agrego 1 porque no existe el año 1
    // const restoDias = diasMarcianos % 864;
    const mesMarciano = Math.floor(diasMarcianos / 72) + 1; // calculo el mes marciano eliminando los decimales, y agrego 1 porque no existe el mes 0
    const diaMarciano = Math.round(diasMarcianos % 72) + 1; // calculo el dia redondeando los decimales al numero entero mas cercano, y agrego 1 ya que no existe el dia 0
    
    // Devuelvo la fecha marciana. Uso ternatias para revisar si el valor del dia y del mes, es un solo digito o dos. Si es un solo digito añado el 0 a la izquierda
    return `${diaMarciano <10 ? '0' : ''}${diaMarciano}-${mesMarciano < 10 ? '0' : ''}${mesMarciano}-${annoMarciano}`;
} 
console.log(calendarioMarciano('25-06-12'));
console.log('5A. calendarioMarciano', test('23-06-196', calendarioMarciano('4-10-476')));
console.log('5c. calendarioMarciano', test('28-09-811', calendarioMarciano('20-07-1969')));
console.log('5B. calendarioMarciano', test('04-02-834', calendarioMarciano('18-11-2023')));

