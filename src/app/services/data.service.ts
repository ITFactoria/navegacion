import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Iuser } from "../interfaces/user.interface";
import { Observable,  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { }

  getUsers():Observable<Iuser[]>{
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users').pipe(
      map (response => response as Iuser[]));;
  }
}
