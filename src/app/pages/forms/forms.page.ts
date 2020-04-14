import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {
  titulo ="Forms";
  user = {
    name : '',
    email :'',
    passwd: ''


  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(){
    console.log(this.user);
  }

}
