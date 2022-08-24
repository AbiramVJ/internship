import { FormControl } from '@angular/forms';
import { Gender } from './../../../entities/gender';
import { Employee } from './../../../entities/employee';
import {EmployeeService} from "../../../services/employee.service";
import {GenderService} from "../../../services/gender.service";

import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {

  employees: Employee[] = [];
  genders:Gender[]= [];

  displayedColumns: String[] = [];

  nameField = new FormControl();
  genderField = new FormControl();

  constructor(private genderService:GenderService,private employeeService:EmployeeService) {
  }

  ngOnInit(): void {
    this.loadAll();
  }
// load in table
  async loadAll(): Promise<void>{
    this.displayedColumns = ['id','name', 'age', 'nic', 'gender', 'more-col', 'delete-col', 'update-col'];

    this.genderService.getAll().then(gen => {
      this.genders = gen;
    })
    // this.genders = await this.genderService.getAll();
    this.employeeService.getAll().then(emb => {
      this.employees = emb;
    })
    // this.employees = await this.employeeService.getAll();

    // this.employeeService.getAll().subscribe(res => {
    //   console.log(res);
    //   this.employees.push(res)
    // }, error =>{
    //   console.error(error);
    // })
    // forkJoin([this.genders,this.employees]).subscribe(async result => {
    //   console.log(result);
    // })
    // console.log(this.employees);
  }

  // search Functionality
  async search(): Promise<void>{
    let searchName = this.nameField.value;
    let searchGender = this.genderField.value;

    let searchText = '';
    if(searchName !=null && searchGender !=null){
      searchText = "name="+ searchName+"&gender="+searchGender;
    }else if(searchName !=null){
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
}
