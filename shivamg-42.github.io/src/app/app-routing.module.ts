import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { appendFile } from 'fs';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TireFormComponent } from './tire-form/tire-form.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'tire-form', component: TireFormComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
