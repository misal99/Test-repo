import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/modules/employees/employee.model';
import { EmployeeService } from 'src/modules/employees/services/EmployeeService';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeFormBuilder } from 'src/modules/employees/services/EmployeeFormBuilder';

@Component({
  templateUrl: 'create-employee.page.html',
  styleUrls: ['create-employee.page.scss'],
})
export class EmployeeCreatePageComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private formBuilder: EmployeeFormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.createForm();
  }

  addNewEmployee(employee: IEmployee) {
    this.employeeService.create(employee);
    this.router.navigate(['employees']);
  }

}
