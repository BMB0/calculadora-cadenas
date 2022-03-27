import calculador from "./calculador_cadenas.js";

describe("Calcula Cadenas", () => {
  it("deberia retornar 0 al ingresar una cadena vacia '' ", () => {
    expect(calculador("")).toEqual(0);
  });
});
