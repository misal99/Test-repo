import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/modules/employees/employee.model';
import { EmployeeService } from 'src/modules/employees/services/EmployeeService';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeFormBuilder } from 'src/modules/employees/services/EmployeeFormBuilder';

@Component({
  templateUrl: 'edit-employee.page.html',
  styleUrls: ['edit-employee.page.scss'],
})
export class EmployeeEditPageComponent implements OnInit {
  public employees: IEmployee[];
  public currentEmployee: IEmployee;
  public form: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private formBuilder: EmployeeFormBuilder,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.employees = await this.employeeService.getAll();
    this.currentEmployee = this.employees.find(employee => employee.name === this.route.snapshot.params.id);
    this.form = this.formBuilder.createForm(this.currentEmployee);
  }

  updateEmployee(record: IEmployee) {
    const index = this.employees.findIndex(employee => employee.name === this.currentEmployee.name);
    this.employeeService.update(index, record);
    this.router.navigate(['employees']);
  }
}
