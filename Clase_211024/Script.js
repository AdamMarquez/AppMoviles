//FUNCION FLECHA
function mifuncion(a, b){
    return a + b;

}

console.log (mifuncion (2, 3));

//Estructura de funcion flecha
let salu2 = () => {};

//1. ******************************//

let saludo = (nombre) => {
    return 'Saludos ' + nombre;

}

console.log (saludo ('Juan'));

//2. ******************************//
let saludar = nombre => 'Saludos ' + nombre;

console.log (saludar ('Juan'));

//3. ******************************//
let saludo1 = (nombre) =>{
    return 'Saludos ' + nombre;
}

console.log (saludo1 ('Juan'));

//4. ******************************//
let saludar1 = nombre => 'Saludos ' + nombre;

console.log (saludar ('Ramiro'));

//5. ***PASAR MULTIPLES PARAMETROS***************************//
let suma = (a, b) => a + b;
console.log (suma (5, 8));

//6. ***CREAR OBJETO EN FUNCION FLECHA***************************//
let obj = () => ({nombre: 'Roberto', edad: 20})

//Llamamos y accedemos a la propiedad
//Let Persona = obj().nombre;
console.log (obj().nombre);

//7. ***arreglos***//
let arrFunc = () => [1, 2, 3, 4, 5];

//accediendo a todo el array
console.log (arrFunc());

//accediendo al arreglo
console.log (arrFunc()[4]);