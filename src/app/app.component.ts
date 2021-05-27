import { Component, OnChanges } from '@angular/core';
import { assetUrl } from 'src/single-spa/asset-url';
//import {onChanges} from '@angular/core'; 
import { OnInit } from '@angular/core';
// @ts-ignore
import { nameSubject$ } from '@cirrusit/flux';
import {NameService} from './name.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  imageUrl = assetUrl('../assets/logo.png');
  title = 'app-two';
  name = 'United';
  
  constructor(private nameService: NameService) {
    this.nameService.streamName$.subscribe(name => {
      console.log('Nombre llegado es ',name);
      this.name = name;
      
    })
    //this.name = nameService.name.getValue();
  }
  /*
  ngOnInit(){
    this.nameService.name.subscribe(name => {
      this.name = name;
      console.log('El nombre que llego es ',this.name);
    });*/
    /*
    nameSubject$.subscribe(name => {
      this.name = name;
      console.log('El nombre que llego es ',this.name);
    })
  }*/
}
