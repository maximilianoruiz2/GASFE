import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConsoleComponent } from './console/console.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

/*Sngular Material*/
//import {MatIconModule} from '@angular/material/icon';
//import {MatDividerModule} from '@angular/material/divider';
//import {MatButtonModule} from '@angular/material/button';
//import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
//import {MatInputModule} from '@angular/material/input';
//import {MatFormFieldModule} from '@angular/material/form-field';


// Import PrimeNG modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';
import { MenubarModule} from 'primeng/menubar';



/*Galileo Aqua Smart*/
/*Page Routes URLs*/
const appRoutesAquaSmart:Routes=[

  {path:'*',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'console',component:ConsoleComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsoleComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutesAquaSmart),
    BrowserAnimationsModule,
    FormsModule,
    /*PrimeNG Imports*/
    ButtonModule,
    InputTextModule,
    PasswordModule,
    PanelModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
