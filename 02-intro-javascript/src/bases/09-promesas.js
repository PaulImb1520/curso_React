import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("2 segundos después");
//     const heroe = resolve(getHeroeById(2));
//     //reject("No se pudo encontrar el héroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("Héroe: ", heroe);
//   })
//   .catch((error) => console.warn(error));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2 segundos después");
      const heroe = getHeroeById(id);
      if (heroe === undefined) {
        reject("No se pudo encontrar el héroe");
      } else {
        resolve(heroe);
      }
      //reject("No se pudo encontrar el héroe");
    }, 2000);
  });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
