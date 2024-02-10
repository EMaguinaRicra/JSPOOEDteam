// Clase Usuario

export default class Usuario {
  constructor(nombres, apellidos, correo, activo) {
    // constructor - palabra reservada
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.correo = correo;
    this.activo = activo;
  }

  presentarse() {
    return `Hi, my name is ${this.nombres}, and my last name is ${this.apellidos}`;
  }

  // Métodos Getter and Setter
  //   Getter
  getNombres() {
    return this.nombres;
  }

  getApellidos() {
    return this.apellidos;
  }

  getCorreo() {
    return this.correo;
  }
  getActivo() {
    return this.activo;
  }

  //   Setter
  setNombres(nombres) {
    this.nombres = nombres;
  }

  setApellidos(apellidos) {
    this.apellidos = apellidos;
  }

  setCorreo(correo) {
    this.correo = correo;
  }

  setActivo(activo) {
    this.activo = activo;
  }
}
