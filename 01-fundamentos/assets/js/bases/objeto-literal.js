let personaje={
    nombre:'Juan Diego',
    codeName:'Moreno',
    vivo:true,
    edad:19,
    coords:{
        lat:34.034,
        lng:-118-70
    },
    pelis:['Rocky', 'Narnia', 'Spiderman'],
    direccion:{
        zip:'10880, 90265',
        ubicacion:'California',
    },
    'ultima-pelicula':'No way home'
};

console.log(personaje);
console.log('Nombre ', personaje.nombre);
console.log('Nombre ', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Coors', personaje.coords.lat);

console.log('Pelis', personaje.pelis.length);
console.log('Ultima peli', personaje.pelis[personaje.pelis.length-1]);

const x='vivo';
console.log('vivo ',personaje[x]);

console.log('Ultima', personaje['ultima-pelicula']);

//

delete personaje.edad;
console.log(personaje);

const entriePares=Object.entries(personaje);
console.log(entriePares);