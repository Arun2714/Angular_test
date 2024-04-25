import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
 
 
 
@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
 
  private contactData = new BehaviorSubject<any>({});
  castData = this.contactData.asObservable();
 
  constructor(){
   
  }
  setcontactData(data: any){
    this.contactData.next(data);
  }
}