import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  
  
  <!-- <user></user> -->



  <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" (click)="toggleState()">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand">Demo Justice</a>
            </div>
            <div class="collapse navbar-collapse" [ngClass]="{ 'in': isIn }">   
                <ul class="nav navbar-nav" routerLinkActive="active">
                    <li class="nav-item"><a class="nav-link" routerLink="/">Index</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="/home">Home</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="/about">About</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="/login">Login</a></li>
                    <li class="nav-item"><a class="nav-link" routerLink="courses">Courses</a></li>
                </ul>
            </div>
        </div>
  </nav>


  <br><br>
  <div>
       <router-outlet></router-outlet> 
  </div>
  
  `,
})
export class AppComponent  {

    isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false;
    }

}
