import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard }  from './AuthGuard';


const routes: Routes = [
  { path: 'default', component: DefaultComponent , canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
