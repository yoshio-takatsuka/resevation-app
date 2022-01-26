import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';



import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
  { path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule

  ],
  providers: [
    AuthService
  ],
  bootstrap: []
})
export class AuthModule { }
