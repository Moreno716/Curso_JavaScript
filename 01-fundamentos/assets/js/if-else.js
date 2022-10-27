// const hoy=new Date();
// let dia=hoy.getDate();

// console.log({dia});

// if(dia===0){
//     console.log('Domigo');
// }else if(dia===1){
//     console.log('Lunes');

//     // if(dia==1){
//     //     console.log('Lunes');
//     // }else{
//     //     log('No es domingo ni lunes');
//     // }
// }else if(dia===2){
//     console.log('Martes');
// }else{
//     console.log('No es lunes, martes o domingo');
// }



dia=3;

//OBJETOS
const diasLetras = {
    0: ()=> 'Domingo - 0',
    1: ()=> 'Lunes - 1',
    2: ()=> 'Martes - 2',
    3: ()=> 'Miercoles - 3',
    4: ()=> 'Jueves - 4',
    5: ()=> 'Viernes - 5',
    6: ()=> 'Sabado - 6'
}
//ARREGLOS
diasLetras2=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

console.log(diasLetras[dia]() || 'Dia no valido');
console.log(diasLetras2[dia] || 'Dia no valido');
