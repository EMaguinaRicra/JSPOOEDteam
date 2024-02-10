import Usuario from "./Usuario.js";

export default class Profesor extends Usuario {
  constructor(
    nombres,
    apellidos,
    correo,
    activo,
    cursosDictados,
    calificacion
  ) {
    super(nombres, apellidos, correo, activo);
    this.cursosDictados = cursosDictados;
    this.calificacion = calificacion;
  }

  // Getter
  // getNombre() {
  //   return this.nombres;
  // }

  getCursosDictados() {
    return this.cursosDictados;
  }

  getCalificacion() {
    return this.calificacion;
  }

  // Setter

  setCursosDictados(cursosDictados) {
    this.cursosDictados = cursosDictados;
  }

  setCalificacion(calificacion) {
    this.calificacion = calificacion;
  }
}
