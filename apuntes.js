const profe = new Profesor(
  "Alvaro",
  "Felipe",
  "alvaro.felipe@ed.team",
  true,
  ["Notion", "HTML", "CSS"],
  10
);

const alumno = new Alumno(
  "Eloy",
  "Maguiña",
  "eloy.maguinaricra@gmail.com",
  true,
  [
    "JavaScript desde Cero",
    "DOM con JavaScript",
    "POO con JavaScript",
    "Notion",
    "HTML",
    "CSS",
  ]
);

const alumno1 = new Alumno(
  "Gabriela",
  "Carbone",
  "gabriela.carbone@gmail.com",
  true,
  ["HTML", "CSS"]
);

const html = new Curso(
  "HTML desde Cero",
  "https://edteam-media.s3.amazonaws.com/courses/big/c32aad4d-6dd6-4ae5-aa86-8254069988df.png",
  15
);

console.log(profe);
console.log(alumno);

html.setInscritos([...html.getInscritos(), alumno]); // Operador para agregar elementos a un Array (...)
console.log(html);

html.setInscritos([...html.getInscritos(), alumno1]);
console.log(html);
