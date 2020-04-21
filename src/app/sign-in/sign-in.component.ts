import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import {UserService} from '../user.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  @Output() onHide = new EventEmitter<boolean>();

  ngOnInit() {
  }
  isLofon=true;
  signInForm=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
})

validateData(){
  this.userService.validateUser(this.signInForm.value).subscribe(data=>{
    console.log("data",data)
    localStorage.setItem('data',JSON.stringify(data))

    this.onHide.emit(true)
   
    console.log(JSON.parse(localStorage.getItem('data')))
  })

}

}
