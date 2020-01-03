import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IEmployee } from '../../employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/EmployeeService';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'employee-edit-form',
  templateUrl: 'employee-edit-form.component.html',
  styleUrls: ['employee-edit-form.component.scss'],
})
export class EmployeeEditFormComponent {
  @Input() form: FormGroup;
  @Output() save = new EventEmitter<IEmployee>();
  public error: string;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
  ) {}

  submit() {
    try {
      this.employeeService.checkForDuplicate(this.form.value.name);
      this.save.emit(this.form.value);
    } catch (error) {
      this.error = error;
    }
  }

  cancel() {
    this.router.navigate(['employees']);
  }
}
