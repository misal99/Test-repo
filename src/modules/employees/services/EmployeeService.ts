import { Injectable } from '@angular/core';
import { IEmployee } from '../employee.model';


@Injectable()
export class EmployeeService {
  public employees: IEmployee[] = [
    {name: 'Pratik', designation: 'Front End Developer', salary: 20000},
    {name: 'Abhik', designation: 'UI Developer', salary: 200000},
    {name: 'Parag', designation: 'Java Developer', salary: 15000},
  ];

  constructor() { }

  async getAll(query?: string): Promise<IEmployee[]> {
    const data = this.getSessionStorageData();
    if (data) {
      if (query) {
        return this.filterData(data, query);
      }
      return data;
    } else {
      this.setSessionStorageData();
      if (query) {
        return this.filterData(this.employees, query);
      }
      return this.employees;
    }
  }

  async delete(index: number) {
    this.employees.splice(index, 1);
    this.setSessionStorageData();
  }

  create(employee: IEmployee) {
    this.employees.push(employee);
    this.setSessionStorageData();
  }

  update(index: number, employee: IEmployee) {
    this.employees[index] = employee;
    this.setSessionStorageData();
  }

  setSessionStorageData() {
    window.sessionStorage.setItem('employees', JSON.stringify(this.employees));
  }

  getSessionStorageData() {
    return JSON.parse(window.sessionStorage.getItem('employees'));
  }

  filterData(data: IEmployee[], query: string) {
    const result: IEmployee[] = [];
    data.forEach((item: IEmployee) => {
      if (item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.designation.toLowerCase().includes(query.toLowerCase()) ||
          item.salary.toString().includes(query.toLowerCase())
      ) {
        result.push(item);
      }
    });
    return result;
  }

  checkForDuplicate(name: string) {
    const match = this.employees.find(employee => employee.name.toLowerCase() === name.toLowerCase());
    if (match) {
      throw new Error('Name already exits, please try another one');
    }
  }

}
