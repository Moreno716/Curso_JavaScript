let juegos=['Mario', 'GTA', 'Fifa', 'Valorant'];
console.log('Largo: ', juegos.length);

let primero=juegos[0];
let ultimo=juegos[juegos.length-1];

console.log(primero, ultimo);

juegos.forEach((elemeto, indice, arr)=>{
    console.log({elemeto, indice, arr});
});

let nuevaLongitud=juegos.push('Sonic');
console.log({nuevaLongitud,juegos});

juegos.unshift('Def Jam');

let borrar=juegos.pop()
console.log(borrar, juegos);


let pos=1;

console.log({juegos})
let juegoBorrado=juegos.splice(pos,2);
console.log({juegoBorrado, juegos});

let fifaIndex=juegos.indexOf('Fifa');
console.log({fifaIndex});