const nombre = "Paul";
const apellido = "Imbaquingo";

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre, apellido) {
  return `Hola ${nombre} ${apellido}`;
}

console.log(`Este es un texto: ${getSaludo(nombre, apellido)}`);
