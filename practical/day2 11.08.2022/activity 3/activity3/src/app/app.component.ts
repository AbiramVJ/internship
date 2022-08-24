import { EmployeeService } from './services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './entities/Employe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

   employees:Employee[] = [];

   constructor(private employeeService:EmployeeService){

   }

   loadAll():void{
    this.employees = this.employeeService.getAll();
   }

 ngOnInit(): void {
     this.loadAll();
 }
}
