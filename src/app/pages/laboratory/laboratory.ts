import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-laboratory',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './laboratory.html',
  styleUrl: './laboratory.scss',
})
export class Laboratory {}
