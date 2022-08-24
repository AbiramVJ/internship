import { Component, OnInit } from '@angular/core';
import {Employee} from "../../../entities/employee";
import {EmployeeService} from "../../../services/employee.service";
import {FormControl, Validators} from "@angular/forms";
import {GenderService} from "../../../services/gender.service";
import {Gender} from "../../../entities/gender";

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  employees: Employee[] = [];
  genders: Gender[] = [];

  displayedColumns: string[] = [];

  nameField =  new FormControl();
  genderField = new FormControl();

  constructor(private genderService:GenderService,private employeeService:EmployeeService) {
  }

  ngOnInit(): void {
    this.loadAll();
  }

  async loadAll(): Promise<void> {
    this.displayedColumns = ['id', 'name', 'age', 'nic', 'gender', 'more-col', 'delete-col', 'update-col'];
    this.genders = await this.genderService.getAll();
    this.employees = await this.employeeService.getAll();
    console.log(this.employees);
  }

  async search(): Promise<void>{
    let searchName = this.nameField.value;
    let searchGender = this.genderField.value;
    let searchText = '';
    if (searchName != null && searchGender != null){
      searchText = "name="+searchName+"&gender="+searchGender;
    }else if (searchName != null){
      searchText = "name="+searchName
    }else if (searchGender != null){
      searchText = "gender="+searchGender;
    }

    if (searchText != ''){
      this.employees = await this.employeeService.searchAll(searchText);
    }

  }

  async delete(employee: Employee) {
    await this.employeeService.delete(employee.id);
    await this.loadAll();
  }
  getId(id:number){
   const result = this.employees.filter(data => data.id == id);
   console.log(result);
   return result;
  }
}
