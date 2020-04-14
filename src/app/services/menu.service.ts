import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMenuItem } from "../interfaces/menu.interface";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  getItemsMenu(){
    return this.httpClient.get<IMenuItem[]>("/assets/data/menu.json");
  }
}
