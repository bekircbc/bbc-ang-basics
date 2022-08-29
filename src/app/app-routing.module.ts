import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesPageComponent } from './employees-page/employees-page.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { EmployeeDetailPageComponent } from './employee-detail-page/employee-detail-page.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesPageComponent,
    pathMatch: 'full',
  },
  { path: 'info', component: InfoPageComponent, pathMatch: 'full' },
  {
    path: 'employees/:id',
    component: EmployeeDetailPageComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
