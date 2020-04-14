import { Component } from '@angular/core';
import { MenuService } from "../services/menu.service";
import { Observable } from 'rxjs';
import { IMenuItem } from '../interfaces/menu.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menuItems : Observable<IMenuItem[]>;

  constructor(private menuService : MenuService) { }
  
  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems(){
    this.menuItems = this.menuService.getItemsMenu();
    console.log("mnuitems: ", this.menuItems);

  }

  navegarPagina() {}



}
