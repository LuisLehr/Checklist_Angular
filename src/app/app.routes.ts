import { Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/checklist/checklist.component';

export const routes: Routes = [
    { path: '', component: ChecklistComponent }, // Página inicial
    { path: 'checklist', component: ChecklistComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
