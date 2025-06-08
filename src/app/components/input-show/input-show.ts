import { Component, input, output, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-show',
  imports: [],
  templateUrl: './input-show.html',
  styleUrl: './input-show.scss'
})
export class InputShow implements OnInit{
  inputValue = input(0);
  outputEmit = output<string>();

  ngOnInit(): void {
    console.log("Metodo que se llama luego de instanciado el componente.")
  }

  doOutput() {
    this.outputEmit.emit("output emit");
  }
}
