import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Country } from '../Models/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private Api ='https://restcountries.com/v2';
  constructor(private httpClient:HttpClient) { }
  
  getAllCountry(){
    return this.httpClient.get<Country[]>(`${this.Api}/all`);
  }

  getCountryByName(name:string ){
    // problem because return array
    return this.httpClient
    .get<Country[]>(`${this.Api}/name/${name}`);
  }
  getCountriesByCodes(Code: string[]){
    console.log(Code.join(';'));
    console.log("++++",`${this.Api}/alpha?codes=${Code.join(';')}`);
    return this.httpClient
    .get<Country[]>(`${this.Api}/alpha?codes=${Code.join(';')}`);
  }
}
