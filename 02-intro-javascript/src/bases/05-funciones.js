const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;
console.log(saludar("Paul"));
console.log(saludar2("Paul"));
console.log(saludar3("Paul"));

function getUsuarioActivo(nombre) {
  return {
    uid: "ABC123",
    username: nombre,
  };
}

const usuarioActivo = getUsuarioActivo("Paul");
console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) => {
  return { uid: "ABC123", username: nombre };
};
console.log(getUsuarioActivo2("Esteban"));
