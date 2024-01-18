const persona = {
  nombre: "Paul",
  apellido: "Imbaquingo",
  edad: 19,
  direccion: { ciudad: "Quito", provincia: "Pichincha" },
};

console.log(persona);

//Clon real de un objeto
const persona2 = structuredClone(persona);
persona2.nombre = "Esteban";
persona2.direccion.ciudad = "Calderón";

console.log(persona);
console.log(persona2);
