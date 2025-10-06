/**
 * Ejercicio 05 - Funciones
 * Archivo: ejercicios/05-functions.ts
 *
 * - Crear una función calcularPromedio que reciba un arreglo de números y devuelva el promedio.
 */

/**
 * Calcula el promedio de un arreglo de números.
 * @param numeros - arreglo de números
 * @returns promedio (0 si arreglo vacío):
 */
export function calcularPromedio(numeros: number[]): number {
  if (numeros.length === 0) return 0;
  let suma = 0;
  for (const n of numeros) {
    suma += n;
  }
  return suma / numeros.length;
}

// Ejemplo de uso::
const ejemploNotas: number[] = [4.5, 5.0, 3.9, 4.0];
console.log(`Notas de ejemplo: ${ejemploNotas.join(', ')}`);
console.log(`Promedio (función): ${calcularPromedio(ejemploNotas).toFixed(2)}`);
