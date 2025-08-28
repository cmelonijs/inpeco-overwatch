import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LaboratoriesService } from '../../services/laboratories.service';

@Component({
  selector: 'app-laboratory',
  imports: [RouterLink],
  templateUrl: './laboratory.html',
  styleUrl: './laboratory.scss',
})
export class Laboratory {
  private activatedRoute = inject(ActivatedRoute);

  private laboratoriesService = inject(LaboratoriesService);

  laboratoryId = this.activatedRoute.snapshot.paramMap.get('laboratoryId')!;

  layouts = this.laboratoriesService.getLayoutsByLaboratoryId(
    this.laboratoryId
  );
}
