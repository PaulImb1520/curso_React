import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUSer = {
      uid: "ABC123",
      username: "Test",
    };
    const user = getUser(testUSer);

    expect(testUSer).toStrictEqual(user);
  });
});

test("getUsuario debe retornar un objeto", () => {
  const name = "Paul";
  const user = getUsuarioActivo(name);

  expect(user).toStrictEqual({
    uid: "ABC567",
    username: "Paul",
  });
});
