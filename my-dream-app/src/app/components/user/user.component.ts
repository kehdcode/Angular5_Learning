import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age: number;
  sex: any;
  address: Address;
  hobbies: string[];

  constructor() { }

  ngOnInit() {
    this.name = " Kehdcode";
    this.age= 23;
    this.sex= "male";
    this.address={
      street: "22b john bash str",
      city: "lagos",
      state: "Lagos"

    }
    this.hobbies=["eating", "skeeping", "reading"];
  }
 
}
interface Address {
  street: string;
  city: string;
  state: string;
}
