import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(event: any) {
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event: event,
      translucent: true,
      mode:'ios',
      backdropDismiss : false
      
    });
    await popover.present();
    const {data} = await popover.onWillDismiss();
    console.log(data);
    
  }

}
