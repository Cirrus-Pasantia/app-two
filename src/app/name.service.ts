import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// @ts-ignore
import { nameSubject$ } from '@cirrusit/flux';
@Injectable({
  providedIn: 'root'
})
export class NameService {
  private name: string = 'Chelsea';
  private streamName = nameSubject$;
  streamName$ = this.streamName.asObservable();
  
  /*name = nameSubject$;
  setName(name) {
    this.name = name;
  }*/
  constructor() { }
}
