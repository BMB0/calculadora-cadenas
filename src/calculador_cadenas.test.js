import calculador from "./calculador_cadenas.js";

describe("Calcula Cadenas", () => {
  it("deberia retornar 0 al ingresar una cadena vacia '' ", () => {
    expect(calculador("")).toEqual(0);
  });
  it("deberia retornar 1 al ingresar la cadena 1 ", () => {
    expect(calculador("1")).toEqual(1);
  });
  it("deberia retornar 2 al ingresar la cadena 1,1 ", () => {
    expect(calculador("1,1")).toEqual(2);
  });
  it("deberia retornar 3 al ingresar la cadena 1,1,1 ", () => {
    expect(calculador("1,1,1")).toEqual(3);
  });
  it("deberia retornar 6 al ingresar la cadena 1,2,3 ", () => {
    expect(calculador("1,2,3")).toEqual(6);
  });
  it("deberia retornar 2 al ingresar la cadena 1-1 ", () => {
    expect(calculador("1-1")).toEqual(2);
  });
});
