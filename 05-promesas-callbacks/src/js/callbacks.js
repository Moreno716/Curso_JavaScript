const personas= {
    pepe:{
        nombre:'Pepe',
        apellido:'Mora'
    },
    pedro:{
        nombre:'pedro',
        apellido:'Perez'
    }
}

export const buscarPersona= (id,callback) => { 

    const persona= personas[id];

    if(persona){
        callback(null, persona);
    }else{
        callback(`No existe persona con el id ${id}`);
    }

}