/**
 * Ejercicio 04 - Arreglos
 * Archivo: ejercicios/04-arrays.ts
 *
 * - Crear un arreglo con calificaciones.
 * - Calcular el promedio usando un bucle for.
 */

// Arreglo de ejemplo con calificaciones (puedes cambiar los valores)
const calificaciones: number[] = [4.0, 3.6, 5.0, 4.4, 3.0, 4.8];

/**
 * Calcula el promedio usando un bucle for tradicional.
 * @param arr - arreglo de números
 * @returns promedio (0 si el arreglo está vacío)
 */
function calcularPromedioFor(arr: number[]): number {
  if (arr.length === 0) return 0;
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma / arr.length;
}

const promedio = calcularPromedioFor(calificaciones);

console.log(`Calificaciones: [${calificaciones.join(', ')}]`);
console.log(`Promedio (usando for): ${promedio.toFixed(2)}`);

// (Opcional) versión con reduce:
// const promedioReduce = calificaciones.reduce((a,b) => a + b, 0) / (calificaciones.length || 1);
