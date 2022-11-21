import { buscarPersona as buscarPersonaCallback} from './js/callbacks';
import { buscarPersona } from './js/promesas';
import './styles.css';

const personaId1='pepe';
const personaId2='pedro';

buscarPersona();

// buscarPersona(personaId1, (err, persona1) => {

//     if(err){
//         return console.error(err);
//     }

//     buscarPersona(personaId2, (err, persona2) => {
//         if(err){
//             return console.error(err);
//         }
//         console.log(`Enviando a ${persona1.nombre} y ${persona2.nombre} a estudiar`);
//     });

// });
buscarPersona(personaId1).then(persona => {
    console.log(`Enviando a ${persona.nombre} al lugar`);
})