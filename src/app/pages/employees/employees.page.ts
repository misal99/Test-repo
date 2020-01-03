import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { IEmployee } from 'src/modules/employees/employee.model';
import { EmployeeService } from 'src/modules/employees/services/EmployeeService';


@Component({
  templateUrl: 'employees.page.html',
  styleUrls: ['employees.page.scss'],
})
export class EmployeesPageComponent implements OnInit {
  public employees: IEmployee[];
  public selectedEmployee: IEmployee;
  public modalRef: BsModalRef;
  public searchText: string;

  constructor(
    private employeeService: EmployeeService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.getAll();
  }

  async getAll() {
    this.employees = await this.employeeService.getAll(this.searchText);
  }

  openDeleteModal(template: TemplateRef<any>, employee: IEmployee) {
    this.selectedEmployee = employee;
    this.modalRef = this.modalService.show(template);
  }

  deleteEmployee() {
    const index = this.employees.findIndex(employee => employee.name === this.selectedEmployee.name);
    this.employeeService.delete(index);
    this.getAll();
    this.modalRef.hide();
  }
}


