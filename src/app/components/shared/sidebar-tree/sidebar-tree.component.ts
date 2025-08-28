import { Component, inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  RouterLink,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { LaboratoriesService } from '../../../services/laboratories.service';

@Component({
  selector: 'app-sidebar-tree',
  templateUrl: './sidebar-tree.component.html',
  styleUrls: ['./sidebar-tree.component.scss'],
  imports: [RouterLink],
})
export class SidebarTreeComponent implements OnInit {
  private laboratoriesService = inject(LaboratoriesService);
  private router = inject(Router);

  currentLabId: string | null = null;
  currentLayoutId: string | null = null;
  currentScenarioId: string | null = null;

  tree = this.laboratoriesService.laboratories();

  ngOnInit(): void {
    console.log('tree', this.tree);
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        const segments = url.split('/');
        this.currentLabId = segments[2] || null;
        this.currentLayoutId = segments[4] || null;
        this.currentScenarioId = segments[6] || null;
      });
  }
}
