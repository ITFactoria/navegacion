import { Component, OnInit } from '@angular/core';
import { Animal } from "../../interfaces/animal.interface";
import { ANIMALES } from "../../../assets/data/data.animales";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  animales : Animal[]= ANIMALES;

  constructor() { }

  ngOnInit() {
  }

  play(animal:Animal){
    console.log(animal);
    let audio = new Audio();
    audio.src = animal.audio;
    audio.load();
    audio.play();
    animal.reproduciendo=true;
    setTimeout(()=>animal.reproduciendo=false,animal.duracion * 1000);
  }

  eliminar(idx:number){
    this.animales.splice(idx,1);

  }

  doRefresh(event){
    console.log("Inicion refresh");
    setTimeout(()=>{
      console.log("End refresh");
      this.animales = ANIMALES.slice(0);

      event.target.complete();

    },2000);
  }

}
