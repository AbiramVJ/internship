import { Component, OnInit } from '@angular/core';
import {Gender} from "../../../entities/gender";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GenderService} from "../../../services/gender.service";
import {EmployeeService} from "../../../services/employee.service";
import {Employee} from "../../../entities/employee";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee-update-form',
  templateUrl: './employee-update-form.component.html',
  styleUrls: ['./employee-update-form.component.scss']
})
export class EmployeeUpdateFormComponent implements OnInit {
  genders: Gender[] = [];
  selectedId?: number;
  employee?: Employee[];

  // new form
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

  // get values
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
              private route: ActivatedRoute,
              private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( async (params) => {
      // @ts-ignore
      this.selectedId =  + params.get('id');   // get the id from the parameter
      await this.loadAll();
    });
  }

  async loadAll(): Promise<void> {
    this.genders = await this.genderService.getAll();
    this.employee = await this.employeeService.searchAll("id="+this.selectedId);
    this.fillForm();
  }

  // get the old data in the form
  fillForm(): void{
    // @ts-ignore
    this.nameField.patchValue(this.employee.name);
    // @ts-ignore
    this.ageField.patchValue(this.employee.age);
    // @ts-ignore
    this.nicField.patchValue(this.employee.nic);
    // @ts-ignore
    this.genderField.patchValue(this.employee.gender.id);
  }

  //submit the data
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
        if (!(this.nameField.pristine && this.ageField.pristine && this.nicField.pristine && this.genderField.pristine)){
          employee = await this.employeeService.update(this.selectedId,employee);
          console.log(employee);
          this.clearForm();
        }

      }catch (e:any){
        alert(e.error.text);
      }
    }
  }
  clearForm() {
    this.employeeForm.reset();
  }
}
