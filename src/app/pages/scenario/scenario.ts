import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scenario',
  imports: [],
  templateUrl: './scenario.html',
  styleUrl: './scenario.scss',
})
export class Scenario {
  private activatedRoute = inject(ActivatedRoute);

  scenarioId = this.activatedRoute.snapshot.paramMap.get('scenarioId')!;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.scenarioId = params.get('scenarioId') || '';
      // Qui puoi ricaricare i dati del nuovo scenario
      this.loadScenario(this.scenarioId);
    });
  }

  loadScenario(id: string | null) {
    // Logica per caricare i dati del nuovo scenario
  }
}
