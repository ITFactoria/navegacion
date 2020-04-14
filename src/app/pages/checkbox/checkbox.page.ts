import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: 'true' 
    },
    {
      name: 'secondary',
      selected: 'false' 
    },
    {
      name: 'tertiary',
      selected: 'true' 
    },
    {
      name: 'success',
      selected: 'false' 
    },



  ]
  
  titulo: string ='Checkbox Component';

  constructor() { }

  ngOnInit() {
  }
  onClick(i){
    console.log(i);
  }

}
