import { Component, OnInit } from '@angular/core';
import { MenuService } from "../../services/menu.service";
import { IMenuItem } from 'src/app/interfaces/menu.interface';
import { Observable } from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuItems : Observable<IMenuItem[]>;

  constructor(private menuService : MenuService) { }

  ngOnInit() {
    this.menuService.getItemsMenu().subscribe(resp =>{
      console.log("Menuresponse= ", resp);
      //this.menuItems=resp;
    
    })
    this.menuItems=this.menuService.getItemsMenu();
  }

}
