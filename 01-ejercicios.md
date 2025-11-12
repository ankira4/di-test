# EJERCICIOS

## Declaración de variables
```js
1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola.

let nombre = "Andrea";
console.log(nombre);

2. Declara una constante PI con el valor 3.1416. Intenta reasignarla y observa el error.

const PI = 3.1416;
console.log("PI:", PI);
// PI = 3.14 Assignment to constant variable.

3. Declara una variable edad sin asignarle valor. Luego asígnale un número y muestra el resultado.
let edad;
edad = 22;
console.log("Edad:", edad);

## Tipos de datos

1. Crea variables de tipo string, number, boolean, null y undefined. Imprime cada una junto con typeof

let texto = "aSRhgerth";    
let numero = 25;            
let booleano = true;        
let nulo = null;               
let indefinido;                


console.log("texto:", texto," tipo:", typeof texto);
console.log("numero:", numero," tipo:", typeof numero);
console.log("booleano:", booleano," tipo:", typeof booleano);
console.log("nulo:", nulo,"tipo:", typeof nulo);
console.log("indefinido:", indefinido," tipo:", typeof indefinido);

2. Convierte un número a cadena usando **String()** y una cadena a número usando **Number()**.

let num = 123;
let numComoCadena = String(num);
console.log("numero como cadena:", numComoCadena, "tipo:", typeof numComoCadena);

let cadena = "456";
let cadenaComoNumero = Number(cadena);
console.log("cdena como numero:", cadenaComoNumero, "tipo:", typeof cadenaComoNumero);


## Objetos

1. Crea un objeto persona con propiedades: nombre, edad, ciudad

let persona = {
  nombre: "Andrea",
  edad: 22,
  ciudad: "Langreo"
};

2. Accede a las propiedades usando dot notation (obj.propiedad) y bracket notation (obj["propiedad"]).

console.log("nombre", persona.nombre);
console.log("ciudad:", persona["ciudad"]);

3. Añade una nueva propiedad profesion al objeto persona

persona.profesion = "estudiante de DAM";
console.log("persona con nueva propiedad:", persona);

4. Usa desestructuración para extraer nombre y edad en variables e imprimelas

const { nombre: nom, edad: e } = persona;
console.log("nombre:", nom, ", edad:", e);


## Funciones

1. Crea una función saludar(nombre) que devuelva "Hola, <nombre>".

function saludar(nombre) {
  return `Hola, ${nombre}`;
}

2. Crea una función sumar(a, b) que devuelva la suma de dos números.

function sumar(a, b) {
  return a + b;
}
console.log("5+3=", sumar(5, 3));

3. Escribe una función flecha que multiplique dos números

const multiplicar = (a, b) => a * b;
console.log("Multiplicación 4 * 6 =", multiplicar(4, 6));

4. Crea una función esMayorDeEdad(edad) que devuelva true si la edad es mayor o igual a 18, de lo contrario false.

function esMayorDeEdad(edad) {
  return edad >= 18;
}
console.log("76 es mayor de edad?", esMayorDeEdad(76));
console.log("9 es mayor de edad?", esMayorDeEdad(9));




