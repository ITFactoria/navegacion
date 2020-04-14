import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  titulo : string ="Date Time Component";
  fechaComida : Date = new Date();
  customPickerOptions;
  customDate;

  constructor() { 
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log('Clicked Save!');
          console.log(evento);
      }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }
  

  ngOnInit() {
  }
  cambioFecha(event){
    console.log('ionChange', event);
    console.log('fecha', new Date(event.detail.value));
  }

}
