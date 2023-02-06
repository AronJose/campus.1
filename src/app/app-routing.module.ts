import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { SchooleditComponent } from './schoollist/schooledit/schooledit.component';
import { SchoollistComponent } from './schoollist/schoollist.component';
import { SchoolregComponent } from './schoolreg/schoolreg.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path:'user',component:UserRegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'adminreg',component:AdminComponent},
  {path:'principalreg',component:PrincipalComponent},
  {path:'schoolreg',component:SchoolregComponent},
  {path:'schoollist',component:SchoollistComponent},
  {path:'schooledit/:id',component:SchooleditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
