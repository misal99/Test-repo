import { NgModule } from '@angular/core';
import { EmployeeService } from './services/EmployeeService';
import { EmployeeEditFormComponent } from './component/employee-edit-form/employee-edit-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormBuilder } from './services/EmployeeFormBuilder';

@NgModule({
  declarations: [EmployeeEditFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [EmployeeEditFormComponent],
  providers: [EmployeeService, EmployeeFormBuilder],
})
export class EmployeeModule {}
