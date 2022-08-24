import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  customersForm:FormGroup;
  listData:any;

  constructor(private fb:FormBuilder){
    this.listData=[];
    this.customersForm = this.fb.group({
      id:['', Validators.required],
      name:['', Validators.required],
      city:['', Validators.required],
      age:['', Validators.required],
    })
  }

  public addItem():void{
    this.listData.push(this.customersForm.value);
    this.customersForm.reset();
  }

  reset(){
    this.customersForm.reset();
  }
removeItems(element:any){
    this.listData.forEach((value: any,index: any)=>{
      if(value == element)
      this.listData.splice(index,1)
    });
}

update(id:any): void{
 let currentProduct = this.listData.find((p:any)=>{
      return p.id == id;
  });
  console.log(currentProduct);
  console.log(currentProduct.id);

  // let x = this.customersForm.controls[id] as FormControl;
  // x.patchValue("test");

  let xfc = new FormControl();
  xfc.patchValue("sf");
  console.log(xfc);

}

  ngOnInit(): void {

  }

}
