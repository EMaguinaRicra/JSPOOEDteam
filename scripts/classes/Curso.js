export default class Curso {
  constructor(nombre, poster, clases) {
    this.nombre = nombre;
    this.poster = poster;
    this.clases = clases;
    this.inscritos = [];
  }

  //Getter
  getNombre() {
    return this.nombre;
  }

  getPoster() {
    return this.poster;
  }

  getClases() {
    return this.clases;
  }
  getInscritos() {
    return this.inscritos;
  }

  //Setter
  setNombre(nombre) {
    return (this.nombre = nombre);
  }

  setPoster(poster) {
    return (this.poster = poster);
  }

  setClases(clases) {
    return (this.clases = clases);
  }

  setInscritos(inscritos) {
    return (this.inscritos = inscritos);
  }
}
