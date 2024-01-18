const persona = {
  nombre: "Paul",
  edad: 19,
  clave: "Estudiante",
};

const { nombre: nombre2, edad, clave } = persona;
console.log(nombre2 + edad + clave);

const testContext = ({ clave, nombre, edad, rango = "test" }) => {
  //console.log(nombre, edad, rango);
  return { nombreClave: clave, anios: edad };
};

const test = testContext(persona);
const { nombreClave, anios } = test;
console.log(nombreClave, anios);
