import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-show',
  imports: [],
  templateUrl: './input-show.html',
  styleUrl: './input-show.scss'
})
export class InputShow {
  inputValue = input(0);
  outputEmit = output<string>();

  doOutput() {
    this.outputEmit.emit("output emit");
  }
}
