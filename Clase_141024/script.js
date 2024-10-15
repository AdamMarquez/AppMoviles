//alert("hola");
//FUNCIONES
/*01
function hello(){
    console.log('Hola Js');
    console.log('Hola html');
    console.log('Hola css');

}*/


//retorno de una funcion

/*02

function hello(){

    return "Hola Js";

}

const result = hello();
console.log(result);

*/

/*03
function hello(){

    return{};
}

console.log('hello()');
*/

/*04
function hello(){
    return{
        nombre: 'Raul'
    }
}

console.log(hello());
*/

//funcion que retorna otra funcion
/*05
function hello(){
     return function(){
        return 'Hola JS'

     }   
}

console.log(hello()());
*/

//===============USO DE PARAMETROS Y FUNCIONES===============//
/*06
function hellpconJS(name){
    return 'Hola ' + name
}

console.log('Adam');
console.log('Raul');
console.log('Reyes');
console.log('Roberto');
console.log('Rorro');

*/

//pasar mas de un parametro a la funcion
/*07
function hellpconJS(x,y){
    return x * y;
}

console.log(hellpconJS(10,20));
console.log(hellpconJS(10,80));
*/

//Control de erroes de parametros
/*08
function hellpconJS(x, y = 0){
    return x * y;
}

console.log(hellpconJS(10));
*/

//===OBJETOS===
const user = {
    nombre : 'Adam',
    ApellidoM : 'Rodriguez',
    Edad : 18,
    EdoCivil : 'Soltero',
    domicilio : {
        ciudad : 'CDMX', 
        calle : 'Industria',
        numero : 102070
    },
    amigos : ['Leonardo', 'Zetina', 'Emilio', 'Andre'],
    activo : true,
    sendMensaje : function(){
        return 'enviado msj'
    }
}

//alert, Ciudad, calle, numero...
//consola, los amigos
//alert (Activo o dado de baja)
//consola nombre, apellidos, estado civil....!!
//alert(estado del mensaje)

alert(alert(user.domicilio.ciudad), alert(user.domicilio.calle), alert(user.domicilio.numero), '');
console.log(user.amigos);
alert(user.activo);
console.log(user.nombre, user.ApellidoM, user.Edad, user.EdoCivil);
alert(user.sendMensaje());