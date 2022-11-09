
const juan={
    nombre:'Juan Diego',
    edad:19,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const pepe={
    nombre:'Pepe',
    edad:16,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const juliana={
    nombre:'Juliana',
    edad:21,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// juan.imprimir();

function Persona( nombre, edad ){
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 18);
const pedro = new Persona('Pedro', 20);
console.log(maria);
maria.imprimir();
pedro.imprimir();