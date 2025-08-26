import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-laboratories',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './laboratories.html',
  styleUrl: './laboratories.scss',
})
export class Laboratories {}
