import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string = 'Uday';
  age: number = 3
  month: any = "april"
 
  
names: string[] = ["Pankaj", "Neeraj", "Poonam"];
empCodes: number[] = [1, 2, 3, 4, 5];
employees: any[] = [1, "two", true, { name: "Pankaj" }];
isActive: boolean = true; 

testFunction(){
  enum Department {   
    Development,   
    Sales,  
    HR
    }
    let selectedDepartment: Department = Department.Sales;
    console.log(selectedDepartment);
  }

  contactData: any;
 
  constructor(private SharedService: SharedService ){
    
    this.SharedService.castData.subscribe((data) => {
      this.contactData=data;
     });
     console.log(this.contactData)  
  }
  
}