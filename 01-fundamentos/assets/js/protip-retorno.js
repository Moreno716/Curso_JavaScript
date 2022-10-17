const crearPersona=(nombre, apellido) => ({nombre,apellido});

const persona = crearPersona('Tony','Stark');
console.log(persona);


function imprimeArgumento(){
    console.log(arguments);
}

const imprimeArgumentos2=(edad,...arguments)=>{
    // console.log({edad,arguments});
    return arguments;
}

const [casado,vivo,nombre,saludo]=imprimeArgumentos2(10, true, false, 'Luis', 'Hola');
console.log({casado,vivo,nombre,saludo});

const {apellido: nuevoApellido}=crearPersona('Luis','Garcia');
console.log({nuevoApellido});


let juan={
    nombre:'Juan Diego',
    codeName:'Moreno',
    vivo:true,
    // edad:19,
    pelis:['Rocky', 'Narnia', 'Spiderman'],
};

// const imprimePropiedades=(personaje)=>{
//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);
//     console.log(personaje.pelis);
// }

const imprimePropiedades=({nombre,codeName,vivo,edad=16,pelis})=>{

    console.log({nombre}),
    console.log({codeName}),
    console.log({vivo}),
    console.log({edad}),
    console.log({pelis})
}

imprimePropiedades(juan);