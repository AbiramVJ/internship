import { Injectable } from '@angular/core';
import { Employee } from '../entities/Employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getAll():Employee[]{
    return[
      {id:1, name:'kamal', birthday:'10/10/2020', nic:'970450882v',gender:'male'},
      {id:1, name:'kamal', birthday:'10/10/2020', nic:'970450882v',gender:'male'},
      {id:1, name:'kamal', birthday:'10/10/2020', nic:'970450882v',gender:'male'},
      {id:1, name:'kamal', birthday:'10/10/2020', nic:'970450882v',gender:'male'},
      {id:1, name:'kamal', birthday:'10/10/2020', nic:'970450882v',gender:'male'},
    ]
  }
}
