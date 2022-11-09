class Persona{

    static _conteo=0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);
        console.log('Hola a todos, soy un método estático');
    }

    nombre='';
    codigo='';
    frase='';
    comida='';

    constructor(nombre='Sin nombre', codigo='Sin codigo', frase='Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida=comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const pedro = new Persona('Pedro', 'Profeta', 'Soy el profeta');

// pedro.quienSoy();
pedro.miFrase();

pedro.setComidaFavorita='El pie de cereza de la abuela';

// console.log(pedro.getComidaFavorita);
// console.log(pedro);

// Persona._conteo=2;
console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna='Hola Mundo';

console.log(Persona.propiedadExterna);
console.log(Persona);
