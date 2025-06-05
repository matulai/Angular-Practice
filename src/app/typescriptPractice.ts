/* 
  ECMAScript (ES) define las reglas que tiene que cumplir js para mantener compatibilidad entre navegadores
  "Los navegadores usan ES no JS"

  Javascript => tipado dinamico
  Typescript => tipado estricto

  "Typescript cuando desarrollamos"

  TS tambien tiene inferencia de tipos por ende no es necesario agregar tipos a todo.
*/

function sum(a:number, b:number): number {
  return a + b;
}

sum(1,2); // 3

/* INTERFACE && TYPES*/

interface User {
  name: string;
  getName: () => string;
  setName: (name: string) => void;
}

class UserClass {
  name : string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(newName: string) {
    this.name = newName;
  }
}

// "SHAPE": Typescript se fija si cumple con la misma forma no si son del mismo tipo
// por eso aca puedo decir que user es User o UserClass
const user: User = {
  name: "pepe",
  getName: () => {return "pepe"},
  setName: (name: string) => {name = name},
}

const userClass: UserClass = new UserClass("nomber")

// interface de JS solo que TS le mete tipado y type de TS, siempre usar interface hasta que no se pueda xD
// se puede usar ambos para lo mismo pero lo recomendable es interface, con types se agregan mas funcionalidades

interface Alumno {
  legajo: string;
}

type UserType = User & Alumno;

const userType: UserType = {
  name: "lala",
  getName: () => {return "lala"},
  setName: (name: string) => {name = name},
  legajo: "lapa"
}

/*
 DECORADORES 
 - Agrega funcionalidad extra a algo que no lo tiene
 - Hay decoradores de:
  -Clase(declaracion de clase)
  -Metodos
  -Propiedades

  Angular usa decoradores.
  Por ejemplo agregar ya funcionalidad a un componente con @Component
 */

function decoradorDePrueba<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    prueba = "prueba";
  };
}

@decoradorDePrueba
class PruebaClass {
  constructor() {};
}

const pruebaClass = new PruebaClass();
console.log((pruebaClass as any).prueba);