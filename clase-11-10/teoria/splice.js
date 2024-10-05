// Definición inicial del array de letras
let letras = ["a", "b", "c", "d", "e", "f", "g"];

// Uso de splice para eliminar dos elementos a partir del índice 2 y agregar tres nuevos elementos
let eliminados = letras.splice(2, 2, "x", "y", "z");
// Muestra los elementos eliminados y el estado actual del array después de la operación
console.log("Los elementos eliminados son: ", eliminados);  // Imprime ["c", "d"]
console.log("Estado del array después de la operación: ", letras);  // Imprime ["a", "b", "x", "y", "z", "e", "f", "g"]


// ************************************************************************************************ //

// Definición inicial del array de letras
let letras = ["a", "b", "c", "d", "e", "f", "g"];

// Insertar múltiples elementos en el índice 2, sin eliminar ninguno
letras.splice(2, 0, "x", "y", "z");
// Muestra el estado del array después de la inserción de los nuevos elementos
console.log("Estado del array después de agregar más elementos: ", letras);

// ************************************************************************************************ //

// Definición inicial del array de letras
let letras = ["a", "b", "c", "d", "e", "f", "g"];

// Uso de splice para eliminar elementos desde el índice 2, eliminando 5 elementos
let resultado = letras.splice(2, 5);
// Muestra los elementos eliminados y el estado actual del array después de la eliminación
console.log("Las letras eliminadas son: ", resultado);  // Imprime ["c", "d", "e", "f", "g"]
console.log("Estado actual del array: ", letras);       // Imprime ["a", "b"]


/** ####################################################################################
 * TENGAN EN CUENTA QUE SOLO DEBEMOS DECLARAR UNA SOLA VEZ
 * "let letras" acá lo hago 3 veces porque muestro por separado cada ejercicio
 * ####################################################################################
 */
