import { Component, linkedSignal, computed, signal, ChangeDetectionStrategy, effect, inject } from '@angular/core';
import { InputShow } from "@/components";
import { FormsModule } from '@angular/forms';
import { Logger } from "@/services"

interface User {
  id: number,
  name: string,
  age: number
}

const users = [
  {id: 1, name: "john", age: 15},
  {id: 2, name: "maria", age: 20},
  {id: 3, name: "sebastian", age: 32},
  {id: 4, name: "juan", age: 27},
  {id: 5, name: "pablo", age: 55},
]

const links = [
  {label: "link1"},
  {label: "link2"},
  {label: "link3"},
  {label: "link4"},
  {label: "link5"}
]

// STANDALONE vs NGModule
// Antes con NGModule la mejor practica era crear un modulo del componente para importar y exportar, y usarlo
// donde necesites usar ese componente.
// Con STANDALONE se optimizo y creo que usa un modulo por debajo, generando menos confucion al hacer imports 
// y exports, definis que un componente es STANDALONE true y con eso ya podes importarlo en otro componente.

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [InputShow, FormsModule],
  providers: [Logger],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  value = signal(0);
  usuarios = signal(users);
  doubleCount = computed(() => this.value() * 2);
  linkedUsuario = linkedSignal(() => this.usuarios()[0]);
  linkedUsuarioPrev = linkedSignal<User[], User>( {
    source: this.usuarios,
    computation: (newUsuarios, previous) => {
      return (
        newUsuarios.find((user) => user.id === previous?.value.id) ?? newUsuarios[0]
      );
    }
  })
  links = signal(links);
  activeLink = signal("");
  firstName = "";
  logger = inject(Logger);

  constructor() {
    effect(() => {
      console.log(`cambio el valor de value a: ${this.value()}`);
    })
  }

  increment() {
    this.value.update(value => value + 1);
  }

  addUserAtras() {
    this.usuarios.update(usuarios => [
      ...usuarios,
      { id: usuarios.length + 1, name: "hola", age: 10 }
    ]);
  }

  addUserDelante() {
    this.usuarios.update(usuarios => [
      { id: usuarios.length + 1, name: "hola", age: 10 },
      ...usuarios
    ]);
  }

  deleteIndex(index: number) {
    const userDelete = this.usuarios()[index];
    this.usuarios.update(usuarios => usuarios.filter(user => user != userDelete))
    this.logger.log(`user deleted ${userDelete.name}`)
  }

  recibirMensaje(texto: string) {
    console.log(`se recibio el mensaje "${texto}" emitido por mi hijo`);
  }


  // COMPUTED vs LINKED SIGNALS
  //  - Ambos utilizan el valor de un signal para generar otro valor.
  //  - Con LINKED SIGNALS podes acceder al valor previo.
  //  - Con LINKED SIGNALS podes cambiar su valor con .set mientras que COMPUTED es readonly.

}
