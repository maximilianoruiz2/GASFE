import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'

declare var VANTA:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit{

  userValue: any;
  passwordValue: any;

  loading: boolean = false;
  /*Galileo Added Router Parameters to Constructor*/
  constructor(private router: Router) { }
  
  // VantaJS Initialization
   ngAfterViewInit(): void {
     VANTA.CLOUDS({
       el: '#vantajs', // element selector string or DOM object reference
       color: 0x000000,
       waveHeight: 20,
       shininess: 50,
       waveSpeed: 1.5,
       zoom: 0.75 ,
       skyColor: 0x38657d
     })

  }

  public loginClick() {
   

    this.loading = true;

    setTimeout(() => {
        this.loading = false
    }, 2000);

    //alert('Login Fail');
    //this.router.navigate(['/home']);
  }

}
