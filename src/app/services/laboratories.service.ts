import { Injectable, signal } from '@angular/core';
import { labsTree } from '../mockData';

@Injectable({
  providedIn: 'root',
})
export class LaboratoriesService {
  laboratories = signal<typeof labsTree>(labsTree);

  getLayoutsByLaboratoryId(labId: string) {
    console.log('labId', labId);
    const lab = this.laboratories().children.find((l) => l.id === labId);
    return lab ? lab.children : [];
  }

  getScenariosByLayoutId(labId: string, layoutId: string) {
    const lab = this.laboratories().children.find((l) => l.id === labId);
    if (!lab) return [];
    const layout = lab.children.find((l) => l.id === layoutId);
    return layout ? layout.children : [];
  }
}
