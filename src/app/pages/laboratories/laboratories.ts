import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LaboratoriesService } from '../../services/laboratories.service';

@Component({
  selector: 'app-laboratories',
  imports: [RouterLink],
  templateUrl: './laboratories.html',
  styleUrl: './laboratories.scss',
})
export class Laboratories {
  private laboratoriesService = inject(LaboratoriesService);

  laboratories = this.laboratoriesService.laboratories;
}
