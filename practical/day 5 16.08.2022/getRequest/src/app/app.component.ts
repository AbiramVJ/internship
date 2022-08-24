import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // url = 'https://jsonplaceholder.typicode.com/users';
  url = 'https://financemanagementapi.azure-api.net/Income/api/Incomes'
   items = [];
   allUsers = [];



  userList :any;
  constructor(private http:HttpClient){

  }

  ngOnInit(){
      this.fetchUsers();
  }
  private fetchUsers(){
    this.http.get(this.url)
    .pipe(map((res)=>{

      for(const key in res){
        if(res.hasOwnProperty(key)){
          this.items.push({...res[key]});

        }

      }
      return this.items;

    }))
    .subscribe((users)=>{
      console.log(users);
      this.allUsers = users;
    })
  }
}
