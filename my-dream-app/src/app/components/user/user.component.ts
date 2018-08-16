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
  onClick(){
    this.name ='Dawood Ahmed Kehinde';
    this.hobbies.pop();
  }
 addHobby(hobby){
   this.hobbies.unshift(hobby);
   return false;
 }
 deleteHobby(hobby){
   for( let i=0; i< this.hobbies.length; i++ ){
     if(this.hobbies[i] == hobby){
       this.hobbies.splice(i, 1)

     }

   }
 }
}
interface Address {
  street: string;
  city: string;
  state: string;
}
