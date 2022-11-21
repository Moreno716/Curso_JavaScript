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

export const buscarPersona = (id) => {
    const persona=personas[id]

    return new Promise(( resolve, reject) => {

        if(persona){
            resolve(persona)
        }else{
            reject(`No existe una persona con id ${persona}`)
        }

    });
}