import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  // test("09-promesas debe retornar un héroe", (done) => {
  //   getHeroeByIdAsync(2).then((hero) => {
  //     console.log(hero);
  //     expect(hero).toStrictEqual({
  //       id: 2,
  //       name: "Spiderman",
  //       owner: "Marvel",
  //     });
  //     done();
  //   });
  // });
  test("getHeroeByIdAsynd debe obtener un error si no se encuentra", (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe("No se pudo encontrar el héroe");
        done();
      });
  });
});
