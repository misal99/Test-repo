import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { EmployeesPageComponent } from 'src/app/pages/employees/employees.page';
import { EmployeeEditPageComponent } from 'src/app/pages/edit-employee/edit-employee.page';
import { EmployeeCreatePageComponent } from 'src/app/pages/create-employee/create-employee.page';

const routing: Route[] = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: '/employees', pathMatch: 'full' },
      { path: 'employees', component: EmployeesPageComponent },
      { path: 'employee/new', component: EmployeeCreatePageComponent },
      { path: 'employee/:id', component: EmployeeEditPageComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routing,
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class RouterConfigurationModule { }
