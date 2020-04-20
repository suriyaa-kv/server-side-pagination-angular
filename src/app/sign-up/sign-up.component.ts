import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserService} from '../user.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private userService:UserService) { }

  
  ngOnInit() {
  }

  signUpForm=new FormGroup({
    userName:new FormControl(),
    email:new FormControl(),
    password:new FormControl()
})

registerUser(){
  console.log(this.signUpForm.value)
  this.userService.registerUser(this.signUpForm.value).subscribe(data=>{
    console.log("data",data)
  })

}

}
