import { StudentService } from './entities/services/student.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Student } from './entities/Student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  value1 = new FormControl();
  value2 = new FormControl();
  answer = new FormControl();

  sum(): void {
    const num1: number = Number(this.value1.value);
    const num2: number = Number(this.value2.value);

    this.answer.setValue(num1 + num2);
  }

  sub(): void {
    const num1: number = Number(this.value1.value);
    const num2: number = Number(this.value2.value);

    this.answer.setValue(num1 - num2);
  }

  mul(): void {
    const num1: number = Number(this.value1.value);
    const num2: number = Number(this.value2.value);

    this.answer.setValue(num1 * num2);
  }

  div(): void {
    const num1: number = Number(this.value1.value);
    const num2: number = Number(this.value2.value);

    this.answer.setValue(num1 / num2);
  }

  //array

  students: Student[] = [];

  constructor(private StudentService: StudentService){

  }
  loadAll():void{
    this.students = this.StudentService.getAll();
  }

  ngOnInit():void{
    this.loadAll();
  }
}
