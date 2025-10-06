// Reutilizar el objeto estudiante
const estudiante = {
  nombre: "Laura Gómez",
  edad: 21,
  carrera: "Ingeniería de Sistemas",
  promedio: 4.3
};

// Desestructurar nombre y carrera
const { nombre, carrera } = estudiante;

// Mostrar valores en consola
console.log("Nombre del estudiante:", nombre);
console.log("Carrera:", carrera);