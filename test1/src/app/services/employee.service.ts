import { Injectable } from '@angular/core';
import {Employee} from "../entities/employee";
import {HttpClient} from "@angular/common/http";
import {ApiConfig} from "../shared/api-config";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  async getAll(): Promise<Employee[]>{
    const url = ApiConfig.createURL("employees");
    let employees = this.http.get<Employee[]>(url).toPromise();
    return employees;
  }

  async searchAll(searchText: string): Promise<Employee[]>{
    const url = ApiConfig.createURL("employees?"+searchText);
    let employees = this.http.get<Employee[]>(url).toPromise();
    return employees;
  }

  async add(employee: Employee): Promise<Employee>{
    const url = ApiConfig.createURL("employees");
    return this.http.post<Employee>(url, employee).toPromise();
  }

  async delete(id?: number): Promise<void>{
    const url = ApiConfig.createURL("employees/"+id);
    let employees = this.http.delete(url).toPromise();
  }

  async update(id?: number, employee?: Employee): Promise<Employee>{
    const url = ApiConfig.createURL("employees/"+id);
    return this.http.put<Employee>(url, employee).toPromise();
  }
}
