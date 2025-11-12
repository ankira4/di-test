# EJERCICIOS

## Arrays y métodos básicos
```js

1. Declara un array con al menos 5 nombres de personas.
let personas = ["Rodrigo", "Alfredo", "Sergio", "Sara", "Samer", "Andrea"];
    - Añade un nombre al final.
personas.push("Marcos");
    - Elimina el primero.
personas.shift();
    - Busca si existe un nombre concreto con includes().
    console.log("está alfredo?", personas.includes("Alfredo"));
    console.log("array", personas);

2. Declara un array con al menos 5 nombres de personas.
let nombres = ["Rodrigo", "Alfredo", "Sergio", "Sara", "Samer", "Andrea"];
    - Añade un nombre al final.
nombres.push("Ernest");
    - Elimina el primero.
nombres.shift();
    - Busca si existe un nombre concreto con includes().
console.log("está samer??", nombres.includes("Samer"));

3. Ordena el array [4, 1, 9, 3, 7] de forma ascendente y descendente.
console.log("array", nombres);

## Desestructuración de arrays

1. Dado el array ["manzana", "pera", "plátano", "naranja"]:
    - Extrae en variables fruta1 y fruta2 los dos primeros.
    - Usa el operador rest para guardar el resto en un nuevo array.

let frutas = ["manzana", "pera", "plátano", "naranja"];
let [fruta1, fruta2, ...resto] = frutas;
console.log("fruta 1:", fruta1);
console.log("fruta 2:", fruta2);
console.log("resto:", resto);


2. Intercambia los valores de dos variables usando desestructuración
let a = 100;
let b = 200;
[a, b] = [b, a];
console.log("a= ", a, "b= ", b);

3. Extrae el color azul del array anidado:
let colores = ["rojo", ["verde", "azul", "amarillo"]];
let [, [ , azul ]] = colores;
console.log("Color azul:", azul);


## Recorrido de arrays con for

1. Crea un array con los números del 1 al 5 y muéstralos en consola con:
    - Un for clásico.
console.log("FOR normal:");
for (let i = 0; i < numeros2.length; i++) {
  console.log(numeros2[i]);
}
    - Un for...of.
console.log("FOR...of:");
for (let num of numeros2) {
  console.log(num);
}
    - Un for...in.
console.log("FOR...in:");
for (let i in numeros2) {
  console.log(i, ":", numeros2[i]);
}
2. Recorre el array ["HTML", "CSS", "JavaScript", "React"] con un for clásico e imprime "Posición X: Valor Y"
let lenguajes = ["HTML", "CSS", "JavaScript", "React"];
for (let i = 0; i < lenguajes.length; i++) {
  console.log(`Posición ${i}: ${lenguajes[i]}`);
}

3. Recorre un array al revés (for con decremento).
console.log("recorrido inverso:");
for (let i = numeros2.length - 1; i >= 0; i--) {
  console.log(numeros2[i]);
}
## Recorridos con forEach, filter y map

1. Dado el array ["Ana", "Luis", "Marta", "Pedro"], recórrelo con forEach e imprime un saludo para cada nombre.
let personas2 = ["Ana", "Luis", "Marta", "Pedro"];
personas2.forEach(nombre => console.log(`Hola, ${nombre}!`));

2. Crea un array de números [2, 4, 6, 8] y usa forEach para mostrar el doble de cada número.
let nums = [2, 4, 6, 8];
nums.forEach(n => console.log(`${n} x 2 = ${n * 2}`));

3. Dado el array [5, 12, 8, 130, 44], usa filter para obtener solo los números mayores que 10.
let valores = [5, 12, 8, 130, 44];
let mayores10 = valores.filter(v => v > 10);
console.log("Mayores que 10:", mayores10);

4. Crea un array con nombres ["Ana", "Alberto", "Bea", "Carlos"] y filtra los que empiecen por la letra A.
let nombres2 = ["Ana", "Alberto", "Bea", "Carlos"];
let conA = nombres2.filter(n => n.startsWith("A"));
console.log("Empiezan por A:", conA);

5. Dado un array de edades [15, 18, 21, 12, 30], usa filter para obtener solo las que representen mayores de edad (≥18).
let edades = [15, 18, 21, 12, 30];
let mayoresEdad = edades.filter(e => e >= 18);
console.log("Mayores de edad:", mayoresEdad);

6. Dado el array [1, 2, 3, 4, 5], usa map para obtener un nuevo array con los números elevados al cuadrado
let numeris = [1, 2, 3, 4, 5];
let cuadrados = numeris.map(n => n ** 2);
console.log("Cuadrados:", cuadrados);

7. Crea un array con precios [10, 20, 30] y usa map para calcular el precio con IVA (21%) incluido
let precios = [10, 20, 30];
let preciosIVA = precios.map(p => (p * 1.21).toFixed(2));
console.log("Precios con IVA:", preciosIVA);

8. Dado el array ["html", "css", "javascript"], usa map para poner en mayúsculas cada palabra.
let tecnologias = ["html", "css", "javascript"];
let mayus = tecnologias.map(t => t.toUpperCase());
console.log("Mayúsculas:", mayus);

9. Dado el array [3, 8, 12, 5, 7, 20]:
    - Usa filter para quedarte con los pares.
    - Luego, usa map para multiplicarlos por 10
let nums2 = [3, 8, 12, 5, 7, 20];
let pares10 = nums2.filter(n => n % 2 === 0).map(n => n * 10);
console.log("pares:", pares10);

10. Dado el array de objetos:
- Filtra solo los alumnos con nota ≥ 5.
- Usa map para obtener un array solo con sus nombres.
- Recorre el resultado con forEach e imprime: "Alumno aprobado: NOMBRE"

let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];

let aprobados = alumnos.filter(a => a.nota >= 5);
let alumnosAproados = aprobados.map(a => a.nombre);
alumnosAproados.forEach(n => console.log(`alumno aprobado: ${n}`));