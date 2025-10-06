// Definimos una interfaz para el tipo de dato "Estudiante"
interface Estudiante {
  nombre: string;
  edad: number;
  carrera: string;
  semestre: number;
  descripcion: () => string; // Método que retorna una cadena
}

// Creamos un objeto que cumple con la interfaz Estudiante
const estudiante: Estudiante = {
  nombre: "Alexis",
  edad: 21,
  carrera: "Ingeniería de sistemas",
  semestre: 9,

  // Implementamos el método descripción
  descripcion(): string {
    return `Soy ${this.nombre}, tengo ${this.edad} años, estudio ${this.carrera} y estoy en el semestre ${this.semestre}.`;
  }
};

// Mostramos la descripción en consola
console.log(estudiante.descripcion());
