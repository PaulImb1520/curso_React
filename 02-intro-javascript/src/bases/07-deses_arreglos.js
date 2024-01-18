const personajes = ["Link", "Zelda", "Ganondorf"];
const [, p2] = personajes;
console.log(p2);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const testState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola mundo");
    },
  ];
};

const [nombre, zetNombre] = testState(1);
zetNombre();
console.log(nombre);
