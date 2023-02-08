import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InchargeeditComponent } from './inchargeedit/inchargeedit.component';
import { ListSchoolInchageComponent } from './list-school-inchage/list-school-inchage.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { SchooleditComponent } from './schoollist/schooledit/schooledit.component';
import { SchoollistComponent } from './schoollist/schoollist.component';
import { SchoolregComponent } from './schoolreg/schoolreg.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {path:'user',component:UserRegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'principalreg',component:PrincipalComponent},
  {path:'schoolreg',component:SchoolregComponent},
  {path:'schoollist',component:SchoollistComponent},
  {path:'schooledit/:id',component:SchooleditComponent},
  {path:'listschoolIncharg',component:ListSchoolInchageComponent},
  {path:'inchargedit/:id',component:InchargeeditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
