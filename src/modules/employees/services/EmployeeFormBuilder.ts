import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { IEmployee } from '../employee.model';

@Injectable()
export class EmployeeFormBuilder {

  constructor(private formBuilder: FormBuilder) {}
  createForm(data?: IEmployee ) {
    return this.formBuilder.group({
      name: [data ? data.name : '', Validators.required],
      designation:  [data ? data.designation : '', Validators.required],
      salary:  [data ? data.salary : null, Validators.required],
    });
  }
}
