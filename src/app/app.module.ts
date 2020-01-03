import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesPageComponent } from './pages/employees/employees.page';
import { RouterConfigurationModule } from '../config/routing';
import { EmployeeEditPageComponent } from './pages/edit-employee/edit-employee.page';
import { ModalModule } from 'ngx-bootstrap';
import { EmployeeModule } from 'src/modules/employees/employee.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeCreatePageComponent } from './pages/create-employee/create-employee.page';
import { DebounceDirective } from 'src/directives/debounce.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesPageComponent,
    EmployeeEditPageComponent,
    EmployeeCreatePageComponent,
    DebounceDirective,
  ],
  imports: [
    BrowserModule,
    RouterConfigurationModule,
    EmployeeModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
