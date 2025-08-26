import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/header/header.component';
import { NewConfigurationButton } from './components/shared/new-configuration-button/new-configuration-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, NewConfigurationButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(private router: Router) {}

  get showNewConfigurationButton(): boolean {
    const hiddenRoutes = ['/login', '/laboratories/new-configuration']; // Aggiungi qui le rotte dove NON vuoi il bottone
    return !hiddenRoutes.includes(this.router.url);
  }
}
