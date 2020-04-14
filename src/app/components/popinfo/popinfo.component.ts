import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  opciones = Array(63);

  constructor(private popoverCtrl : PopoverController) { }

  ngOnInit() {}

  showItem(i:number){
    console.log(i);
    this.popoverCtrl.dismiss({
      data : i
    })

  }

}
