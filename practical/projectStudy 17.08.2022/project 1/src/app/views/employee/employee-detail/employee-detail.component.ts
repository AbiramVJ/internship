import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entities/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService:EmployeeService) {

  }


  ngOnInit(): void {
    this.loadAll();
  }
  async loadAll(): Promise<void>{
    this.employees = await this.employeeService.getAll();
    console.log(this.employees);

  }

}


