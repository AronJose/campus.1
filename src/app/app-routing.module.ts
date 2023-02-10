import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyEditComponent } from './faculty/faculty-edit/faculty-edit.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultylistComponent } from './faculty/facultylist/facultylist.component';
import { InchargeeditComponent } from './inchargeedit/inchargeedit.component';
import { ListSchoolInchageComponent } from './list-school-inchage/list-school-inchage.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { SchooleditComponent } from './schoollist/schooledit/schooledit.component';
import { SchoollistComponent } from './schoollist/schoollist.component';
import { SchoolregComponent } from './schoolreg/schoolreg.component';
import { StudentRegComponent } from './student-reg/student-reg.component';
import { StudenteditComponent } from './studentlist/studentedit/studentedit.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'principalreg',component:PrincipalComponent},
  {path:'schoolreg',component:SchoolregComponent},
  {path:'schoollist',component:SchoollistComponent},
  {path:'schooledit/:id',component:SchooleditComponent},
  {path:'listschoolIncharg',component:ListSchoolInchageComponent},
  {path:'inchargedit/:id',component:InchargeeditComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'facultylist',component:FacultylistComponent},
  {path:'facultyedit/:id',component:FacultyEditComponent},
  {path:'studentreg',component:StudentRegComponent},
  {path:'studentlist',component:StudentlistComponent},
  {path:'studentedit/:id',component:StudenteditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
