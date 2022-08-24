import { Injectable } from '@angular/core';
import { Student } from '../Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  getAll():Student[]{
    return[
      { id: 1,name: 'kamal', city: 'Gampaha',mobile: '0114547586'},
      { id: 2,name: 'kamal', city: 'colombo',mobile: '011457586'},
      { id: 3,name: 'kamal', city: 'galle',mobile: '011454586'},
      { id: 4,name: 'kamal', city: 'jaffna',mobile: '0145445586'},
      { id: 5,name: 'kamal', city: 'matara',mobile: '011447586'}

    ]
  }


}
