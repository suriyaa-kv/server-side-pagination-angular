import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fullPjt';
  isLoggedIn;

  ngOnInit() {
   if(JSON.parse(localStorage.getItem('data')).userName){
     this.isLoggedIn=true;
   }else{
     this.isLoggedIn=false
   }
  }

  changeHide(val: boolean) {
    this.isLoggedIn = val;
    console.log(this.isLoggedIn)
  }

  signOut(){
    localStorage.clear()  
    this.isLoggedIn=false
  }
}

