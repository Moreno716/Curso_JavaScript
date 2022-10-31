const regresaTrue = () => {
    console.log('regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('regresa false');
    return false;
}

console.warn('not o negacion');
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse()); //true

console.warn('And'); //true si todos los valores son verdaderos
console.log(true&&true); //true
console.log(true&&false);//false

console.log('************');
console.log(regresaFalse()&&regresaTrue()); //false
console.log(regresaTrue()&&regresaFalse());//true

console.log('==== && ====');
regresaFalse() && regresaTrue();

console.log('condiciones', true&&true&&true&&false);//false

console.warn('OR'); //true
console.log(true || false);

console.log('condiciones', true||true||true||false);//true

console.log(regresaTrue() || regresaFalse());

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola mundo';
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5});

if (true||true||true||false) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}