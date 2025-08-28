import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { LaboratoriesService } from '../../services/laboratories.service';

@Component({
  selector: 'app-layout',
  imports: [RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  private activatedRoute = inject(ActivatedRoute);

  private laboratoriesService = inject(LaboratoriesService);

  laboratoryId = this.activatedRoute.snapshot.paramMap.get('laboratoryId')!;

  layoutId = this.activatedRoute.snapshot.paramMap.get('layoutId')!;

  scenarios = this.laboratoriesService.getScenariosByLayoutId(
    this.laboratoryId,
    this.layoutId
  );

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.layoutId = params.get('layoutId') || '';
      // Qui puoi ricaricare i dati del nuovo layout
      this.loadLayoutData(this.layoutId);
    });
  }

  loadLayoutData(id: string | null) {
    // Logica per caricare i dati del nuovo layout
  }
}
