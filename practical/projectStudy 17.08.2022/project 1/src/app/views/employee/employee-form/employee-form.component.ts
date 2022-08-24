import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GenderService} from "../../../services/gender.service";
import {Gender} from "../../../entities/gender";
import {Employee} from "../../../entities/employee";
import {EmployeeService} from "../../../services/employee.service";



@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  genders: Gender[] = [];

  employeeForm = new FormGroup({
    name: new FormControl("",[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255),
      Validators.pattern('^[A-Z][a-z]{2,}$'),
    ]),
    age: new FormControl("", [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(2),
      Validators.pattern('^([1-1][8-9]|[2-4][0-9]|50)$'),
    ]),
    nic: new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12),
      Validators.pattern('^([0-9]{9}[x|X|vV]|[0-9]{12})$'),
    ]),
    gender: new FormControl('',[
      Validators.required
    ])
  });

  get nameField(): FormControl {
    return this.employeeForm.controls.name as FormControl;
  }

  get ageField(): FormControl {
    return this.employeeForm.controls.age as FormControl;
  }

  get nicField(): FormControl {
    return this.employeeForm.controls.nic as FormControl;
  }

  get genderField(): FormControl {
    return this.employeeForm.controls.gender as FormControl;
  }

  constructor(private genderService:GenderService,
              private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.loadAll();
  }

  async loadAll(): Promise<void> {
    this.genders = await this.genderService.getAll();
  }

  async submit(): Promise<void>{
    if (!this.employeeForm.invalid){
      try {
        let employee = new Employee();
        const gender = new Gender();
        employee.name = this.nameField.value;
        employee.age = this.ageField.value;
        employee.nic = this.nicField.value;
        gender.id = this.genderField.value;
        employee.gender = gender;
        employee = await this.employeeService.add(employee);

        console.log(employee);
        this.clearForm();
      }catch (e:any){
        alert(e.error.text);
      }
    }
  }


  clearForm() {
    this.employeeForm.reset();
  }
}
