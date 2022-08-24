import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../entities/employee";
import {ApiConfig} from "../shared/api-config";
import {Gender} from "../entities/gender";

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  constructor(private http:HttpClient) { }

  async getAll(): Promise<Gender[]>{
    const url = ApiConfig.createURL("genders");
    let genders = this.http.get<Gender[]>(url).toPromise();
    return genders;
  }
}
