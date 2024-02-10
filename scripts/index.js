import Curso from "./classes/Curso.js";
import Profesor from "./classes/Profesor.js";
import Alumno from "./classes/Alumno.js";

// Instanciando los objetos de la clase Curso

const element = document.getElementById("cursos");

// Imprime un curso en el DOM
// Recibe un objeto de tipo Curso
function mostrarCurso(curso) {
  const hijo = document.createElement("div");
  hijo.classList.add("card");

  hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src= "${curso.getPoster()}" alt="${curso.getNombre()}"/>
    </div>

    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">        
        <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
        <div class="s-mb-2 s-main-center">
            <div class="card__teacher s-cross-center">
                <div class="card__avatar s-mr-1">
                    <div class="circle img-container">
                        <img src="/JSPOOEDteam/images/edteam-128.png">
                    </div>
                </div>
                <span class="small">N° Clases: ${curso.getClases()}</span>
            </div>
        </div>
    </div>
    `;

  element.appendChild(hijo);
}

const formulario = document.getElementById("formCursos");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const target = e.target;
  const curso = new Curso(
    target.nameCurso.value,
    target.posterCurso.value,
    target.clasesCurso.value
  );
  mostrarCurso(curso);
});

/**
 * Agregando usuarios a las tablas con los formularios
 * =================================================================
 */

// Muestra el formulario del botón que se presiona
// También muestra la tabla del formulario correspondiente
function mostrarFormulario(formularioId) {
  // Ocultar todos los formularios
  document.getElementById("agregarProfesor").classList.add("hidden");
  document.getElementById("agregarAlumno").classList.add("hidden");

  // Mostrar el formulario correspondiente al botón clickeado
  document.getElementById(formularioId).classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  // Agregar evento click al botón "Agregar Profesor"
  const btnProfesor = document.querySelector("#btnProfesor");
  btnProfesor.addEventListener("click", function () {
    mostrarFormulario("agregarProfesor");
  });

  // Agregar evento click al botón "Agregar Alumno"
  const btnALumno = document.querySelector("#btnALumno");
  btnALumno.addEventListener("click", function () {
    mostrarFormulario("agregarAlumno");
  });
});

/**
 * Creando Objetos Profesores y Agregar Profesores a la Tabla
 * =================================================================
 */

// EventListener para crear un Objeto Profesor
document
  .getElementById("formProfesor")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const target = event.target;

    // Obterner valores del formulario con target
    const nombre = target.nameUser.value;
    const apellido = target.lastNameUser.value;
    const correo = target.emailUser.value;
    const estado = target.stateUser.value;
    const cursosDictados = target.cursosDictados.value;
    const calificacion = target.calificacion.value;
    // Otra forma de obtener los valores del formulario
    // const nombre = document.querySelector("#formProfesor input[name='nameUser']").value;

    // Creando un Objeto Profesor
    const newProfesor = new Profesor(
      nombre,
      apellido,
      correo,
      estado,
      cursosDictados,
      calificacion
    );

    // Agregar los valores a la tabla
    agregarProfesor(
      newProfesor.getNombres(),
      newProfesor.getApellidos(),
      newProfesor.getCorreo(),
      newProfesor.getActivo(),
      newProfesor.getCursosDictados(),
      newProfesor.getCalificacion()
    );
  });

// Función para agregar el Objeto Profesor a la tabla Profesor
function agregarProfesor(
  nombre,
  apellido,
  correo,
  estado,
  cursosDictados,
  calificacion
) {
  // Crear una nueva fila de la tabla con los datos del formulario Profesor
  const tabla = document.getElementById("tablaProfesorBody");
  const nuevaFila = tabla.insertRow(tabla.rows.length);
  const celdaNombre = nuevaFila.insertCell(0);
  const celdaApellido = nuevaFila.insertCell(1);
  const celdaCorreo = nuevaFila.insertCell(2);
  const celdaEstado = nuevaFila.insertCell(3);
  const celdaCursosDictados = nuevaFila.insertCell(4);
  const celdaCalificacion = nuevaFila.insertCell(5);

  celdaNombre.innerHTML = nombre;
  celdaApellido.innerHTML = apellido;
  celdaCorreo.innerHTML = correo;
  celdaEstado.innerHTML = estado;
  celdaCursosDictados.innerHTML = cursosDictados;
  celdaCalificacion.innerHTML = calificacion;
}

/**
 * Creando Objetos Alumno y Agregar Alumno a la Tabla
 */

// EventListener para crear un Objeto Alumno
document
  .getElementById("formAlumno")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    const target = event.target;

    // Obterner valores del formulario con target
    const nombre = target.nameUser.value;
    const apellido = target.lastNameUser.value;
    const correo = target.emailUser.value;
    const estado = target.stateUser.value;
    const cursosTomados = target.clasesTomadas.value;

    // Creando un Objeto Alumno
    const newAlumno = new Alumno(
      nombre,
      apellido,
      correo,
      estado,
      cursosTomados
    );

    // Agregar los valores a la tabla Alumno
    agregarAlumno(
      newAlumno.getNombres(),
      newAlumno.getApellidos(),
      newAlumno.getCorreo(),
      newAlumno.getActivo(),
      newAlumno.getCursosTomados()
    );
  });

// Función para agregar el Objeto Alumno a la tabla Alumno
function agregarAlumno(nombre, apellido, correo, estado, cursosTomados) {
  // Crear una nueva fila de la tabla con los datos del formulario Alumno
  const tabla = document.getElementById("tablaAlumnoBody");
  const nuevaFila = tabla.insertRow(tabla.rows.length);
  const celdaNombre = nuevaFila.insertCell(0);
  const celdaApellido = nuevaFila.insertCell(1);
  const celdaCorreo = nuevaFila.insertCell(2);
  const celdaEstado = nuevaFila.insertCell(3);
  const celdaCursosTomados = nuevaFila.insertCell(4);

  celdaNombre.innerHTML = nombre;
  celdaApellido.innerHTML = apellido;
  celdaCorreo.innerHTML = correo;
  celdaEstado.innerHTML = estado;
  celdaCursosTomados.innerHTML = cursosTomados;
}
