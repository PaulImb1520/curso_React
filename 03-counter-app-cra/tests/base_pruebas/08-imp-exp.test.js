import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("Debe retornar un héroe por ID", () => {
    const hero = getHeroeById(2);
    expect(hero).toStrictEqual({
      id: 2,
      name: "Spiderman",
      owner: "Marvel",
    });
  });

  test("Debe retornar undefined si no existe", () => {
    const hero = getHeroeById(100);
    expect(hero).toBeFalsy();
  });

  test("Debe retornar un arreglo con los hérores de DC", () => {
    const hero = getHeroesByOwner("DC");
    expect(hero).toStrictEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);
    expect(hero.length).toBe(3);
  });

  test("Debe retornar un arreglo con los hérores de M>rvel", () => {
    const hero = getHeroesByOwner("Marvel");
    expect(hero).toStrictEqual([
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]);
    expect(hero.length).toBe(2);
  });
});
