import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/entities/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-specific-employe',
  templateUrl: './specific-employe.component.html',
  styleUrls: ['./specific-employe.component.scss'],
})
export class SpecificEmployeComponent implements OnInit {
  employees: Employee[] = [];
  semb:any[]=[];
  id:number = 0;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute
) {

this.route.params.subscribe(res => {
    this.id = res.id;
  });

  }

  ngOnInit(): void {
    this.loadAll();
  }

  async loadAll() {
    this.employees = await this.employeeService.getAll();
    // console.log(this.employees);
    const specificEmployee = this.employees.filter((data) => data.id == this.id);
    console.log(specificEmployee);
    this.semb.push(specificEmployee[0]);

}
}
