import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { Footer } from '@layout/footer/footer';
import { Header } from '@layout/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
