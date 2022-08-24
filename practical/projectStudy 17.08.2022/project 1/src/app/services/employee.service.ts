
import { ApiConfig } from './../shared/api-config';
import { Employee } from './../entities/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
constructor(private http:HttpClient){}

/**
 * method get
 * url:http://localhost:4200/employees
 * parameter:none
 */

async getAll(): Promise<Employee[]>{
  const url = ApiConfig.createURL("employees");
  let employees = this.http.get<Employee[]>(url).toPromise();
  return employees;

}

// async getAll() {
//   new Promise<Employee[]>((resolve, reject) => {
//     const url = ApiConfig.createURL("employees");
//     this.http.get(url)
//       .toPromise()
//       .then(
//         res => {
//           let employees = res;
//           console.log(res);
//           return employees ;
//         }
//       );
//   });
//   //return employees ;

// }

// getAll() {
//   let url = `http://127.0.0.1/project_online_7_10_1_js_php/test4/test4/server/employees`;
//   return this.http.get(url).pipe(map(res =>{
//     return new Employee(res);
//   }));
// }

/**
 * search
 * url:http://localhost:4200/employees?
 */

async searchAll(searchText:string):Promise<Employee[]>{
const url = ApiConfig.createURL("employees?"+searchText);
let employees = this.http.get<Employee[]>(url).toPromise();
return employees;

}

/**
 * method : Add
 * url : employees
 * parameter:none
 */

 async add(employee: Employee): Promise<Employee>{
  const url = ApiConfig.createURL("employees");
  return this.http.post<Employee>(url, employee).toPromise();
}

/**
 * method : delete
 * url : employees
 * parameter:id
 */

async delete(id?: number): Promise<void>{
  const url = ApiConfig.createURL("employees/"+id);
  let employees = this.http.delete(url).toPromise();
}

/**
 * method : update
 * url : employees
 * parameter:id
 */
async update(id?: number, employee?: Employee): Promise<Employee>{
  const url = ApiConfig.createURL("employees/"+id);
  return this.http.put<Employee>(url, employee).toPromise();
}

}
