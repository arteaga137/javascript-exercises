numeros = [1, 2, 3, 4, 5, 6];

function sumar(numeros) {
    // seguridad
    if (numeros.length == 0) {
        return 'el array números no es válidos';
    }
    // datos crudos
    let suma = 0;
    // lógica
    numeros.forEach(numero => {
        if (typeof (numero) != 'number') {
            return;
        }
        suma += numero;
    });
    // dato modificado
    return suma;
}

//console.log(sumar(numeros));
const mascotas = [
    {
        "nombre": "Lucia",
        "tipo": "dog",
        "edad": 2,
        "raza": "Parakeet",
        "propietario": ["Lucia Leggis", 'pepe']
    }, {
        "nombre": "Faulkner",
        "tipo": "cat",
        "edad": 1,
        "raza": "Labrador Retriever",
        "propietario": ["Faulkner Rickets", 'maría']
    }, {
        "nombre": "Pepita",
        "tipo": "bird",
        "edad": 12,
        "raza": "Holland Lop",
        "propietario": ["Pepita Eble", 'alba']
    }
];

const contactos = [
    { nombre: 'Lucia Leggis', telefono: '666444333' },
    { nombre: 'Faulkner Rickets', telefono: '123243546' },
    { nombre: 'Pepita Eble', telefono: '444445666767' },
]


const llamadas = new Array();

mascotas.forEach(mascota => { // 3
    let nombre = mascota.propietario;
    nombre.forEach(nom => { // 2
        contactos.forEach(contacto => { // 3
            let persona = nom;
            if (persona == nom) {
                if (contactos.indexOf(contacto) == llamadas.length) {
                    llamadas.push(contacto);
                }
            }
        });
    });
});

console.log(llamadas);



const lucia = {
    "nombre": "Lucia",
    "tipo": "dog",
    "edad": 2,
    "raza": "Parakeet",
    "propietario": [
        { nombre: "Lucia Leggis", telefono: 333333 },
        { nombre: "Maria Leggis", telefono: 2222222 }
    ],
}

let propietarios = lucia.propietario[0].nombre;




