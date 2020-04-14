import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from "rxjs";
import { IonList } from '@ionic/angular';
import { Iuser } from "../../interfaces/user.interface";


@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  titulo: string = "Fab Component";
  
  @ViewChild('lista', {static: false}) lista:IonList;

  //users: Observable<any>;
  users: Iuser[];
  
  user: {
    id: string;
      name: string;
      username: string;
      email: string;
      address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
          lat: string;
          lng: string;
        }
      }
}

  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(console.log);
    //this.users = this.dataService.getUsers();
    this.dataService.getUsers().subscribe(resp=>{
      console.log("response",resp);
      this.users = resp;
      console.log("this.userr", this.users);
    });
     

  }
  share(user){
    console.log('share',user);
    this.lista.closeSlidingItems();
  }
  delete(user){
    console.log('delete',user);
    this.lista.closeSlidingItems();
  }
  favorite(user){
    console.log('favorite',user);
    this.lista.closeSlidingItems();
  }

  reorderItem(event){
    console.log(event);
    //const itemMover = this.users.splice(event.detail.from,1)[0];
    //this.users.splice(event.detail.to,0,itemMover);
    event.detail.complete();
  

  }
  search(event){
    console.log(event);
  }

}
