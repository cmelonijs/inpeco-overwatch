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
}
