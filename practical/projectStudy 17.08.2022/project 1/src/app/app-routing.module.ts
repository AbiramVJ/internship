import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeTableComponent} from "./views/employee/employee-table/employee-table.component";
import {EmployeeFormComponent} from "./views/employee/employee-form/employee-form.component";
import {EmployeeDetailComponent} from "./views/employee/employee-detail/employee-detail.component";
import {EmployeeUpdateFormComponent} from "./views/employee/employee-update-form/employee-update-form.component";

const routes: Routes = [
  {path: 'employees', component: EmployeeTableComponent},
  {path: 'employees/add', component: EmployeeFormComponent},
  {path: 'employees/:id', component: EmployeeDetailComponent},
  {path: 'employees/edit/:id', component: EmployeeUpdateFormComponent},
  {path: 'employees/details', component: EmployeeUpdateFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
